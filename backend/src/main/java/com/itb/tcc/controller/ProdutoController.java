package com.itb.tcc.controller;

import java.util.Comparator;
import java.util.List;
import java.util.Random;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.itb.tcc.entity.Avaliacao;
import com.itb.tcc.entity.Pais;
import com.itb.tcc.entity.Produto;
import com.itb.tcc.enums.Status;
import com.itb.tcc.repository.AvaliacaoRepository;
import com.itb.tcc.repository.PaisRepository;
import com.itb.tcc.repository.ProdutoRepository;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/produtos/")
@CrossOrigin(value = "*")
public class ProdutoController extends ControllerBase<Produto, ProdutoRepository> {
    private PaisRepository paisRepository;
    private AvaliacaoRepository avaliacaoRepository;

    public ProdutoController(ProdutoRepository repository, PaisRepository paisRepository,
            AvaliacaoRepository avaliacaoRepository) {
        super(repository);
        this.paisRepository = paisRepository;
        this.avaliacaoRepository = avaliacaoRepository;
    }

    @GetMapping("obter/nome/{nome}")
    public Produto obterPorNome(@PathVariable String nome) {
        Produto produto = repository.findByNome(nome);
        List<Avaliacao> avaliacoes = avaliacaoRepository.findAllByProdutoAndStatus(produto, Status.ATIVO.getValor());
        avaliacoes.forEach((avaliacao) -> {
            avaliacao.setProduto(null);
        });
        produto.setAvaliacoes(avaliacoes);
        return produto;
    }

    @Override
    public Produto salvar(@RequestBody Produto corpo) {
        System.out.println(corpo.getImagem());
        Pais pais = paisRepository.findById(corpo.getPaisId()).get();
        System.out.println(pais);
        corpo.setPais(pais);
        return super.salvar(corpo);
    }

    @GetMapping("imagem/{id}")
    public ResponseEntity<byte[]> imagem(@PathVariable long id, HttpServletResponse response) {
        Produto produto = repository.findById(id).get();
        System.out.println(produto.getImagemFormato());
        response.setHeader("Content-Type", produto.getImagemFormato());
        HttpHeaders headers = new HttpHeaders();

        headers.set("Content-Type", produto.getImagemFormato());

        return new ResponseEntity<byte[]>(produto.getImagem(), headers, HttpStatus.OK);
    }

    @GetMapping("home/experimente")
    public Produto[] experimenteProdutos() {

        List<Produto> todosProdutos = repository.findAllByStatus(Status.ATIVO.getValor());
        Produto[] produtos = new Produto[todosProdutos.size() > 3 ? 3 : todosProdutos.size()];
        for (int i = 0; i < produtos.length; i++) {
            int escolhido = new Random().nextInt(todosProdutos.size());
            produtos[i] = todosProdutos.get(escolhido);
            todosProdutos.remove(escolhido);
        }

        return produtos;
    }

    @GetMapping("buscar")
    public List<Produto> pesquisar(@RequestParam String consulta) {
        return repository.findByNomeContaining(consulta);
    }

    @GetMapping("home/favoritas")
    public Produto[] produtosFavoritos() {

        List<Produto> todosProdutos = repository.findAllByStatus(Status.ATIVO.getValor());
        List<Avaliacao> todasAvaliacoes = avaliacaoRepository.findAllByStatus(Status.ATIVO.getValor());
        todosProdutos.forEach((produto) -> {
            produto.setAvaliacoes(todasAvaliacoes.stream()
                    .filter((avaliacao) -> avaliacao.getProduto().getId() == produto.getId()).toList());
        });

        todosProdutos = todosProdutos.stream()
                .sorted(Comparator.comparingDouble(
                        (a1) -> a1.getAvaliacoes().stream().mapToDouble(Avaliacao::getNota).average().orElse(0)))
                .toList();
        Produto[] produtos = new Produto[todosProdutos.size() > 3 ? 3 : todosProdutos.size()];
        for (int i = 0; i < produtos.length; i++) {
            Produto produto = todosProdutos.get(todosProdutos.size() - 1 - i);
            produto.getAvaliacoes().forEach((avaliacao) -> {
                avaliacao.setProduto(null);
            });
            produtos[i] = produto;
        }

        return produtos;
    }

}
