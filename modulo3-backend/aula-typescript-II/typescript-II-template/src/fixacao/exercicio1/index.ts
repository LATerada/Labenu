/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

//3
enum COR_DO_ARCO_IRIS {
  VERMELHO = "vermelho",
  LARANJA = "laranja",
  AMARELO = "amarelo",
  VERDE = "verde",
  AZUL = "azul",
  AZUL_ESCURO = "azul-escuro",
  VIOLETA = "violeta",
}

// 1
type TPessoa = {
  nome: string;
  idade: number;
  corFavorita: string;
};

// 2
const Pessoa1: TPessoa = {
  nome: "Murilo",
  idade: 27,
  corFavorita: COR_DO_ARCO_IRIS.VERDE,
};
const Pessoa2: TPessoa = {
  nome: "Thamiris",
  idade: 22,
  corFavorita: COR_DO_ARCO_IRIS.VIOLETA,
};
const Pessoa3: TPessoa = {
  nome: "Yuri",
  idade: 25,
  corFavorita: COR_DO_ARCO_IRIS.AZUL,
};
