import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

// On fait une déstructuration des props
const Card = ({card, feedback, onClick, onDoubleClick}) => (
    <div className={ `card ${feedback}`} onClick={() => onClick(card)} onDoubleClick={() => onDoubleClick(card)}>
        <span className="symbol">
            { feedback==='hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)


export default Card