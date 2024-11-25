import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 500;

  .menu-icon {
    cursor: pointer;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SearchBar = styled.div`
  position: relative;

  input {
    padding: 6px 32px 6px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    width: 200px;

    &:focus {
      outline: none;
      border-color: #4CAF50;
    }
  }

  svg {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #333;
  }
`;

