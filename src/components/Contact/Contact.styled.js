import styled from "styled-components";

export const Page = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 1450px) {
		margin-left: 10%;
		margin-right: 10%;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ContactMe = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

export const BadgeLink = styled.img`
	border-radius: 8px;
	box-shadow: 0 6px #969696;
	cursor: pointer;
	width: 100px;
	height: 30px;
	border: 1px solid #000000;
	&:active {
		transform: scale(0.96);
		box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.25);
	}
`;

export const Quote = styled.h3`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 80vw;
	@media (min-width: 409px) {
		width: 80vw;
	}
	@media (min-width: 870px) {
		width: 715px;
	}
`;

export const FormBox = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
	background-color: #3c3d34;
	width: 90vw;
	padding: 1rem;
	border-radius: 15px;
	@media (min-width: 409px) {
		width: 80vw;
	}
	@media (min-width: 870px) {
		width: 750px;
	}
`;

export const TellMe = styled.div`
	width: 90%;
	margin: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: large;
	@media (min-width: 409px) {
		align-items: flex-start;
	}
	@media (min-width: 870px) {
		padding: 0 1.5rem;
	}
`;

export const TellMeButton = styled.button`
	width: 7rem;
	height: 2rem;
	cursor: pointer;
	border-radius: 8px;
	box-shadow: 0 6px #969696;
	color: #ffffff;
	background-color: #0fae14;
	border: 1px solid #000000;
	font-weight: bold;
	&:active {
		transform: scale(0.96);
		box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.25);
	}
`;

export const Label = styled.label`
	color: white;
	margin-bottom: 0.5rem;
	font-weight: bold;
`;

export const Input = styled.input`
	height: 2rem;
	border: 0.5px solid blue;
	border-radius: 10px;
	width: 100%;
	padding: 0.7rem;
	font-size: large;
`;

export const InputMessage = styled.textarea`
	border: 0.5px solid blue;
	border-radius: 10px;
	width: 100%;
	padding: 0.7rem;
	font-size: large;
	@media (min-width: 870px) {
		width: 600px;
	}
`;

export const Anchor = styled.a`
	text-decoration: none;
	margin: 0.25rem;
`;
