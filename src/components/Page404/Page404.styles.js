import styled from "styled-components";

export const Page = styled.div`
	margin: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const CautionTape = styled.img`
	width: 100%;
	height: auto;
	border-radius: 3%;
	@media (min-width: 650px) {
		width: 37rem;
	}
`;

export const Text404 = styled.h2`
	font-family: "Patrick Hand", monospace;
`;

export const Text = styled.h2`
	font-family: "Patrick Hand", monospace;
`;
