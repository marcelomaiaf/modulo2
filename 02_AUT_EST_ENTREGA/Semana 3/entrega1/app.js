const express = require('express'); 
    const app = express();

    const hostname = '127.0.0.1';
    const port = 3001;
    const sqlite3 = require('sqlite3').verbose();
    const DBPATH = __dirname + '/Atividade_S3.db'; //use o nome que você achar melhor para o banco de dados

    app.use(express.json());
    app.get('/DADOS_PESSOAIS', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT SEU_NOME, CARGO, ENDERECO, EMAIL, TELEFONE, SOBRE_MIM, HABILIDADES, PERSONALIDADES FROM DADOS_PESSOAIS ORDER BY  PERSONALIDADES';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });

    app.get('/experiencia', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT EMPRESA, ANO, DESCRICAO, ATRIBUICOES, RESULTADOS_OBTIDOS, CARGO FROM EXPERIENCIA ORDER BY CARGO';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });

    app.get('/formacao', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT CURSO, ANO, INSTITUICAO, DIPLOMA_OBTIDO , DESCRICAO FROM FORMACAO ORDER BY DESCRICAO';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });

    app.get('/realizacoes', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT REALIZACAO, ANO, DESCRICAO  FROM REALIZACOES ORDER BY DESCRICAO';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });


    app.listen(3000, () => {
        console.log("oi")
    })

    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
      });