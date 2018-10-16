import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
// import images from './images';
import fruits from "./fruits.json";
let images=[];
// console.log("fruits",newArr)

fruits.forEach(function(element,i) {
  images.push(element.image)
  // console.log("fruits",images);
});

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    allFruits: this.randomFruits(),
    isClicked:[],
    messageTop: 'Click an image to begin!',
    
  };
/////////////////////////////////////////////





  //////////////////////////////////////////
clickEvent=this.clickedFruitCheck.bind(this);

//////////////////////////////////////////////
  randomFruits() {
    const newArr = images.slice();
   


    // console.log("newArr:",newArr)

    const randomArr = [];

    
    while (newArr.length > 0) {
      randomArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
    }

    return randomArr;
  }
  ////////////////////////////////////////////////////

  ////////////////////////////////////////////////////
clickedFruitCheck(fruitClicked){

  let score=this.state.score;
  let highScore=this.state.highScore;

const clickStatus = this.state.isClicked.slice();
////////////////////////////////////////////////////////
if(!this.state.isClicked.includes(fruitClicked)){

  if (score === highScore) {
    
    score++;
    highScore++;

  } else {
    score++;
  }

  clickStatus.push(fruitClicked)

}
///////////////////////////////////////////////////
if (this.state.isClicked.includes(fruitClicked)) {
  let score = 0;
  return this.setState({
    score: score,
    highScore: highScore,
    allFruits: this.randomFruits(),
    isClicked: [],
    messageTop: 'Incorrect guess! Game restarted'
    
  });
}

/////////////////////////////////////////////////////
this.setState({
  score: score,
  highScore: highScore,
  allFruits: this.randomFruits(),
  isClicked: clickStatus,
  messageTop: 'You Guessed Correctly!'
});







}

  /////////////////////////////////////////////////////
  
  render() {
    
    return (
      <div>
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
          messageTop={this.state.messageTop}
         
        />
        <Header />
        <Container
          
          fruits={this.state.allFruits}
          clickEvent={this.clickEvent}
        
        />
        <Footer />
      </div>
    );
  }
}

export default App;
