package com.itb.tcc.controller;

import java.util.Base64;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itb.tcc.entity.Usuario;
import com.itb.tcc.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuarios/")
@CrossOrigin(value = "*")
public class UsuarioController extends ControllerBase<Usuario, UsuarioRepository> {
    UsuarioController(UsuarioRepository repository) {
        super(repository);
    }

    @Override
    public Usuario salvar(@RequestBody Usuario corpo) {
        if (corpo.getId() == 0) {
            corpo.setSenha(Base64.getEncoder().encodeToString(corpo.getSenha().getBytes()));
        }
        return super.salvar(corpo);
    }

    @PostMapping("login")
    public Usuario login(
            @RequestBody Usuario usuario) {
        String senha = Base64.getEncoder().encodeToString(usuario.getSenha().getBytes());
        Optional<Usuario> usuarioEncontrado = repository.findByEmailAndSenha(usuario.getEmail(), senha);

        return usuarioEncontrado.orElseThrow();
    }
}
