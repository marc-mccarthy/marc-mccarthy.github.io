import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import astronaut from "../../images/astronaut.svg";
import {
	Loading,
	Header,
	NavContainer,
	NavMain,
	NavLogo,
	Logo,
	NavTitle,
	NavLink,
	NavPages,
} from "./Navigation.styles";

function Navigation() {
	const dispatch = useDispatch();

	const pages = useSelector((store) => store.pagesReducer);

	useEffect(() => {
		dispatch({ type: "GET_PAGES_SAGA" });
	}, []);

	return (
		<div>
			{pages.length === 0 ? (
				<Loading></Loading>
			) : (
				<Header>
					<NavContainer>
						<NavMain>
							<NavLogo to="/about">
								<Logo alt={"R.I.P Marc McCarthy"} src={astronaut} />
							</NavLogo>
							<NavTitle to="/home">Marc McCarthy's Portfolio</NavTitle>
						</NavMain>
						<NavPages>
							{pages.map((page, index) => {
								return (
									<NavLink key={index} to={page.address}>
										{page.page_name}
									</NavLink>
								);
							})}
						</NavPages>
					</NavContainer>
				</Header>
			)}
		</div>
	);
}

export default Navigation;
