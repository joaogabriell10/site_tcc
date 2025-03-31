CREATE TABLE Usuario
(
   id                 INT IDENTITY,
   status             BIT DEFAULT 1,
   cpf                CHAR (11) NOT NULL,
   nome               VARCHAR (100) NOT NULL,
   telefone           VARCHAR (13) NOT NULL,
   email              VARCHAR (100) NOT NULL,
   senha              VARCHAR (100) NOT NULL,
   nivelAcesso        VARCHAR (30) NOT NULL DEFAULT 'CLIENTE', --'ADMIN' ou 'CLIENTE' 
   PRIMARY KEY (id)
);

CREATE TABLE Pais
(
   id                 INT IDENTITY,
   status             BIT DEFAULT 1,
   codigo             CHAR (2) NOT NULL UNIQUE,
   capa               VARBINARY (MAX),
   capaFormato        VARCHAR (50),
   nome               VARCHAR (100) NOT NULL UNIQUE,
   PRIMARY KEY (id)
);

CREATE TABLE Produto
(
   id              INT IDENTITY,            
   status          BIT DEFAULT 1,
   nome            VARCHAR (60) NOT NULL, 
   imagem          VARBINARY (MAX) NULL,
   imagemFormato   VARCHAR (100),
   preco           DECIMAL (5,2) NOT NULL,
   descricao       VARCHAR (MAX) NOT NULL,
   tipoPrato       VARCHAR (30) NOT NULL,
   paisId          INT,
   PRIMARY KEY (id),
   FOREIGN KEY (paisId) REFERENCES Pais(id) ON DELETE CASCADE
)

CREATE TABLE Avaliacao 
(
   id           INT IDENTITY, 
   status       BIT DEFAULT 1,
   nota         INT CHECK (nota <= 5 and nota >=0),
   comentario   VARCHAR (MAX),
   usuarioId    INT,
   produtoId    INT,
   FOREIGN KEY (usuarioId) REFERENCES Usuario(id) ON DELETE CASCADE,
   FOREIGN KEY (produtoId) REFERENCES Produto(id) ON DELETE CASCADE,
   PRIMARY KEY (id)
)

SELECT * FROM Usuario
SELECT * FROM Pais
SELECT * FROM Produto
SELECT * FROM Avaliacao