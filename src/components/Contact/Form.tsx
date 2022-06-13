import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import emailjs from "emailjs-com";

import * as imgList from "../../assets/imgList";
import { useSuccessCtx } from "../../context/successMessage";

interface ILabelProps {
  errorMessage: string | undefined | boolean;
}

interface IInitialValues {
  subject?: string;
  email?: string;
  message?: string;
}

const intialValue = {
  subject: "",
  email: "",
  message: "",
};

export const Form = () => {
  const { t } = useTranslation(),
    [formValues, setFormValues] = useState<IInitialValues>(intialValue),
    [errors, setErrors] = useState<IInitialValues>(intialValue),
    [submit, setSubmit] = useState<boolean>(false),
    { setSuccessMessage, successMessage } = useSuccessCtx(),
    [loading, setLoading] = useState<boolean>(false),
    formRef = useRef<HTMLFormElement>(null!);

  const handleValues = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // Inputs validation, this function is called when the form is submitted
  const validate = (values: IInitialValues): {} => {
    const errors: IInitialValues = {},
      emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.subject) errors.subject = "empty";

    if (!values.email) errors.email = "empty";
    else if (!emailRegex.test(values.email)) {
      errors.email = "invalid";
    }

    if (!values.message) errors.message = "empty";

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setSubmit(true);
  };

  // If the errors object has no errors and the user clicked the submit button,
  // the form will be submitted to emailjs
  useEffect(() => {
    if (!Object.keys(errors).length && submit) {
      setLoading(true);
      emailjs.sendForm("service_7idufyi", "Portfolio_template", formRef.current, "9bF7gMBhC6-tOJdmb").then(
        (res) => {
          setLoading(false);
          setSuccessMessage("success");
        },
        (err) => {
          setLoading(false);
          setSuccessMessage("fail");
        }
      );
    }
  }, [errors]);

  // Make message disappear after 5 seconds
  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage(false);
      }, 5500);
    }
  }, [successMessage]);

  // The reason why its not possible to use the propreties from the error objects
  // as values to the errors containers its because of the i18next library, i18next
  // needs the text to be put inside of the 'return'

  return (
    <FormStyle onSubmit={(e) => handleSubmit(e)} ref={formRef} data-aos="fade-left" data-aos-duration="300">
      <MyLabel errorMessage={errors.subject}>
        <input type="text" name="subject" onChange={(e) => handleValues(e)} placeholder={t("Title")} maxLength={50} />
        <footer>
          <span>{t("Your message must contain a subject")}</span>
          <p>{50 - formValues.subject!.length}</p>
        </footer>
      </MyLabel>
      <MyLabel errorMessage={errors.email}>
        <input name="email" onChange={(e) => handleValues(e)} placeholder={t("Your email adress")} maxLength={50} />
        <footer>
          <span>
            {errors.email == "empty" ? t("Please, enter an Email") : errors.email == "invalid" && t("Invalid Email")}
          </span>
          <p>{50 - formValues.email!.length}</p>
        </footer>
      </MyLabel>
      <MyLabel errorMessage={errors.message}>
        <textarea name="message" onChange={(e) => handleValues(e)} placeholder={t("Content")} maxLength={300} />
        <footer>
          <span>{t("Please, enter the message")}</span>
          <p>{300 - formValues.message!.length}</p>
        </footer>
      </MyLabel>
      {!loading ? (
        <button type="submit" data-aos="fade-left" data-aos-duration="700">
          {t("Send")}
        </button>
      ) : (
        <img src={imgList.logo} className="floating" />
      )}
    </FormStyle>
  );
};

const FormStyle = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 574px;
  font-family: "Zen Kaku Gothic Antique", sans-serif;

  .greenn {
    color: var(--green);
  }

  input,
  textarea {
    border: none;
    background: var(--black);
    outline: none;
    color: var(--white);
    padding: 5px;
    font-size: 20px;
    border-bottom: rgba(248, 248, 248, 0.5) solid 3px;
    border-radius: 5px 5px 0 0;
  }

  button {
    color: var(--green);
    font-size: 35px;
    font-weight: 900;
    margin: 0 auto;
  }
`;

const MyLabel = styled.label<ILabelProps>`
  display: flex;
  flex-direction: column;
  width: 430px;
  height: 68px;

  input,
  textarea {
    border: none;
    background: var(--black);
    outline: none;
    color: var(--white);
    padding: 5px;
    font-size: 20px;
    border-bottom: rgba(248, 248, 248, 0.5) solid 3px;
    border-radius: 5px 5px 0 0;
    height: 44px;
  }

  textarea {
    width: 100%;
    height: 260px;
    resize: none;
  }

  footer {
    display: flex;
    justify-content: flex-end;

    span {
      display: none;
      justify-content: space-between;
      color: var(--red);
      font-weight: 500;
      width: 50%;
    }

    p {
      color: var(--white);
      opacity: 0.5;
    }
  }

  &:last-of-type {
    height: 266px;
  }

  ${({ errorMessage }) =>
    errorMessage
      ? `
        input, textarea{
            border-bottom: var(--red) solid 3px;
        }

        footer{
          justify-content: space-between;

          span{
            display: flex;
        }
        }
     `
      : errorMessage == undefined &&
        `
     input, textarea{
            border-bottom: var(--green) solid 3px;
        }
     `}

  @media (max-width: 535px) {
    width: 280px;
  }
`;
