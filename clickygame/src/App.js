import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import image from "./friends.json";

class App extends Component {

  state = {
    image,
    clickedImage: [],
    score: 0
  }

  imageClick = event => {
    const currentImage = event.target.alt;
    const ImageAlreadyClicked = this.state.clickedImage.indexOf(currentImage) > -1;

    if (ImageAlreadyClicked) {
      this.setState({
        image: this.state.image.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedImage: [],
        score: 0
      });
      alert("You lose!");
    } else {
      this.setState(
        {
          image: this.state.image.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedImage: this.state.clickedImage.concat(
            currentImage
          ),
          score: this.state.score + 1
        },

        () => {
          if (this.state.score === 12) {
            alert("You Win!");
            this.setState({
              image: this.state.image.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedImage: [],
              score: 0
            });
          }
        }
      );
    }
  };
  render() {
    return (
      <Wrapper>
          <Title>Friends List________Score:{this.state.score}</Title>
            {this.state.image.map(friend => (
              <FriendCard
                imageClick={this.imageClick}
                removeFriend={this.removeFriend}
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
                occupation={friend.occupation}
                location={friend.location}
              />
            ))}
      </Wrapper>
    );
  }
}

export default App;
