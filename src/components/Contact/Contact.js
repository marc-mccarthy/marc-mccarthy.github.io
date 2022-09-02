import React, {useEffect} from 'react'
import { Page, Content, ContactMe, ContactLink, Badge, BadgeLink, FormBox, TellMe, TellMeButton, Label, Input, InputMessage } from './Contact.styled';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

let contactLinks = [
  {
    name: 'Gmail',
    link: 'mailto:marstheory20@gmail.com',
    logo: 'https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/marc-mccarthy',
    logo: 'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/the-marc-mccarthy/',
    logo: 'https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white',
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/channel/UCjwzRyKjuJHm1mPw_KcGZUA',
    logo: 'https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/themarcmccarthy',
    logo: 'https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white',
  },
]

function Contact() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState, formState: { errors } } = useForm();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ firstName: '', lastName: '', email: '', message: '' });
    }
  }, [formState, reset]);

  const addContact = (data) => {
    dispatch({ type: 'ADD_CONTACT_SAGA', payload: data});
  };

  const handleError = (errors) => {
    console.log(errors);
    alert('All fields are required other than email')
  };

  const addContactOptions = {
    firstName: { required: "First name is required" },
    lastName: { required: "Last name is required" },
    email: { required: "Email is not required" },
    message: { required: "Message is required" },
  };

  return (
    <Page>
      <Content>
        <ContactMe>
          {contactLinks.map((platform, index) => {
            return (
              <ContactLink>
                <BadgeLink key={index} href={platform.link} target="_blank" rel="noopener">
                  <Badge src={platform.logo} alt={platform.name} />
                </BadgeLink>
              </ContactLink>
            )
          })}
        </ContactMe>
        <FormBox onSubmit={handleSubmit(addContact, handleError)}>
          <TellMe>
            <Label>First Name*</Label>
            <Input type="text" name="firstName" {...register('firstName', addContactOptions.firstName)} />
            <small className="text-danger">
              {errors.firstName && errors.firstName.message}
            </small>
          </TellMe>
          <TellMe>
            <Label>Last Name*</Label>
            <Input type="text" name="lastName" {...register('lastName', addContactOptions.lastName)} />
            <small className="text-danger">
              {errors.lastName && errors.lastName.message}
            </small>
          </TellMe>
          <TellMe>
            <Label>Email</Label>
            <Input type="email" name="email" {...register('email')} />
          </TellMe>
          <TellMe>
            <Label>How can we connect?*</Label>
            <InputMessage type="text" rows="5" name="message" {...register('message', addContactOptions)} />
            <small className="text-danger">
              {errors.message && errors.message.message}
            </small>
          </TellMe>
          <TellMeButton>
            Submit
          </TellMeButton>
        </FormBox>
      </Content>
    </Page>
  );
}

export default Contact;
