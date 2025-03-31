package com.itb.tcc.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itb.tcc.entity.Usuario;

@Repository
public interface UsuarioRepository extends RepositoryBase<Usuario> {
    Optional<Usuario> findByEmailAndSenha(String email, String senha);
}
