package com.itb.tcc.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.itb.tcc.entity.Avaliacao;
import com.itb.tcc.entity.Produto;

@Repository
public interface AvaliacaoRepository extends RepositoryBase<Avaliacao> {
    List<Avaliacao> findAllByProdutoAndStatus(Produto produto, byte Status);
}
