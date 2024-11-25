import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 16px;
  }
`;

const Breadcrumb = styled.div`
  margin-bottom: 20px;
  
  a {
    color: #4CAF50;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <div>
          <Breadcrumb>
            <a href="/">Home</a> » Contact Us
          </Breadcrumb>
          <ContactForm />
        </div>
        <Sidebar />
      </MainContent>
    </AppContainer>
  );
}

