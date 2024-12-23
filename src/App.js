import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
  width: 100%;
`;

const ContentArea = styled.div``;

const Breadcrumb = styled.div`
  margin-bottom: 20px;
  font-size: 14px;

  a {
    color: #4CAF50;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <MainContent>
        <ContentArea>
          <Breadcrumb>
            <a href="/">Home</a> » Contact Us
          </Breadcrumb>
          <ContactForm />
        </ContentArea>
        <Sidebar />
      </MainContent>
      <Footer />
    </AppWrapper>
  );
}

export default App;

