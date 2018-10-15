import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import images from './images';
import fruits from "./fruits.json";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    allFruits: this.randomFruits(),
    isClicked:[]
    
  };
//////////////////////////////////////////////
  randomFruits() {
    const newArr = images.slice();

    const shuffleArr = [];

    
    while (newArr.length > 0) {
      shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
    }

    return shuffleArr;
  }
  ////////////////////////////////////////////////////

  ////////////////////////////////////////////////////
clickedFruitCheck(fruitClicked){

  let score=this.state.score;
  let highScore=this.state.highScore;

const clickStatus = this.state.isClicked.slice();

if(!this.state.isClicked.includes(fruitClicked)){

  if (score === highScore) {
    
    score++;
    highScore++;

  } else {
    score++;
  }

  clickStatus.push(fruitClicked)

}





}

  /////////////////////////////////////////////////////
  
  render() {
    
    return (
      <div>
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
         
        />
        <Header />
        <Container
          
          fruits={this.state.allFruits}
        
        />
        <Footer />
      </div>
    );
  }
}

export default App;
