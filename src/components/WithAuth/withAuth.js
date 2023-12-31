import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react"; // Assuming you're using Auth0 for authentication
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/authSlice";
import { baseURL } from "../../utils/baseUrl";

const WithAuthentication = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, logout, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();
    if (isAuthenticated) {
      const fetchData = async () => {
        try {
          const accessToken = await getAccessTokenSilently();
          const response = await axios.get(`${baseURL}/api/user/check`, {
            signal: abortController.signal,
            headers: { Authorization: `Bearer ${accessToken}` },
          });
          const { data } = response;
          dispatch(signIn(data));
        } catch (error) {
          if (axios.isCancel(error)) {
            return;
          }
          logout();
          navigate("/");
        }
      };

      fetchData();
      return () => abortController.abort();
    } else {
      logout();
      navigate("/");
    }
  }, [location.pathname]);

  return <div>{children}</div>;
};

export default WithAuthentication;
