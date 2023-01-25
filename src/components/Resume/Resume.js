import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Page, MyResume } from "./Resume.styles.js";
import LoadingBar from "../LoadingBar/LoadingBar";

function Resume() {
	const dispatch = useDispatch();

	const resume = useSelector((store) => store.resumeReducer);

	useEffect(() => {
		dispatch({ type: "GET_RESUME_SAGA" });
	}, []);

	return (
		<div>
			{resume.length === 0 ? (
				<LoadingBar />
			) : (
				<Page>
					{resume.map((resume, index) => {
						return (
							<MyResume
								key={index}
								title="Marc's Resume"
								src={resume.link}
								width="640"
								height="480"
								allow="autoplay"
							></MyResume>
						);
					})}
				</Page>
			)}
		</div>
	);
}

export default Resume;
