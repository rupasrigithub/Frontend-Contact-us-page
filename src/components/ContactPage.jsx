import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PageContainer,
  MainContent,
  WarningBanner,
  FormContainer,
  FormTitle,
  FormGroup,
  Input,
  Select,
  TextArea,
  CaptchaContainer,
  CaptchaImage,
  SubmitButton,
  Breadcrumb
} from './ContactForm/styles';
import {
  SidebarContainer,
  SidebarSection,
  SectionTitle,
  QuickLinks,
  LinkGroup,
  GroupTitle,
  LinkList,
  LinkItem
} from './Sidebar/styles';
import { Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    subject: '',
    contact: '',
    message: '',
    fullName: '',
    email: '',
    captcha: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageContainer>
      <MainContent>
        <Breadcrumb>
          <Link to="/">Home</Link> » Contact Us
        </Breadcrumb>

        <WarningBanner>
          IndiaBIX is completely free to use. Be cautious of scammers who may request payment for online tests, job opportunities, or placement training using the name "IndiaBIX".
        </WarningBanner>

        <FormContainer>
          <FormTitle>We'd love to hear from you</FormTitle>
          <form onSubmit={handleSubmit}>
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
                <option value="">Select Contact Type</option>
                <option value="general">General Inquiry</option>
                <option value="technical">Technical Support</option>
                <option value="feedback">Feedback</option>
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
              <Input
                type="text"
                name="captcha"
                placeholder="Captcha"
                value={formData.captcha}
                onChange={handleChange}
                style={{ width: '120px' }}
              />
            </CaptchaContainer>

            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </FormContainer>
      </MainContent>

      <SidebarContainer>
        <SidebarSection>
          <SectionTitle>
            <Clock size={20} />
            Current Affairs
          </SectionTitle>
          <div>Check out the latest current affairs questions and answers.</div>
        </SidebarSection>

        <QuickLinks>
          <LinkGroup>
            <GroupTitle>Quantitative Aptitude</GroupTitle>
            <LinkList>
              <LinkItem><Link to="/arithmetic">Arithmetic</Link></LinkItem>
              <LinkItem><Link to="/data-interpretation">Data Interpretation</Link></LinkItem>
            </LinkList>
          </LinkGroup>

          <LinkGroup>
            <GroupTitle>Programming</GroupTitle>
            <LinkList>
              <LinkItem><Link to="/python">Python Programming</Link></LinkItem>
              <LinkItem><Link to="/c">C Programming</Link></LinkItem>
              <LinkItem><Link to="/cpp">C++</Link></LinkItem>
              <LinkItem><Link to="/java">Java</Link></LinkItem>
            </LinkList>
          </LinkGroup>

          <LinkGroup>
            <GroupTitle>Interview</GroupTitle>
            <LinkList>
              <LinkItem><Link to="/hr">HR</Link></LinkItem>
              <LinkItem><Link to="/technical">Technical Interview</Link></LinkItem>
            </LinkList>
          </LinkGroup>

          <LinkGroup>
            <GroupTitle>Placement Papers</GroupTitle>
            <LinkList>
              <LinkItem><Link to="/papers">Placement Papers</Link></LinkItem>
              <LinkItem><Link to="/submit">Submit Paper</Link></LinkItem>
            </LinkList>
          </LinkGroup>
        </QuickLinks>
      </SidebarContainer>
    </PageContainer>
  );
}

