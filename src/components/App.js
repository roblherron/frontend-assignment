import React, { Component } from 'react';
import axios from 'axios';
import logo from '../images/logo.svg';
import Search from './Search';
import Grid from './Grid'

class App extends Component {
	constructor() {
		super();
		this.state = {
		  movies: [],
		  searchQuery: '',
		  heading: ''
		};
	  }

	  // MOUNTING
	  componentDidMount() {
		axios
		.get(
		`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&page=1`
			)
			.then((response) => {
			this.setState({movies: [...response.data.results],
			heading: 'Most Recent Movies'})
			console.log('init response', response.data.results)
			})
			.catch(error => {
			console.log('error', error.response)
		});
	  }

	  // HANDLER FUNCTIONS

	  handleSubmit = (e) => {
		e.preventDefault();
		axios
		    .get(
		    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${this.state.searchQuery}`
		        )
				.then((response) => {
					this.setState(
						{movies: [...response.data.results],
						heading: `Results for '${this.state.searchQuery}'`}
						);
						console.log('response', response.data.results)
				})
		        .catch(error => {
		          console.log('error', error.response)
		      });
	  }

	  handleChange = (e) => {
		e.preventDefault();
		this.setState(
			{searchQuery: e.target.value}
		)
	  }


	render() {
		return (
<div>
	<div className="header">
		<img src={logo} alt="Timescale" className='logo'/>
		<Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
	</div>
	<hr/>
	<h1 className="heading">{this.state.heading}</h1>
	<Grid movies={this.state.movies}/>
</div>)}
}

export default App;
