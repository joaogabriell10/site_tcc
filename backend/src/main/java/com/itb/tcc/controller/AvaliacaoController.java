package com.itb.tcc.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itb.tcc.entity.Avaliacao;
import com.itb.tcc.repository.AvaliacaoRepository;

@RestController
@RequestMapping("/avaliacoes/")
@CrossOrigin(value = "*")
public class AvaliacaoController extends ControllerBase<Avaliacao, AvaliacaoRepository> {

    public AvaliacaoController(AvaliacaoRepository repository) {
        super(repository);
        // TODO Auto-generated constructor stub
    }

}
