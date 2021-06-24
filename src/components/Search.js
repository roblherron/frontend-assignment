import React from "react";
//import { withRouter } from "react-router-dom";
//import axios from 'axios';




const Search = (props) => {

    return(
        <form className="search-form" onSubmit={props.handleSubmit}
        >
        <input
          className="search-input"
          type="search"
          name="search"
          placeholder="🔎︎  Search for a movie"
          onChange={props.handleChange}
        />
      </form>
      
    )
}
export default Search;
