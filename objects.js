"use strict";


// 1. countWords
function countWords(phrase) {
  
  const newArray = phrase.split(' ');
  let wordObj = {}

  for (let element of newArray){
    
    if (wordObj[element] == 1 ){
      wordObj[element] = wordObj[element] + 1;
    } else {
      wordObj[element] = 1;
    }
  }
  return wordObj;
  // console.log(wordObj) ;
  // let the = 'the'
  // console.log(wordObj.the)
}

// countWords('the cat and the dog went to play')

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  let melonList = []
  let melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }

  for (let melon in melonPrices){

    if (parseFloat(melon) === price) {
      melonList = melonPrices[melon];

    } 
    // else {
    //   console.log('nope!');
    // }

  }
  if (melonList[0]) {
    return melonList;
  } else {
    return 'No melons for that price here!'
  }
}

// console.log(getMelonsAtPrice(2.5))
console.log(getMelonsAtPrice(2))


