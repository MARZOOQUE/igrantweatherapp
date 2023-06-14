import React, { useState, useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { SearchApi, MapApi } from "../../API/api";
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: "50%",
  },
  [theme.breakpoints.down('sm')]: {
    width: "70%",
  },
  [theme.breakpoints.up('md')]: {
    width: "50%",
  },
  [theme.breakpoints.up('lg')]: {
    width: "50%",
  },
}));

export default function SearchBox(props) {
  const { selectPosition, setSelectPosition, setData } = props;
  const [searchText, setSearchText] = useState("");
  const latitude = selectPosition?.city?.coord?.lat
    ? selectPosition?.city?.coord?.lat
    : 11.8745;
  const longitude = selectPosition?.city?.coord?.lon
    ? selectPosition?.city?.coord?.lon
    : 75.3704;

  useEffect(() => {
    MapApi(latitude, longitude, setData);
  }, [selectPosition]);

  return (
    <Root
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        zIndex: 999,
      }}
    >
      <Grid style={{ display: "flex" }}>
        <Grid style={{ flex: 1 }}>
          <OutlinedInput
            style={{ width: "100%", height: "70%" }}
            value={searchText}
            placeholder="Search Location"
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </Grid>
        <Grid style={{ height: "80%" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#2d545e", marginLeft: 10 }}
            onClick={() => SearchApi(searchText, setSelectPosition)}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Root>
  );
}
