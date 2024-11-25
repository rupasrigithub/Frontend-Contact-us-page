import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  font-size: 13px;
  color: #666;
`;

export const Copyright = styled.div`
  color: #666;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 16px;

  a {
    color: #2196F3;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

