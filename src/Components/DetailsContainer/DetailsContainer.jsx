import { Grid, Typography } from "@mui/material";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Dialog from "../Dialog/Dialog";
import Clear from "../../assets/sunny.png";
import Rain from "../../assets/rain.png";
import Clouds from "../../assets/cloud.png";
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: "flex",
  },
  [theme.breakpoints.down('sm')]: {
    display: "grid",
  },
  [theme.breakpoints.up('md')]: {
    display: "flex",
  },
  [theme.breakpoints.up('lg')]: {
    display: "flex",
  },
}));

function DetailsContainer(data) {
  const details = data?.data;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Root>
      <Grid width="50%">
        <Typography variant="h6" color="#2d545e">
          {details?.list[0]?.dt_txt?.slice(0, 10)}
        </Typography>
        <Typography variant="h5" color="#2d545e" >{details?.city?.name}</Typography>
        <Grid style={{ display: "flex", alignItems: "center" }}>
          {details?.list[0]?.weather[0]?.main === "Clear" && (
            <img src={Clear} alt="clear" style={{ height: 35, width: 45 }} />
          )}
          {details?.list[0]?.weather[0]?.main === "Rain" && (
            <img src={Rain} alt="rain" style={{ height: 35, width: 45 }} />
          )}
          {details?.list[0]?.weather[0]?.main === "Clouds" && (
            <img src={Clouds} alt="clouds" style={{ height: 35, width: 45 }} />
          )}
          &nbsp;
          <Typography variant="h5" color="grey">
            {(details?.list[0]?.main?.temp - 273.15).toFixed(2)}
            {"\u00b0"}C
          </Typography>
        </Grid>

        <Typography style={{ fontSize: 12, fontWeight: "bold" }}>
          Feels like {(details?.list[0]?.main?.feels_like - 273.15).toFixed(2)}
          {"\u00b0"}C.{" "}
          {details?.list[0]?.weather[0]?.description.charAt(0).toUpperCase() +
            details?.list[0]?.weather[0]?.description.slice(1)}
        </Typography>
      </Grid>
      <Grid style={{
            display: "grid",
            alignItems: "center",
            justifyContent: "right",
            width:"50%"
          }}
           >
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            marginTop:10 
          }}
          onClick={handleClickOpen}
        >
          <Typography variant="h5" color="#2d545e" style={{ cursor: "pointer",}}>
            8 day forecast
          </Typography>
          <ArrowRightIcon style={{ color: "#2d545e" }} />
        </Grid>
        <Typography style={{ fontSize: 12, marginTop: 20 }}>
          Humidity: {details?.list[0]?.main?.humidity}%
        </Typography>
        <Typography style={{ fontSize: 12 }}>
          Pressure: {details?.list[0]?.main?.pressure}hPa
        </Typography>
        <Typography style={{ fontSize: 12 }}>
          Visibility: {details?.list[0]?.visibility}m
        </Typography>
      </Grid>
      <Dialog open={open} setOpen={setOpen} details={details} />
    </Root>
  );
}

export default DetailsContainer;
