import {
	Headline,
	Link,
	Page,
	Resources,
	Title,
	TitleBox,
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
				skills necessary to excel in the tech industry. You will work through a
				custom curriculum, the Odin Project, and/or Full Stack Open for the base
				assignments. I will be with you for the whole ride and will be a mentor
				to you. You can contact me via{" "}
				<a href="mailto:marstheory20@gmail.com">Email</a> or send me a message
				on my <a href="/#/contact">Contact</a> page.
			</p>
			<Headline>Why trust me to help?</Headline>
			<p>
				I tried to do this all on my own. It failed. I had no accountability and
				no real human to help me... I decided to attend a boot camp to fix the
				issue. Now my boot camp was amazing; the best one in the country in my
				opinion, however, not everyone has $20,000 laying around and can leave
				their current career to switch direction. This presents a real problem
				for so many who want to pursue this, but simply cannot due to finances.
			</p>
			<Headline>This is where I come in!</Headline>
			<p>
				I can help bridge the gap and help you gain the skills with less
				overhead. The curriculum isn't typically the issue I see for why someone
				doesn't succeed at this. There are bazillions of free resources online,
				yet so many new coders fail and give up! The problem is almost always
				due to a lack of accountability and commitment to finish it through. You
				need someone to hold that line and to assist you with
				concepts/assignments that you will inevitably have questions on. You
				will need the encouragement and, at times, someone there to tell you
				about YOUR own progress which you may not see in yourself right away.
			</p>
			<Headline>How does it work?</Headline>
			<p>
				We will be working almost exclusively with React and Javascript. We will
				meet first to determine the best path to start. A sample curriculum may
				include assignments found in the{" "}
				<a
					href="https://www.theodinproject.com/paths/foundations/courses/foundations"
					target="_blank"
					rel="noreferrer noopener"
				>
					Foundations Course
				</a>{" "}
				followed by the{" "}
				<a
					href="https://www.theodinproject.com/paths/full-stack-javascript?"
					target="_blank"
					rel="noreferrer noopener"
				>
					Full Stack Javascript Course
				</a>
				. We will meet virtually 2-3 times per week for an hour so you can get
				1-on-1 time for any questions or issues you are having. You will also be
				able to reach me on Slack/Email outside of those meeting times when you
				are stuck on an assignment that week. My goal is for YOU to make the
				career change without breaking the bank.
			</p>
			<Headline>Session Rates:</Headline>
			<p>
				Each mentor session is $50 dollars and is a pure 1-on-1 with just you
				and I. Your questions can be about anything you need that week. I accept
				payments on Sundays (exceptions possible) for the upcoming week so that
				we can focus on your coding and I can be accessible to you on Slack.
				Please feel free to reach out with anymore questions.
			</p>
		</Page>
	);
}

export default Coaching;
