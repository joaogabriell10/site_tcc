package com.itb.tcc.entity;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table
public class Pais extends EntityBase {
    @Column(unique = true, nullable = false)
    private String nome;
    @Column(columnDefinition = "CHAR(2)", length = 2, nullable = false, unique = true)
    private String codigo;

    @Transient
    private List<Produto> produtos = new ArrayList<>();

    @Lob
    private byte[] capa;
    @Column(name = "capaformato")
    private String capaFormato;

    public byte[] getCapa() {
        return capa;
    }

    public void setCapa(byte[] capa) {
        this.capa = capa;
    }

    public String getCapaFormato() {
        return capaFormato;
    }

    public void setCapaFormato(String capaFormato) {
        this.capaFormato = capaFormato;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }

    public void setProdutos(List<Produto> produtos) {
        this.produtos = produtos;
    }

    @Override
    public String toString() {
        return "Pais [nome=" + nome + ", codigo=" + codigo + ", capaFormato=" + capaFormato + "]";
    }

}
