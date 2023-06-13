import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid className="App">
      <Header />
      <Body />
    </Grid>
  );
}

export default App;
