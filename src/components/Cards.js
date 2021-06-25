import { render } from '@testing-library/react';
import React from 'react';
import image from '../images/No-Photo-Available.jpg'
import Modal from './Modal'



const Cards = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)
    console.log(isOpen)

    return (
        
    <div className="card">
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="modal">
                <div className="modal-box">
                <div className='modal-left'>
                    <h1 className='modal-title'>{`${props.card.original_title}`}</h1>  
                    <img className="modal-image" src={[`https://image.tmdb.org/t/p/w500/${props.card.poster_path}`]} alt='card' className="card-image"></img>
                </div>
                <div className='modal-right'>
                    <h2 className='modal-release'>{<b>Release Date:</b>} {`${props.card.release_date}`}</h2>
                    <p className="modal-overview">{`${props.card.overview}`}</p>
                    <p className='modal-overview'>{<b>{`${props.card.vote_average}`}</b>}{` / 10 (${props.card.vote_count} total votes)`}</p>
                </div>
                </div>
            </div>
        </Modal>


            <a onClick={() => {setIsOpen(true); console.log(isOpen)}}>
            <div className="rating-bubble">
                <p className="rating">{`${props.card.vote_average}`}</p>
            </div>
            {props.card.poster_path === null
                ? <img src={[`${image}`]} alt='card' className="card-image"></img>
                : <img src={[`https://image.tmdb.org/t/p/w500/${props.card.poster_path}`]} alt='card' className="card-image"></img>
            }
            <h2 className="title">{`${props.card.original_title}`}</h2>
            </a>
    </div>
)
}
export default Cards;