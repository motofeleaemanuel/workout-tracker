import React from "react";
import GoogleLogo from "../../assets/GoogleSignInIcon.png";
import {
  GoogleButtonContainer,
  GoogleButtonTextWrapper,
  GoogleButtonWrapper,
  GoogleIconContainer,
} from "./styledGoogleLoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const GoogleLoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleOnClick = async () => {
    loginWithRedirect();
  };

  return (
    <GoogleButtonContainer onClick={handleOnClick}>
      <GoogleButtonWrapper>
        <GoogleIconContainer>
          <img height={20} width={20} src={GoogleLogo} alt="googleIcn" />
        </GoogleIconContainer>
        <GoogleButtonTextWrapper>
          <span>Sign In with Google</span>
        </GoogleButtonTextWrapper>
      </GoogleButtonWrapper>
    </GoogleButtonContainer>
  );
};

export default GoogleLoginButton;
