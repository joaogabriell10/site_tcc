package com.itb.tcc.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itb.tcc.entity.Pais;
import com.itb.tcc.enums.Status;
import com.itb.tcc.repository.PaisRepository;
import com.itb.tcc.repository.ProdutoRepository;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/paises/")
@CrossOrigin(value = "*")
public class PaisController extends ControllerBase<Pais, PaisRepository> {
    private ProdutoRepository produtoRepository;

    public PaisController(PaisRepository repository, ProdutoRepository produtoRepository) {
        super(repository);
        this.produtoRepository = produtoRepository;
    }

    @GetMapping("obter/nome/{nome}")
    public Pais obterPorNome(@PathVariable String nome) {
        Pais pais = repository.findByNome(nome);
        pais.setProdutos(produtoRepository.findAllByPais(pais).stream().map((produto) -> {
            produto.setPais(null);
            return produto;
        }).toList());
        return pais;
    }

    @GetMapping("capa/{id}")
    public byte[] capa(@PathVariable long id, HttpServletResponse response) {
        Pais pais = repository.findById(id).get();
        response.setHeader("Content-Type", pais.getCapaFormato());
        return pais.getCapa();
    }

    @GetMapping("home/procurados")
    public Pais[] procurados() {
        List<Pais> todosPaises = repository.findAllByStatus(Status.ATIVO.getValor());
        Pais[] pais = new Pais[todosPaises.size() > 4 ? 4 : todosPaises.size()];

        for (int i = 0; i < pais.length; i++) {
            pais[i] = todosPaises.get(i);
        }
        return pais;
    }

}
