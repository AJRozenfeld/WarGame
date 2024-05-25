import React,{useState} from 'react'

export default function Homepage(props) {
    const [name,setName] = useState('');
  return (
    <div>
        <h1>Ready for WAR?!</h1>
        <input onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Enter your name'/>
        <button onClick={()=>{props.next(name)}}>GO!</button>
        <hr/>
        <table>
            <tr>
                <th>Name</th>
                <th>Wins</th>
                <th>loses</th>
            </tr>
            {props.playerList.map((val)=>{return <tr>
                <td>{val.pName}</td>
                <td>{val.wins}</td>
                <td>{val.loses}</td>
            </tr>})}
        </table>
    </div>
  )
}
