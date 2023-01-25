import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Page,
	Card,
	ProjectsGrid,
	CardLink,
	CardName,
	CardImage,
	CardDescription,
} from "./Projects.styles";
import LoadingBar from "../LoadingBar/LoadingBar";

function Projects() {
	const dispatch = useDispatch();

	const projects = useSelector((store) => store.projectsReducer);

	useEffect(() => {
		dispatch({ type: "GET_PROJECTS_SAGA" });
	}, []);

	return (
		<div>
			{projects.length === 0 ? (
				<LoadingBar />
			) : (
				<Page>
					<h2>Current Projects</h2>
					<ProjectsGrid>
						{projects.map((project, index) => {
							return (
								<Card key={index}>
									<CardLink
										href={project.host}
										target="_blank"
										rel="noopener noreferrer"
									>
										<CardName>{project.project_name}</CardName>
										<CardImage src={project.image} alt={project.name} />
										<CardDescription>{project.description}</CardDescription>
									</CardLink>
									<CardLink href={project.github}>
										<h5>GitHub Link</h5>
									</CardLink>
								</Card>
							);
						})}
					</ProjectsGrid>
				</Page>
			)}
		</div>
	);
}

export default Projects;
