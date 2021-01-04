import animalsList from "./animals.json";

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export function getAnimals() {
  shuffleArray(animalsList);
  const selected = animalsList.slice(0, 8);
  let randomList = animalsList.slice(0, 16);
  shuffleArray(randomList);
  return [selected, randomList];
}
