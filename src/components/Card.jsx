import React from 'react'
import './card.css'
import Heart from '../images/heart.png'
import Diamond from '../images/Diamond.png'
import Spade from '../images/spade.png'
import Club from '../images/club.png'

export default function Card(props) {
    const determineSymbol = () => {
        switch (props.card[1]) {
            case 0:
                return Heart;
            case 1:
                return Diamond;
            case 2:
                return Spade;
            case 3:
                return Club;
        }
    }
    const determineColor = () => {
        if (props.card[1] < 2) {
            return 'red';
        }
        return 'black';
    }
    const checkForRoyals = () => {
        switch (props.card[0]) {
            case 11:
                return 'J';
            case 12:
                return 'Q';
            case 13:
                return 'K';
            case 1:
                // props.cards[0] = 14;
                return 'A';
            default:
                return props.card[0];
        }
    }
    return (
        <div className='card'>
            <h4 style={{ color: determineColor() }}>{checkForRoyals()}</h4>
            <img src={determineSymbol()} />
        </div>
    )
}
