const nome = process.argv[2];
const age = process.argv[3];

if (!nome || !idade) {
  console.log("Faltou o argumento esperado");
} else {
  console.log(
    `Olá, ${nome}! Você tem ${age} anos. Em sete anos você terá ${age + 7}.`
  );
}