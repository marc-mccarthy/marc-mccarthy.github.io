import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import profile from "../../images/profile-pic.png";
import LoadingBar from "../LoadingBar/LoadingBar";
import {
	AboutMe,
	Content,
	InterestItem,
	Interests,
	Page,
	Para,
	Profile,
	Resume,
} from "./Home.styles";

function Home() {
	const dispatch = useDispatch();

	const interests = useSelector((store) => store.interestsReducer);

	useEffect(() => {
		dispatch({ type: "GET_INTERESTS_SAGA" });
	});

	return (
		<div>
			{interests.length === 0 ? (
				<LoadingBar />
			) : (
				<Page>
					<Content>
						<Profile src={profile} alt="R.I.P Marc" />
						<AboutMe>
							<Resume>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://flowcv.com/resume/rktsdw8sa6"
								>
									<h2>Resume</h2>
								</a>
							</Resume>
							<Para>
								My name is Marc McCarthy and I'm a Full Stack Developer who is
								loving what I can build with technology! Everyone has a thing
								that separates them. Mine is that I'm always, always building
								and incorporating something new I'm learning. Whether that be a
								new language, concept, or just a different way of doing things.
								Experience molding with my hands on the keyboard is what I do
								every day and I rarely take time off.
							</Para>
							<Para>
								Its been fun to learn various languages, frameworks, libraries,
								concepts, and CS fundamentals in my journey so far. I'm looking
								for my first real work experience in programming currently and
								believe that I could be a great asset for a team that sees my
								value. I believe I have the capability and the confidence to
								learn anything in programming I need to know. I think that's the
								toughest hill I've climbed so far.
							</Para>
							<Para>
								I've learned all that I know about programming while trying to
								help raise my two year old daughter, Mila, and our six-month old
								twins, Madden and Reya. Truth be told, it's been more of a
								lesson in time management more than anything. However, it's a
								special time in my life and I'm learning to understand and
								embrace that it's hard and amazing all at the same time!
							</Para>
						</AboutMe>
						<div>
							<h3>Interests that I thoroughly enjoy:</h3>
							<Interests>
								{interests.map((interest, index) => {
									return (
										<InterestItem key={index}>
											{interest.icon} <b>{interest.interest_name}</b>
										</InterestItem>
									);
								})}
							</Interests>
						</div>
					</Content>
				</Page>			
			)}
		</div>
	);
}

export default Home;
