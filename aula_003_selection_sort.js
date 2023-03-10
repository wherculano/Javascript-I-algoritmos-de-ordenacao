const livros = require("./aula_002_lista_livros");
const menorValor = require("./aula_003_function_menor_valor");

livros.forEach((_, indice) => {
  let menor = menorValor(livros, indice);

  console.log(`Posição atual: ${indice}`);

  let livroAtual = livros[indice];
  console.log("Livro atual: ", livroAtual);

  let livroMenorPreco = livros[menor];
  console.log("Livro de menor preço: ", livroMenorPreco);

  livros[indice] = livroMenorPreco;
  livros[menor] = livroAtual;
});

// for (let atual = 0; atual < livros.length-1; atual++) {
//   let menor = menorValor(livros, atual);

//   console.log("Posicao atual: ", atual);

//   let livroAtual = livros[atual];
//   console.log("livro atual: ", livroAtual);

//   let livroMenorPreco = livros[menor];
//   console.log("livro menor preco: ", livroMenorPreco);

//   livros[atual] = livroMenorPreco;
//   livros[menor] = livroAtual;
// }

console.log(livros);
