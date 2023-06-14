import { useState } from "react";
import SearchBar from "../../Components/Search/SearchBar";
import Maps from "../../Components/Map/Map";
import { Grid, Card } from "@mui/material";
import DetailsContainer from "../../Components/DetailsContainer/DetailsContainer";

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

      <Grid
        container
        item
        justifyContent="center"
        style={{
          display: "flex",
          width: "70%",
          margin: "auto",
          background: "white",
          borderRadius: 10,
          backgroundColor: "#D3D3D3",
          height: "auto",
          zIndex: -1,
        }}
      >
        <Grid item sx={{ width: "100%", height: "auto", padding: 3 }}>
          <DetailsContainer data={data} />
        </Grid>

        <Card sx={{ width: "100%", height: "50vh" }}>
          <Maps selectPosition={selectPosition} />
        </Card>
      </Grid>
    </>
  );
}

export default Body;
