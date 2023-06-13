import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Clear from "../../assets/sunny.png";
import Rain from "../../assets/rain.png";
import Clouds from "../../assets/cloud.png";

export default function BasicTable(details) {
  const list = details?.details?.list;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {list?.map((row) => (
            <TableRow key={row.dt}>
              <TableCell component="th" scope="row" style={{ fontSize: 13 }}>
                {row.dt_txt}
              </TableCell>
              <TableCell
                style={{ display: "flex", alignItems: "center", fontSize: 13 }}
              >
                {" "}
                {row.weather[0]?.main === "Clear" && (
                  <img
                    src={Clear}
                    alt="clear"
                    style={{ height: 25, width: 33 }}
                  />
                )}
                {row.weather[0]?.main === "Rain" && (
                  <img
                    src={Rain}
                    alt="rain"
                    style={{ height: 25, width: 33 }}
                  />
                )}
                {row.weather[0]?.main === "Clouds" && (
                  <img
                    src={Clouds}
                    alt="clouds"
                    style={{ height: 25, width: 33 }}
                  />
                )}
                &nbsp;{(row.main.temp_max - 273.15).toFixed(2)}/
                {(row?.main?.temp_max - 273.15).toFixed(2)}
                {"\u00b0"}C
              </TableCell>
              <TableCell align="left" style={{ fontSize: 13 }}>
                {row.weather[0]?.description.charAt(0).toUpperCase() +
                  row.weather[0]?.description.slice(1)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
