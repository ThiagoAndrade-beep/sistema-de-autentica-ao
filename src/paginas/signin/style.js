import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: #171D1F;
  box-shadow: 0 0 20px rgba(0, 128, 0, 1);
  max-width: 350px;
  padding: 40px;
  border-radius: 5px;
`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #E1E1E1;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;