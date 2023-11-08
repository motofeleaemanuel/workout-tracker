console.log(process.env.REACT_APP_NODE_ENV);

export const baseURL =
  process.env.REACT_APP_NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://workout-tracker-be.onrender.com";
