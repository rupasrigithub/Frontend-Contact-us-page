import styled from 'styled-components';

export const FormWrapper = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

export const WarningBanner = styled.div`
  background-color: #ffebee;
  border: 1px solid #ffcdd2;
  color: #c62828;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.5;
`;

export const FormTitle = styled.h2`
  color: #4CAF50;
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const FormSubtitle = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 120px;
  font-size: 14px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

export const CaptchaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const CaptchaImage = styled.div`
  background: #e3f2fd;
  padding: 8px 16px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 16px;
  letter-spacing: 2px;
`;

export const CaptchaInput = styled(Input)`
  width: 120px;
`;

export const SubmitButton = styled.button`
  background: #4CAF50;
  color: white;
  padding: 8px 24px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  float: right;

  &:hover {
    background: #43A047;
  }
`;

