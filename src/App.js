import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer"
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import friends from "./friends.json";
import "./App.css";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "Click an image to begin!",
    clicked: [],
    correct:false,
    incorrect:false
    
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ 
        clicked: this.state.clicked.concat(id),
         rightWrong: "You guessed correctly!",
         correct:true  
        
        });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      
      
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "You guessed incorrectly!",
      correct:false,
      clicked: [],
      incorrect:true
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends,
     
     });
  };

  render() {
    return (
      <div>
      <Wrapper>
        <Nav
          title="Juventus Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
          correct={this.state.correct}
          incorrect={this.state.incorrect}
        />

        <Title>
        Click on an image to earn points, but don't click on any more than once!
        </Title>

        <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6">
                <FriendCard
                  key={friend.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
      <Footer/>
      </div>
    );
  }
}

export default App;