package com.itb.tcc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;

import com.itb.tcc.entity.Pais;

@Repository
public interface PaisRepository extends RepositoryBase<Pais> {

    @Override
    //@Query(value = "select p.*, null as \"capa\" from pais as p", nativeQuery = true)
    @NonNull
    List<Pais> findAll();

    //@Query(value = "select p.*, null as \"capa\" from pais as p where nome = :nome and status = true", nativeQuery = true)
    Pais findByNome(String nome);
}
