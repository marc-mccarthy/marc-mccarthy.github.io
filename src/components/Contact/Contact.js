import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from "../LoadingBar/LoadingBar";
import {
	Content,
	FormBox,
	Input,
	InputMessage,
	Label,
	Page,
	Quote,
	TellMe,
	TellMeButton,
} from "./Contact.styled";

function Contact() {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		reset,
		formState,
		formState: { errors },
	} = useForm();
	const contactLinks = useSelector((store) => store.contactLinksReducer);

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset({ firstName: "", lastName: "", email: "", message: "" });
		}
	}, [formState, reset]);

	useEffect(() => {
		dispatch({ type: "GET_CONTACT_LINKS_SAGA" });
	});

	const addContact = (data) => {
		dispatch({ type: "ADD_CONTACT_SAGA", payload: data });
	};

	const handleError = (errors) => {
		console.log(errors);
		alert("All fields are required other than email");
	};

	const addContactOptions = {
		firstName: { required: "First name is required" },
		lastName: { required: "Last name is required" },
		email: { required: "Email is not required" },
		message: { required: "Message is required" },
	};

	return (
		<div>
			{contactLinks.length === 0 ? (
				<LoadingBar />
			) : (
				<Page>
					<Content>
						<Quote>
							You can make more friends in two months by becoming interested in
							other people than you can in two years by trying to get other
							people interested in you. --Dale Carnegie
						</Quote>
						<FormBox onSubmit={handleSubmit(addContact, handleError)}>
							<TellMe>
								<Label>First Name*</Label>
								<Input
									type="text"
									name="firstName"
									{...register("firstName", addContactOptions.firstName)}
								/>
								<small className="text-danger">
									{errors.firstName && errors.firstName.message}
								</small>
							</TellMe>
							<TellMe>
								<Label>Last Name*</Label>
								<Input
									type="text"
									name="lastName"
									{...register("lastName", addContactOptions.lastName)}
								/>
								<small className="text-danger">
									{errors.lastName && errors.lastName.message}
								</small>
							</TellMe>
							<TellMe>
								<Label>Email</Label>
								<Input type="email" name="email" {...register("email")} />
							</TellMe>
							<TellMe>
								<Label>How can we connect?*</Label>
								<InputMessage
									type="text"
									rows="5"
									name="message"
									{...register("message", addContactOptions)}
								/>
								<small className="text-danger">
									{errors.message && errors.message.message}
								</small>
							</TellMe>
							<TellMeButton>Submit</TellMeButton>
						</FormBox>
					</Content>
				</Page>
			)}
		</div>
	);
}

export default Contact;
