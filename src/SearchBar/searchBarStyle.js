import styled from 'styled-components'

export const Wrapper = styled.div`
	background-color: #1b7fbd;
	width: 100%;
	height: 100px;
	text-align: center;
	border-radius: 3px;
	margin: auto;
	font-family: Copperplate;
`
export const Button = styled.button`
	text-decoration: none;
	cursor: pointer;
	outline: none;
	border: none;
	background: ${props => (props.active ? '#70ADF8' : '#FFFFFF')};
	color: ${props => (props.active ? '#FFFFFF' : '#70ADF8')};
	margin: 5px;
	padding: 5px;
	width: 13%;
	font-size: 17px;
	border-radius: 3px;
	font-family: Copperplate;
`
export const Input = styled.input`
	width: 25%;
	height: 30%;
	margin: 10px;
	border: 1px solid #ccc;
	border-radius: 3px;
	box-sizing: border-box;
	outline: none;
	font-size: 12px;
`
