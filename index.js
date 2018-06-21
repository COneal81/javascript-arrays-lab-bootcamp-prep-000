const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
const kittens
function destructivelyAppendKitten() {
  kittens.push("Ralph");
  return kittens
}

function destructivelyPrependKitten() {
  kittens.unshift('Bob');
  return kittens
}
function destructivelyRemoveLastKitten () {
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten () {
  kittens.shift();
  return kittens
}


function appendKitten() {
  [...kittens,"Broom"];
  
  return kittens
}
