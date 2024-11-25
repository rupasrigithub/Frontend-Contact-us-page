import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  width: 300px;
`;

export const CurrentAffairs = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const IconWrapper = styled.div`
  color: #666;
`;

export const ContentWrapper = styled.div`
  flex: 1;
`;

export const Title = styled.h3`
  color: #4CAF50;
  font-size: 16px;
  margin: 0 0 4px 0;
  font-weight: 500;
`;

export const Description = styled.p`
  color: #666;
  font-size: 13px;
  margin: 0;
`;

export const AdBanner = styled.div`
  margin: 20px 0;
  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;

export const QuickLinksContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const QuickLinksHeader = styled.div`
  background: #f5f5f5;
  padding: 8px;
  text-align: center;
  font-size: 14px;
  color: #333;
`;

export const QuickLinksContent = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const Column = styled.div``;

export const SectionTitle = styled.h4`
  color: ${props => props.color || '#4CAF50'};
  font-size: 14px;
  margin: 0 0 8px 0;
  font-weight: 500;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const LinkItem = styled.li`
  margin-bottom: 4px;
  padding-left: 12px;
  position: relative;

  &:before {
    content: "›";
    position: absolute;
    left: 0;
    color: #666;
  }

  a {
    color: #666;
    text-decoration: none;
    font-size: 13px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

