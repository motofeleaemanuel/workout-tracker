import React from "react";
import {
  FeatureText,
  ForgotPasswordText,
  LoginCard,
  LoginCardLeftSide,
  LoginCardRightSide,
  LoginContainer,
  LoginFormInputs,
  LoginFormLogoWrapper,
  LoginFormWrapper,
  ResizedCarousel,
} from "./styledLogin";
import {
  Button,
  Divider,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import logo from "../../assets/logoImg.png";
import GoogleLoginButton from "../../components/GoogleLoginButton/GoogleLoginButton";
import image1 from "../../assets/DavidLaidBg.jpg";
import image2 from "../../assets/TractiuniCarousel.jpg";
import image3 from "../../assets/ChrisCarousel.jpg";
const Login = () => {
  const theme = useTheme();
  return (
    <LoginContainer>
      <LoginCard>
        <LoginCardLeftSide>
          <LoginFormWrapper>
            <LoginFormLogoWrapper>
              <img
                style={{ borderRadius: 100 }}
                src={logo}
                alt="logo"
                height={125}
                width={125}
              />
            </LoginFormLogoWrapper>
            <Typography
              textAlign="center"
              variant="h6"
              fontWeight="bold"
              style={{ marginBottom: "32px" }}
            >
              Empower Your Workouts <br />
              <span> Gladiator Tracking</span>
            </Typography>
            <LoginFormInputs>
              <TextField
                style={{ marginBottom: "12px" }}
                id="outlined-basic"
                label="E-mail"
                variant="standard"
                disabled
                fullWidth
                size="small"
              />
              <TextField
                style={{ marginBottom: "12px" }}
                id="outlined-basic"
                label="Password"
                variant="standard"
                disabled
                fullWidth
                size="small"
              />
              <ForgotPasswordText>Forgot password?</ForgotPasswordText>
              <Button
                style={{ marginBottom: "18px", height: "36px" }}
                variant="contained"
                fullWidth
                disabled
              >
                Sign In
              </Button>
              <div
                style={{
                  height: "1px",
                  width: "100%",
                  marginBottom: "18px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Divider style={{ flex: 1 }} />
                <Typography
                  color="textSecondary"
                  style={{
                    flex: "0 0 auto",
                    margin: "0 8px",
                    fontSize: "12px",
                    color: theme.palette.disabled.main,
                  }}
                >
                  OR
                </Typography>
                <Divider style={{ flex: 1 }} />
              </div>
              <GoogleLoginButton />
            </LoginFormInputs>
          </LoginFormWrapper>

          <FeatureText
            theme={theme}
            style={{
              position: "absolute",
              bottom: 0,
              left: 185,
              fontSize: "12px",
              color: theme.palette.disabled.main,
            }}
          >
            Register coming soon...
          </FeatureText>
        </LoginCardLeftSide>
        <LoginCardRightSide>
          <ResizedCarousel>
            <img height="700px" width="500px" src={image1} alt="awa1" />
            <img height="700px" width="500px" src={image2} alt="awa2" />
            <img height="700px" width="500px" src={image3} alt="awa3" />
          </ResizedCarousel>
        </LoginCardRightSide>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
