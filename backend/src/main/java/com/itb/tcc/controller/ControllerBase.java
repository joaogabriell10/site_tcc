package com.itb.tcc.controller;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.itb.tcc.entity.EntityBase;
import com.itb.tcc.enums.Status;
import com.itb.tcc.repository.RepositoryBase;

public abstract class ControllerBase<Entity extends EntityBase, Repository extends RepositoryBase<Entity>> {
    protected Repository repository;

    public ControllerBase(Repository repository) {
        this.repository = repository;
    }

    @GetMapping("listar")
    public List<Entity> listar() {
        return repository.findAll();
    }

    @GetMapping("listar/cliente")
    public List<Entity> listarCliente() {
        return repository.findAllByStatus(Status.ATIVO.getValor());
    }

    @PostMapping("salvar")
    public Entity salvar(@RequestBody Entity corpo) {
        if (corpo.getId() == 0 && corpo.getStatus() == -1) {
            corpo.setStatus(Status.ATIVO);
        }
        return repository.save(corpo);
    }

    @GetMapping("obter/{id}")
    public Entity obter(@PathVariable long id) {
        return repository.findById(id).get();
    }

    @GetMapping("deletar/{id}")
    public String deletar(@PathVariable long id) {
        repository.deleteById(id);
        return "{}";
    }
}
