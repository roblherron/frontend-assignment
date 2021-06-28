import { render } from '@testing-library/react';
import React from 'react';
import image from '../images/No-Photo-Available.jpg'
import Modal from './Modal'



const Cards = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)
    console.log(isOpen)


    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [month, day, year].join('/');
    }
     
const date = props.card.release_date
    return (
        
    <div className="card">
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="modal-backdrop">
                <div className="modal-box">
                    <h1 className='modal-title'>{`${props.card.original_title}`}</h1>  
                    <h2 className='modal-release'>{<b>Release Date:</b>} {`${formatDate(date)}`}</h2>
                    <div className='image-container'>
                        <img src={[`https://image.tmdb.org/t/p/w500/${props.card.poster_path}`]} alt='card' className='modal-image'></img>
                    </div>
                    <p className="modal-overview">{`${props.card.overview}`} {<br></br>} {<br></br>} {<b>{`${props.card.vote_average}`}</b>}{` / 10 (${props.card.vote_count} total votes)`}</p>
                </div>
                
            </div>
            
        </Modal>


            <a onClick={() => {setIsOpen(true)}}>
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