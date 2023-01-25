import {
	Page,
	Resources,
	Link,
	Title,
	TitleBox,
	Headline,
} from "./Coaching.styled";

function Coaching() {
	return (
		<Page>
			<TitleBox>
				<Title>Learn Modern Web Development.</Title>
				<Title>Master the Job Search.</Title>
				<Title>Become Employer-Ready.</Title>
			</TitleBox>
			<Resources>
				<Link
					href="https://www.theodinproject.com/"
					target="_blank"
					rel="noreferrer noopener"
				>
					The Odin Project
				</Link>
				<Link
					href="https://fullstackopen.com/en/"
					target="_blank"
					rel="noreferrer noopener"
				>
					Full Stack Open
				</Link>
			</Resources>
			<p>
				I offer tutoring services to help students master the coding and soft
				skills necessary to excel in the tech industry. By working through the
				curriculum of the Odin Project and/or Full Stack Open and doing career
				exercises, I guide students through the process of learning to code and
				provide them with the necessary skills to become employer-ready. You can
				contact me via <a href="mailto:marstheory20@gmail.com">Email</a> or send
				me a message on my <a href="/#/contact">Contact</a> page.
			</p>
			<Headline>Why trust me to help?</Headline>
			<p>
				I tried to do this all on my own. It failed. I had no accountability and
				no real human to help me... I decided to attend a bootcamp to fix the
				issue. Now my bootcamp was amazing; the best one in the country in my
				opinion, however, not everyone has $20,000 and can leave their current
				career to do pursue this. This presents a real problem for so many who
				want to pursue this direction, but simply cannot because of finances.
			</p>
			<Headline>This is where I come in!</Headline>
			<p>
				I can help bridge the gap to help you gain the skills with less
				overhead. The curricullum isn't typically the issue I see with why
				someone doesn't succeed. There a bazillions of free resources online,
				yet so many new coders fail and give up! The problem is almost always a
				lack of accountability and commitment to what it takes to do this
				properly. You need someone to hold that line and to assist you with
				concepts/assignments that you will have questions on. You will need the
				encouragement and, at times, someone to tell you about YOUR own progress
				you may not see in yourself.
			</p>
			<Headline>How does it work?</Headline>
			<p>
				You will work through the curricullum assignments that in the{" "}
				<a
					href="https://www.theodinproject.com/paths/foundations/courses/foundations"
					target="_blank"
					rel="noreferrer noopener"
				>
					Foundations Course
				</a>{" "}
				and then the{" "}
				<a
					href="https://www.theodinproject.com/paths/full-stack-javascript?"
					target="_blank"
					rel="noreferrer noopener"
				>
					Full Stack Javascript Course
				</a>
				. We will virtually meet twice a week for an hour so you can get 1-on-1
				time for any questions or issues you are having. You will also be able
				to reach me on Slack outside of those meeting times when you are stuck
				on an assignment that week. My goal is for YOU to make the career change
				without breaking your bank.
			</p>
			<Headline>Session Rates:</Headline>
			<p>
				Each session is $35 dollars and is a pure 1-on-1 with just you. Your
				questions can be about anything you need that week. I accept payments on
				Sundays (exeptions can be made) for the upcoming week so that we can
				focus on your coding and I can be accessible on Slack to you. Please
				feel free to reach out with anymore questions.
			</p>
		</Page>
	);
}

export default Coaching;
