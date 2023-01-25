require("dotenv").config();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendGrid = (values) => {
	const currentDate = new Date();
	const checkEmail = values.email === "" ? "Not Provided" : values.email;
	const message = {
		to: process.env.SENDGRID_API_KEY_EMAIL,
		from: process.env.SENDGRID_API_KEY_EMAIL,
		subject: "New contact submitted to marcmccarthy.io",
		text: "New contact submitted to marcmccarthy.io",
		html: `<div>
        <h3>New contact submitted to marcmccarthy.io on: <b>${
					currentDate.getMonth() + 1
				}-${currentDate.getDate()}-${currentDate.getFullYear()}</b></h3>
        <ul style="list-style-type: none; padding: 5px; font-size: 14px; width: 50%;">
          <li><b>Full Name:</b> ${values.firstName} ${values.lastName}</li>
          <li><b>Email:</b> ${checkEmail}</li>
          <li><b>How to Connect:</b> ${values.message}</li>
        </ul>
      </div>`,
	};
	sgMail
		.send(message)
		.then(() => {
			// console.log('Email has been sent to SendGrid Admin')
		})
		.catch((error) => {
			console.error(error);
		});
};

module.exports = sendGrid;
