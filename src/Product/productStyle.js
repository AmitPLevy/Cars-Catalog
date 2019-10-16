import styled from 'styled-components'

export const Card = styled.div`
	position: relative;
	width: 300px;
	height: 400px;
	border-radius: 0.2rem;
	box-shadow: 0 1px 3px 0 #fff, 0 0 0 1px #fff;
	margin: 2%;
`

export const Image = styled.img`
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: 5%;
`

export const Information = styled.div`
	min-height: 120px;
	width: 300px;
	position: absolute;
	bottom: 0px;
	text-align: center;
`

export const Description = styled.div`
	color: #fff;
`

export const Title = styled.h2`
	color: #fff;
	font-size: 1.5em;
`

export const Detail = styled.p`
	font-size: 1.18em;
`
