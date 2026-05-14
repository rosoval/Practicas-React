import chalk from 'chalk';
import cowsay from 'cowsay';
import axios from 'axios';

//ejercicio 1

console.log(chalk.blue('hola mundo'));
console.log(chalk.red('ERROR'));
console.log(chalk.yellow('ADVERTENCIA'));

//ejercicio 2

console.log(cowsay.think({ text: "MUUUUUUUUUUUUUUUUUUUU" }));

//ejercicio 3

axios({
  method: 'get',
  url: 'https://pokeapi.co/api/v2/pokemon/ditto',
})
  .then((response) => {
  console.log('Nombre:', response.data.name);
  console.log('altura:', response.data.height);
  console.log('peso:', response.data.weight);
});

//ejercicio 4

axios({
  method: 'get',
  url: 'https://pokeapi.co/api/v2/pokemon/ditto',
})
  .then((response) => {
  console.log('Nombre:', response.data.name);
  console.log('altura:', response.data.height);
  console.log('peso:', response.data.weight);
});