import React,{ Component} from "react";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import Score from "./components/Score";
import Hero from "./components/Hero";



class App extends Component {
  // Setting the state for the cards json array
  state = {
    friends,
    clickedFriendIds: [],
    score: 0,
    goal: 12,
    status: ""
  };

  //shuffle the cards randomly in the browser when clicked
  shuffleScoreCard = id => {
    let clickedFriendIds = this.state.clickedFriendIds;

    if(clickedFriendIds.includes(id)){
      this.setState({ clickedFriendIds: [], score: 0, status:  "Oops you clicked the same image twice!! Click to play again!" });
      return;
    }else{
      clickedFriendIds.push(id)

      if(clickedFriendIds.length === 12){
        this.setState({score: 12, status: "You have an awesome memory!!! Click to play again!", clickedFriendIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ friends, clickedFriendIds, score: clickedFriendIds.length, status: " " });

      for (let i = friends.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [friends[i], friends[j]] = [friends[j], friends[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
         <header className="App-header">
        <Hero backgroundImage="../images/starry-skies.jpg">
        <h1 className="App-title" >Memory Game</h1>
        <h2 className="App-intro">
            Click an image to score a point. Click it twice and you loose!!
          </h2>
      </Hero>
        </header>
        <Score total={this.state.score}
               goal={12}
               status={this.state.status}
               />
        <Wrapper>

          {this.state.friends.map(friendy => (
            <FriendCard
              shuffleScoreCard={this.shuffleScoreCard}
              id={friendy.id}
              key={friendy.id}
              image={friendy.image}
            />
          ))}
        </Wrapper>
        
    </div>
    );
  }
}

export default App;