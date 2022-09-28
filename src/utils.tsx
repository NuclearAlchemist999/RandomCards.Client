import { GiHearts, GiDiamonds, GiSpades, GiClubs } from 'react-icons/gi'

export const getSuit = (suit: string) => {
    suit = suit.split(' ')[1]

    switch (suit) {
    case 'hearts':
        return <GiHearts className='icon' style={{ color: '#c70b34'}} />   
    case 'diamonds':
        return <GiDiamonds className='icon' style={{ color: '#c70b34'}} />
    case 'spades':
        return <GiSpades className='icon' />
    case 'clubs':
        return <GiClubs className='icon' />
    }
}

export const getValue = (value: string) => {
    value = value.split(' ')[0]

    switch (value) {
        case 'ace':
            return 'A'
        case 'two': 
            return '2'
        case 'three':
            return '3'
        case 'four':
            return '4'
        case 'five':
            return '5'
        case 'six':
            return '6'
        case 'seven':
            return '7'
        case 'eight':
            return '8'
        case 'nine':
            return '9'
        case 'ten':
            return '10'
        case 'jack':
            return 'J'
        case 'queen':
            return 'Q'
        case 'king':
            return 'K'        
    }
}
