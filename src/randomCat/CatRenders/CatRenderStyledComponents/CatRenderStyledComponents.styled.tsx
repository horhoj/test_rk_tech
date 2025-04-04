import styled from 'styled-components';

export const CatRenderStyledComponents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Button = styled.button<{ isActive?: boolean }>`
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => (props.isActive ? 'darkmagenta' : 'cadetblue')};
  color: #fff;

  &:disabled {
    background-color: gray;
    cursor: auto;
  }
`;

export const BtnsWrapper = styled.span`
  display: flex;
  gap: 20px;
`;

export const CatImg = styled.img`
  width: 500px;
  border-radius: 16px;
`;

export const CheckedLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Checked = styled.input`
  width: 20px;
  height: 20px;
`;
