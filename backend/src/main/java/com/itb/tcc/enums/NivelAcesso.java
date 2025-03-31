package com.itb.tcc.enums;

public enum NivelAcesso {
    ADMNISTRADOR("ADMIN"),
    CLIENTE("CLIENTE");

    String valor;

    public String getValor() {
        return valor;
    }

    NivelAcesso(String valor) {
        this.valor = valor;
    }
}
