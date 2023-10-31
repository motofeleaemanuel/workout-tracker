import styled from "styled-components";

export const GoogleButtonContainer = styled.button`
  height: 36px;
  padding: 0px;
  border: none;
  background-color: #4285f4;
  color: white;
  font-weight: bold;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 6px 20px 0 rgba(66, 133, 244, 0.2),
      0 6px 20px 0 rgba(66, 133, 244, 0.19);
  }
`;

export const GoogleButtonWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const GoogleIconContainer = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 34px;
  border: 1px solid #4285f4;
`;

export const GoogleButtonTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
