import { Link } from "react-router-dom";
import styled from "styled-components";
import devices from "../../devices/devices";

export const Page = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 1450px) {
		margin-left: 10%;
		margin-right: 10%;
	}
`;

export const Para = styled.p`
	font-size: 19px;
`;

export const Content = styled.div`
	margin: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 870px) {
		margin-right: 5%;
		margin-left: 5%;
		display: grid;
		justify-items: center;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto;
		gap: 20px;
	}
`;

export const Profile = styled.img`
	width: 10em;
	height: 10em;
	@media ${devices.tablet} {
		justify-self: center;
		grid-column: 1;
		width: 13rem;
		height: 13rem;
	}
`;

export const AboutMe = styled.div`
	font-family: Oswald, monospace;
	font-size: 1.1rem;
	@media ${devices.tablet} {
		grid-row: 1 / -1;
		grid-column: 2;
		width: 90%;
	}
`;

export const Interests = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media ${devices.tablet} {
		grid-row-start: 2;
		grid-column: 1 / 2;
	}
`;

export const InterestItem = styled.div`
	margin: 0.3rem;
	@media ${devices.tablet} {
		grid-row: 2;
		grid-column: 2 / -1;
	}
`;

export const Resume = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 870px) {
		margin-right: 5%;
		margin-left: 5%;
		display: grid;
		justify-items: center;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto;
		gap: 20px;
	}
`;

export const NavLink = styled(Link)`
	font-size: 0.7em;
	font-family: Lobster, monospace;
	color: #ffffff;
	padding: 0.6em;
	text-decoration: none;
	cursor: pointer;
	&:hover {
		color: #6ed8f2;
	}
`;
