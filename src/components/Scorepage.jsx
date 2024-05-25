import React from 'react'

export default function Scorepage(props) {
  return (
    <div>
        <h1>{`Wins:${props.player.wins}:Loses:${props.player.loses}`}</h1>
        <button onClick={()=>{props.next(0)}}>Return to menu</button>
    </div>
  )
}
