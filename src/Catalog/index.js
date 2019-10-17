import React, { Component } from 'react'
import { ClipLoader } from 'react-spinners'
import Product from '../Product'
import SearchBar from '../SearchBar'
import productsApi from '../apis/productsApi'
import {
	Wrapper,
	Title,
	ProductsContainer,
	LoadingProducts
} from './catalogStyle'

class Catalog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			products: [],
			filteredProducts: [],
			SearchBy: 'name'
		}
		this.renderProduct = this.renderProduct.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.updateSearchMethod = this.updateSearchMethod.bind(this)
		this.handleSearchByName = this.handleSearchByName.bind(this)
		this.handleSearchByYear = this.handleSearchByYear.bind(this)
	}

	componentDidMount() {
		productsApi
			.get('/assignment-products', {
				params: {
					start: 1,
					end: 20
				}
			})
			.then(response => {
				this.setState({
					products: response.data.data,
					filteredProducts: response.data.data
				})
			})
	}

	renderProduct(product) {
		return (
			<Product
				brand={product.brand}
				model={product.model}
				price={product.price}
				year={product.year}
				image={product.image}
				key={product.id}
			/>
		)
	}

	handleSearch(textInput) {
		if (textInput.current.value === '')
			this.setState({ filteredProducts: this.state.products })
		else if (this.state.SearchBy === 'name') this.handleSearchByName(textInput)
		else if (this.state.SearchBy === 'year') this.handleSearchByYear(textInput)
	}

	handleSearchByName(textInput) {
		const searchResults = this.state.products.filter(product => {
			return (
				product.model
					.toLowerCase()
					.includes(textInput.current.value.toLowerCase()) === true
			)
		})
		this.setState({ filteredProducts: searchResults })
	}

	handleSearchByYear(textInput) {
		const searchResults = this.state.products.filter(product => {
			return product.year >= parseInt(textInput.current.value)
		})
		this.setState({ filteredProducts: searchResults })
	}

	updateSearchMethod(searchMethos) {
		this.setState({
			SearchBy: searchMethos,
			filteredProducts: this.state.products
		})
	}

	render() {
		return (
			<Wrapper>
				<Title>CARS CATALOG</Title>
				<SearchBar
					updateSearchMethod={this.updateSearchMethod}
					handleSearch={this.handleSearch}
				/>
				{this.state.products.length > 0 ? (
					<ProductsContainer>
						{this.state.filteredProducts.length === 0 ? (
							<LoadingProducts>
								<h2>No products Matches Your Search</h2>
								<h3>Please Try Again</h3>
							</LoadingProducts>
						) : (
							this.state.filteredProducts.map(product =>
								this.renderProduct(product)
							)
						)}
					</ProductsContainer>
				) : (
					<LoadingProducts>
						<ClipLoader sizeUnit={'px'} size={120} color={'#fff'} />
					</LoadingProducts>
				)}
			</Wrapper>
		)
	}
}

export default Catalog
