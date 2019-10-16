import React, { Component } from 'react'
import { Wrapper, Button, Input } from './searchBarStyle'

class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchBy: 'name'
		}
		this.textInput = React.createRef()
		this.renderButtons = this.renderButtons.bind(this)
		this.toggleButtons = this.toggleButtons.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
	}
	renderButtons() {
		return this.state.searchBy === 'name' ? (
			<div>
				<Button active>Search By Name</Button>
				<Button onClick={this.toggleButtons}>Search By Year</Button>
			</div>
		) : (
			<div>
				<Button onClick={this.toggleButtons}>Search By Name</Button>
				<Button active>Search By Year</Button>
			</div>
		)
	}
	toggleButtons() {
		let searchBy = this.state.searchBy === 'name' ? 'year' : 'name'
		this.textInput.current.value = ''
		this.props.updateSearchMethod(searchBy)
		this.setState({
			searchBy
		})
	}
	handleSearch() {
		this.props.handleSearch(this.textInput)
	}
	render() {
		return (
			<Wrapper>
				<Input
					placeholder={
						this.state.searchBy === 'name'
							? 'Enter A Car Model Name To Search...'
							: 'Enter A Car Manufacturing Year To Search From...'
					}
					type="text"
					name="search"
					ref={this.textInput}
					onChange={this.handleSearch}
				></Input>
				{this.renderButtons()}
			</Wrapper>
		)
	}
}

export default SearchBar
