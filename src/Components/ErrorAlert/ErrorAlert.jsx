import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  margin: "auto",
  marginBottom: "10px",
  height: "5px",
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
  [theme.breakpoints.up("md")]: {
    width: "40%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "30%",
  },
}));

export default function BasicAlerts(props) {
  const { error, setError } = props;

  return (
    <Root>
      <Stack>
        <Alert severity="error" onClose={() => setError("")}>
          {error}
        </Alert>
      </Stack>
    </Root>
  );
}
