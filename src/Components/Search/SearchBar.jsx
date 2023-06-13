import React, { useState, useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";

export default function SearchBox(props) {
  const { selectPosition, setSelectPosition, data, setData } = props;
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
  const latitude = selectPosition?.lat ? selectPosition.lat : 11.8745;
  const longitude = selectPosition?.lon ? selectPosition.lon : 75.3704;
  // console.log("selectpostition", selectPosition )
  // console.log("lat", latitude )
  // console.log("long",longitude)

  const search = () => {
    const params = {
      q: searchText,
      format: "json",
      addressdetails: 1,
      polygon_geojson: 0,
    };
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        // console.log("select location",JSON.parse(result));
        setListPlace(JSON.parse(result));
      })
      .catch((err) => console.log("err: ", err));
    // setSearchText("")
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=bd5e378503939ddaee76f12ad7a97608`
    )
      .then((response) => response.text())
      .then((result) => {
        // console.log("data",JSON.parse(result))
        setData(JSON.parse(result));

        // console.log("data",data)
      })
      .catch((err) => console.log("err: ", err));
  }, [selectPosition]);

  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
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
            onClick={() => {
              search();
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid>
        <List component="nav" aria-label="main mailbox folders">
          {listPlace.slice(0, 4).map((item) => {
            return (
              <Grid key={item?.place_id}>
                <ListItem
                  button
                  style={{ background: "white" }}
                  onClick={() => {
                    setSelectPosition(item, setListPlace([]));
                  }}
                >
                  <ListItemIcon>
                    <img
                      src="./placeholder.png"
                      alt="Placeholder"
                      style={{ width: 30, height: 30 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItem>
                <Divider />
              </Grid>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
}
