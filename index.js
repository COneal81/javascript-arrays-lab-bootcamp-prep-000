const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
var morekittens = ["Broom"]

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
