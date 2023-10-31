import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBar({ severity, error }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  React.useEffect(() => {
    setInterval(() => {
      setOpen(false);
    }, 3000);
  }, []);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {error?.workoutError?.message
            ? error?.workoutError?.message
            : error.message}
          <br />
          {error?.bodyWeightError?.message
            ? error?.bodyWeightError?.message
            : null}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
