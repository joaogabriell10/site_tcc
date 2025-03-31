package com.itb.tcc.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table
public class Produto extends EntityBase {
    @Column(unique = true, nullable = false)
    private String nome;
    @Column(nullable = false)
    private double preco;

    @Lob
    @Column(nullable = false)
    private String descricao;

    @Column(name = "tipoprato")
    private String tipoPrato;

    @Lob
    private byte[] imagem;

    @Column(name = "imagemformato")
    private String imagemFormato;

    @JoinColumn(name = "paisid")
    @ManyToOne()
    private Pais pais;

    @Transient
    private long paisId;

    @Transient
    private List<Avaliacao> avaliacoes;

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public long getPaisId() {
        return paisId;
    }

    public void setPaisId(long paisId) {
        this.paisId = paisId;
    }

    public Produto() {
    }

    public Produto(String nome, double preco, byte[] imagem, String imagemFormato,
            Pais pais) {
        this.nome = nome;
        this.preco = preco;
        this.imagem = imagem;
        this.imagemFormato = imagemFormato;
        this.pais = pais;
    }

    static class Builder {
        private String nome;
        private double preco;

        private byte[] imagem;
        private String imagemFormato;
        private Pais pais;

        public Builder nome(String nome) {
            this.nome = nome;
            return this;
        }

        public Builder preco(double preco) {
            this.preco = preco;
            return this;
        }

        public Builder imagem(byte[] imagem) {
            this.imagem = imagem;
            return this;
        }

        public Builder imagemFormato(String imagemFormato) {
            this.imagemFormato = imagemFormato;
            return this;
        }

        public Builder pais(Pais pais) {
            this.pais = pais;
            return this;
        }

        public Produto build() {
            return new Produto(nome, preco, imagem, imagemFormato, pais);
        }
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public byte[] getImagem() {
        return imagem;
    }

    public void setImagem(byte[] imagem) {
        this.imagem = imagem;
    }

    public String getImagemFormato() {
        return imagemFormato;
    }

    public void setImagemFormato(String imagemFormato) {
        this.imagemFormato = imagemFormato;
    }

    public Pais getPais() {
        return pais;
    }

    public void setPais(Pais pais) {
        this.pais = pais;
    }

    public List<Avaliacao> getAvaliacoes() {
        return avaliacoes;
    }

    public void setAvaliacoes(List<Avaliacao> avaliacoes) {
        this.avaliacoes = avaliacoes;
    }

    public String getTipoPrato() {
        return tipoPrato;
    }

    public void setTipoPrato(String tipoPrato) {
        this.tipoPrato = tipoPrato;
    }

}