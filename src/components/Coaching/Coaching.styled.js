import styled from "styled-components";
import devices from "../../devices/devices";

export const Page = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 1450px) {
		margin-left: 10%;
		margin-right: 10%;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 1rem;
`;

export const Container = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0rem 1rem;
	background-color: #dcdcdc;
	width: 90vw;
	padding: 0.5rem;
	border-radius: 10px;
	@media (min-width: 409px) {
		width: 80vw;
	}
	@media (min-width: 870px) {
		width: 750px;
	}
`;

export const Link = styled.a`
	font-weight: bold;
	color: blue;
	text-decoration: none;
	margin: 0.25rem;
`;

export const Image = styled.img`
	width: 30em;
	height: 30em;
	@media ${devices.tablet} {
		justify-self: center;
		grid-column: 1;
		width: 20rem;
		height: 20rem;
	}
`;

export const Headline = styled.h3`
	margin: 1rem 0rem 0rem 0rem;
`;
