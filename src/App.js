import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Homepage from './components/Homepage';
import Gamepage from './components/Gamepage';
import Scorepage from './components/Scorepage';


let activePlayer, comp;
function App() {
  const [playerList, setPlayerList] = useState([]);
  const initGame = (pName) => {
    let playerHand = [], compHand = [];
    let cards = new CardDeck();
    for (let i = 0; i < 24; i++) {
      playerHand.push(cards.drawCard());
      compHand.push(cards.drawCard());
    }
    let test = playerList.filter((val) => { return pName == val });
    if (test.length == 0) {
      activePlayer = new Player(pName, playerHand);
    setPlayerList([...playerList,activePlayer]);
    }
    else{
      activePlayer = test[0];
      activePlayer.deck = playerHand;
    }
    comp = new Player('Computer', compHand);
    setPage(1);
  }
  const [page, setPage] = useState(0);
  const switchPages = () => {
    if (page == 0) {
      return <Homepage playerList={playerList} next={initGame} />
    }
    if (page == 1) {
      return <Gamepage player={activePlayer} comp={comp} next={setPage} />
    }
    return <Scorepage player={activePlayer} next={setPage} />
  }
  return (
    <div className="App">
      {switchPages()}
    </div>
  );
}

class CardDeck {
  cards = [];
  fillDeck() {
    for (let i = 1; i < 14; i++) {
      for (let j = 0; j < 4; j++) {
        this.cards.push([i, j]);
      }
    }
  }
  constructor() {
    this.fillDeck();
  }
  drawCard() {
    let rand = Math.floor(Math.random() * this.cards.length);
    let card = this.cards.splice(rand, 1);
    return card[0];
  }
}

class Player {
  constructor(pName, deck) {
    this.pName = pName;
    this.deck = deck;
    this.wins = 0;
    this.loses = 0;
    this.games = 0;
  }
}

export default App;


// function findIndex(cell){
//   let td= document.createElement('td');
//   td.prop 
// }