import React from 'react'
import {
	Card,
	Title,
	Image,
	Information,
	Description,
	Detail
} from './productStyle'

const Product = props => {
	const { brand, model, price, year, image } = props
	return (
		<Card>
			<Image src={image} alt="car image"></Image>
			<Information>
				<Title>
					{brand} {model}
				</Title>
				<Description>
					<Detail>year- {year}</Detail>
					<Detail>price- {price}$</Detail>
				</Description>
			</Information>
		</Card>
	)
}

export default Product
