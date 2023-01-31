import styled from "styled-components";
import devices from "../../devices/devices";

export const Page = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-left: 10%;
	margin-right: 10%;
	@media (min-width: 1450px) {
		margin-left: 20%;
		margin-right: 20%;
	}
`;

export const Resources = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 1rem;
	width: 45rem;
	@media (max-width: 870px) {
		flex-direction: column;
		margin: 0.5rem;
		width: 40rem;
	}
`;

export const Link = styled.a`
	font-weight: bold;
	color: blue;
	text-decoration: none;
	margin: 0rem 1rem;
	background-color: #dcdcdc;
	text-align: center;
	padding: 0.5rem;
	border-radius: 10px;
	width: 30rem;
	@media (max-width: 870px) {
		flex-direction: column;
		margin: 0.5rem 0rem;
		width: 20rem;
	}
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
	margin: 0.4rem 0rem 0rem 0rem;
`;

export const TitleBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 1rem;
	@media (max-width: 995px) {
		flex-direction: column;
	}
`;

export const Title = styled.h3`
	margin: 0.3rem;
	text-align: center;
`;
