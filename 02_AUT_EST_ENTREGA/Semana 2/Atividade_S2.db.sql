BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "DADOS PESSOAIS" (
	"SEU NOME"	TEXT,
	"CARGO"	TEXT,
	"ENDEREÇO"	TEXT,
	"E-MAIL"	TEXT,
	"TELEFONE"	TEXT,
	"SOBRE MIM"	TEXT,
	"HABILIDADES"	TEXT,
	"PERSONALIDADES"	TEXT
);
CREATE TABLE IF NOT EXISTS "FORMAÇÃO" (
	"CURSO"	TEXT,
	"ANO"	TEXT,
	"INSTITUIÇÃO"	TEXT,
	"DIPLOMA OBTIDO"	TEXT,
	"DESCRIÇÃO"	TEXT
);
CREATE TABLE IF NOT EXISTS "EXPERIENCIA" (
	"EMPRESA"	TEXT,
	"ANO"	TEXT,
	"DESCRIÇÃO"	TEXT,
	"ATRIBUIÇÕES"	TEXT,
	"RESULTADOS OBTIDOS"	TEXT,
	"CARGO"	TEXT
);
CREATE TABLE IF NOT EXISTS "REALIZAÇÕES" (
	"REALIZAÇÃO"	TEXT,
	"ANO"	TEXT,
	"DESCRIÇÃO"	TEXT
);
COMMIT;
