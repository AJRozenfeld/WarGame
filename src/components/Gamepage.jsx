import React, { useState } from 'react'
import Card from './Card'
import './homepage.css'

let playerScore = 0,pcScore = 0;

export default function Gamepage(props) {
    const [cardIndex,setCardIndex] = useState(0);
    const drawCard = () =>{ 
        if(props.player.deck[cardIndex][0] > props.comp.deck[cardIndex][0]){
            playerScore++;
        }
        else if(props.player.deck[cardIndex] < props.comp.deck[cardIndex]){
            pcScore++;
        }
        console.log(`${playerScore}:${pcScore}`);
        if(cardIndex == 25){
            props.player.games++;
            if(playerScore > pcScore){
                props.player.wins++;
            }
            else if(pcScore > playerScore){
                props.player.loses++;
            }
            props.next(2);
        }
        else{
            setCardIndex(cardIndex+1);
        }
    }
  return (
    <div>
        <h1>{props.player.pName}</h1>
        <Card id='pCard' card={props.player.deck[cardIndex]}/><br/>
        <label for='pCard'>Score: {`${playerScore}`}</label>
        <hr/><br/>
        <Card card={props.comp.deck[cardIndex]} id='compCard'/>
        <label for='compCard'>Score: {`${pcScore}`}</label> 
        <h1>{props.comp.pName}</h1>
        <button onClick={()=>{drawCard()}}>Draw</button>
    </div>
  )
}
