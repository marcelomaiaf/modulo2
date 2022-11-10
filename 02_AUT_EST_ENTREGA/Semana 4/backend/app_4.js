const express = require('express');
const bodyParser = require('body-parser') 
const urlencodeParser = bodyParser.urlencoded({ extended: false })
const sqlite3 = require('sqlite3').verbose()
const DBPATH = './Atividade_S4.db'

const hostname = '127.0.0.1';
const port = 3030;
const app = express();

app.use(express.json());

//READ do CRUD
app.get('/EXPERIENCIA', (req,res) =>{
    res.statusCode = 200
    res.setHeader('Acess-control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); 
    var sql = 'SELECT * FROM EXPERIENCIA ORDER BY cargo'
        db.all(sql, [], (err, rows ) => { 
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close();

});

//CREATE do CRUD
app.post('/insereExperiencia', (req, res) => {
    res.statusCode = 200;
    console.log(req.body.experienciaID)
    res.setHeader('Acess-Control-Allow-Origin', '*');
    sql = "INSERT INTO EXPERIENCIA(empresa, ano, descricao, atribuicoes, resultados_obtidos, cargo, experienciaID) VALUES('" + req.body.empresa + "', '" + req.body.ano + "',  '" + req.body.descricao + "',  '" + req.body.atribuicoes + "' ,'" + req.body.resultados_obtidos + "', '" + req.body.cargo + "', '" + req.body.experienciaID + ")";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // isso serve para abrir o banco de dados 
    db.all(sql, [], (err, rows ) =>{
        if(err) {
            throw err;
        }
        res.json(rows);

    });
    db.close(); 
});

//UPDATE do CRUD
app.get('/atualizaExperiencia', (req, res) =>{
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "SELECT * FROM EXPERIENCIA WHERE experienciaID="+ req.query.experienciaID;
    console.log(sql);
    var db = new sqlite3.Database(DBPATH);
    db.all(sql, [], (err, rows ) =>{
        if(err){
            throw err;
        }
        res.json(rows)
    });
    db.close();
});

app.post('/autalizaExperiencia',urlencodeParser, (req, res) =>{
    res.statusCode = 200;
    res.setHeader('Acess-Control-Allow-Origin', '*');
    sql = "UPDATE EXPERIENCIA set EMPRESA ='" + req.body.empresa + "', ano= '" + req.body.ano + "', descricao = '" + req.body.descricao + "', atribuicoes= '" + req.body.atribuicoes + "' , resultados_obtidos= '" + req.body.resultados_obtidos + "', cargo= '" + req.body.cargo + "' WHERE experienciaID='" + req.body.experienciaID + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); //isso vai abrir o banco
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    res.write('<p> EXPERIENCIA ATUALIZADA COM SUCESSO!</p><a href="">VOLTAR</a>'); //vou usar isso no html
    db.close()
});

// DELETE do CRUD
app.get('/removeExperiencia', urlencodeParser, (req,res) =>{
    res.statusCode = 200;
    res.setHeader('Acess-Control-Allow-Origin', '*');
    sql = "DELETE FROM EXPERIENCIA WHERE experienciaID='" + req.query.experienciaID + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH);
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.write('<p>USUARIO REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>'); // vou usar isso dps no html
        res.end();
    });
    db.close();
});

app.listen(port, hostname, () => {
console.log(`servidor ta rodando ebaaa em http://${hostname}:${port}/`);
});


