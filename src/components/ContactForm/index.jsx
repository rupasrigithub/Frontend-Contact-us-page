import React, { useState } from 'react';
import {
  FormWrapper,
  WarningBanner,
  FormTitle,
  FormSubtitle,
  FormGroup,
  Input,
  Select,
  TextArea,
  CaptchaContainer,
  CaptchaInput,
  CaptchaImage,
  SubmitButton
} from './styles';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    subject: '',
    contact: '',
    message: '',
    fullName: '',
    email: '',
    captcha: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <FormWrapper>
      <WarningBanner>
        IndiaBIX is completely free to use. Be cautious of scammers who may request payment for online tests, job opportunities, or placement training using the name "IndiaBIX."
      </WarningBanner>

      <FormTitle>We'd love to hear from you</FormTitle>
      <FormSubtitle>
        Have a suggestion? Found a bug? Delete your account/data? Fill out the form below, and we'll take a look!
      </FormSubtitle>

      <form>
        <FormGroup>
          <Input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Select
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          >
            <option value="">Contact</option>
            <option value="suggestion">Suggestion</option>
            <option value="report">Report</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <TextArea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="email"
            name="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>

        <CaptchaContainer>
          <CaptchaImage>2745</CaptchaImage>
          <CaptchaInput
            type="text"
            name="captcha"
            placeholder="Captcha"
            value={formData.captcha}
            onChange={handleChange}
          />
        </CaptchaContainer>

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormWrapper>
  );
}

