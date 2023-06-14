import { useState } from "react";
import SearchBar from "../../Components/Search/SearchBar";
import Maps from "../../Components/Map/Map";
import { Grid, Card } from "@mui/material";
import DetailsContainer from "../../Components/DetailsContainer/DetailsContainer";
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: "70%",
  },
  [theme.breakpoints.down('sm')]: {
    width: "90%",
  },
  [theme.breakpoints.up('md')]: {
    width: "70%",
  },
  [theme.breakpoints.up('lg')]: {
    width: "70%",
  },
}));


function Body() {
  const [selectPosition, setSelectPosition] = useState(null);
  const [data, setData] = useState();

  return (
    <>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          marginBottom: "60px",
        }}
      >
        <SearchBar
          selectPosition={selectPosition}
          setSelectPosition={setSelectPosition}
          data={data}
          setData={setData}
        />
      </Grid>

      <Root
        container
        item
        justifyContent="center"
        style={{
          display: "grid",
          margin: "auto",
          background: "white",
          borderRadius: 10,
          backgroundColor: "#D3D3D3",
          height: "auto",
          zIndex: -1,
          marginBottom:20
        }}
      >
        <Grid item sx={{ width: "100%", height: "auto", padding: 3 }}>
          <DetailsContainer data={data} />
        </Grid>

        <Card sx={{ width: "100%", height: "50vh" }}>
          <Maps selectPosition={selectPosition} />
        </Card>
      </Root>
    </>
  );
}

export default Body;
