package com.itb.tcc.enums;

public enum Status {
    ATIVO(1),
    INATIVO(0);

    byte valor;

    public byte getValor() {
        return valor;
    }

    Status(int valor) {
        this.valor = (byte) valor;
    }
}
