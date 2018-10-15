const shuffleArray=(arr)=> {
    // creates a copy of the current characters array to modify it by value, and not by reference
    const newArr = arr.slice();

    // will store the shuffled array
    const shuffleArr = [];

    // each loop through an index gets spliced from newArr, reducing its length
    // gets a random index based off the current length of newArr
    // splices the value from newArr, and pushes it to shuffleArr
    while (newArr.length > 0) {
      shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
    }

    return shuffleArr;
  }
  
  // Used like so
  
  console.log(shuffleArray([1,2,3,4]));
  

