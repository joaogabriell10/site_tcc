package com.itb.tcc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;

import com.itb.tcc.entity.Pais;
import com.itb.tcc.entity.Produto;

@Repository
public interface ProdutoRepository extends RepositoryBase<Produto> {
    @Override
    //@Query(value = "select p.*, null as \"imagem\" from produto as p", nativeQuery = true)
    @NonNull
    List<Produto> findAll();

    //@Query(value = "select p.*, null as \"imagem\" from produto as p where paisId = :#{#pais.id}", nativeQuery = true)
    List<Produto> findAllByPais(Pais pais);

    @Override
    //@Query(value = "select p.*, null as \"imagem\" from produto as p where status = true", nativeQuery = true)
    List<Produto> findAllByStatus(byte status);

    //@Query(value = "select p.*, null as \"imagem\" from produto as p where nome = :nome and status = true", nativeQuery = true)
    Produto findByNome(String nome);

    //@Query(value = "select p.*, null as \"imagem\" from produto as p where nome like concat('%', :nome, '%') and status = true", nativeQuery = true)
    List<Produto> findByNomeContaining(String nome);
}
