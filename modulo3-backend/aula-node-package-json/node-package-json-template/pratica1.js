import { countries } from "./countries.js"; //preciso colocar a extensao(.js)

const query = process.argv[2];

if (!query) {
  console.log("Faltou o argumento esperado");
} else {
  //   const result = countries.find((country) => country.name.toLocaleLowerCase() == query.toLocaleLowerCase());
  const result = countries.find((country) =>
    country.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  ); // para procurar com apenas uma palavra, porém retorna apenas o primeiro objeto encontrado

  console.log(result);
}
