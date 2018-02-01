var count = 0;

function countBirds() {
  var count = 0;
  function counter() {
    count += 1;
    return count + ' birds';
  }
  return counter;
}

function countDogs() {
  count += 1;
  return count + ' dogs';
}

console.log(countBirds()());
console.log(count);
