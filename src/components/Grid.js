import React from "react";
import Cards from './Cards';


const Grid = (props) => {


return (
     <div className="grid">
        {
            props.movies.length < 1
            ? <h2>Sorry, no results were found.</h2>
            : props.movies.map((card, i) => {
            return (
                <Cards key={i} card={card}/>)
        }
        )
        }

     </div>
)
    };
export default Grid;
