import { Link } from "react-router-dom";
import styled from "styled-components";
import devices from "../../devices/devices";

export const Loading = styled.div`
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Header = styled.header`
	font-family: Lobster, monospace;
	background-color: #d2430f;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	position: sticky;
`;

export const NavContainer = styled.div`
	font-size: 22px;
	width: 95%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media ${devices.tablet} {
		font-size: 1.8rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const NavMain = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NavLogo = styled(Link)`
	margin: 0.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Logo = styled.img`
	width: 3rem;
	height: auto;
`;

export const NavTitle = styled(Link)`
	font-family: Caveat, monospace;
	font-weight: bold;
	color: #d7dce0;
	padding: 0.6em;
	text-decoration: none;
	cursor: pointer;
`;

export const NavPages = styled.div`
	font-size: 1.5rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
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
