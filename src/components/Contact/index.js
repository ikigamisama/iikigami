import React, { useContext, useState } from "react";
import emailjs from "emailjs-com";
import { ConfigContext } from "../../utils/ConfigContext";
import { contactDetail } from "./config";
import {
  ContactContainer,
  ContactWrapper,
  SectionBorder,
  SectionSubTitle,
  SectionTitle,
  ContactFromWrapper,
  ContactForm,
  ContactTextField,
  ContactSubmitButton,
  ContactDetailList,
  ContactDetailCol,
  ContactDetailIcons,
  ContactDetailTitle,
  ContactDetailContent,
  ContactResponseEmail,
  ContactLoadingProgress,
} from "./ContactElements";
import { BiCheckCircle } from "react-icons/bi";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Contact = () => {
  const { config } = useContext(ConfigContext);
  const [sendEmailResult, setEmailResult] = useState({
    loading: false,
    success: false,
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    setEmailResult({
      loading: true,
      success: false,
      message: "",
    });
    emailjs
      .sendForm(
        "service_fxowbkv",
        "template_mfyrbqi",
        e.target,
        "user_bSwgKawzcH7FJ4dK4ld6f",
      )
      .then(
        () => {
          setEmailResult({
            loading: false,
            success: true,
            message: "Your message has been sent to the owner of this website",
          });
        },
        (error) => {
          setEmailResult({
            loading: false,
            success: false,
            message: error.text,
          });
        },
      );
  };

  return (
    <ContactContainer theme={config.theme}>
      <ContactWrapper>
        <SectionTitle color={config.color}>CONTACT</SectionTitle>
        <SectionSubTitle theme={config.theme}>
          There are many variations of passages of communicate me. For some
          projects and consulting regarding on their web app, software, Etc,
          Just contact me and i will see it though
        </SectionSubTitle>
        <SectionBorder color={config.color} />
        <ContactFromWrapper>
          {sendEmailResult.message !== "" ? (
            <ContactResponseEmail success={sendEmailResult.success}>
              {sendEmailResult.success ? (
                <BiCheckCircle />
              ) : (
                <AiOutlineExclamationCircle />
              )}{" "}
              {sendEmailResult.message}
            </ContactResponseEmail>
          ) : null}

          <ContactForm onSubmit={sendEmail}>
            <ContactTextField
              colorform={config.color}
              type="text"
              required
              fullWidth
              label="Name "
              name="from_name"
            />
            <ContactTextField
              colorform={config.color}
              type="email"
              required
              fullWidth
              label="Your Email  "
              name="email_sender"
            />
            <ContactTextField
              colorform={config.color}
              type="text"
              required
              fullWidth
              label="Subject "
              name="subject"
            />
            <ContactTextField
              colorform={config.color}
              type="text"
              multiline
              rows={4}
              required
              fullWidth
              label="Message "
              name="message"
            />
            <ContactSubmitButton
              type="submit"
              variant="contained"
              fullWidth
              colorbutton={config.color}
              disabled={sendEmailResult.loading}
            >
              {sendEmailResult.loading === true ? (
                <ContactLoadingProgress />
              ) : (
                "SUBMIT"
              )}
            </ContactSubmitButton>
          </ContactForm>
        </ContactFromWrapper>

        <ContactDetailList>
          {contactDetail.map((list, i) => (
            <ContactDetailCol key={i}>
              <ContactDetailIcons color={config.color}>
                <list.icon />
              </ContactDetailIcons>
              <ContactDetailTitle>{list.title}</ContactDetailTitle>
              <ContactDetailContent>{list.details}</ContactDetailContent>
            </ContactDetailCol>
          ))}
        </ContactDetailList>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
