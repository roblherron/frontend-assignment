import { render } from '@testing-library/react';
import React from 'react';
import image from '../images/No-Photo-Available.jpg'
import Modal from './Modal';

const Cards = (props) => {
    return (
        
 <div className="card" onClick={() => <Modal />}>
    <div className="rating-bubble">
        <p className="rating">{`${props.card.vote_average}`}</p>
    </div>
    {props.card.poster_path === null
        ? <img src={[`${image}`]} alt='card' className="card-image"></img>
        : <img src={[`https://image.tmdb.org/t/p/w500/${props.card.poster_path}`]} alt='card' className="card-image"></img>
    }
    <h2 className="title">{`${props.card.original_title}`}</h2>
</div>
)
}
export default Cards;