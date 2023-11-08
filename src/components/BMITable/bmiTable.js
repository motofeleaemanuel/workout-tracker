import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { SIZES } from "../../theme/theme";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: "12px",
    lineHeight: 1.2,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "12px",
    lineHeight: 1.2,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(classification, interval) {
  return { classification, interval };
}

const rows = [
  createData("Severe Thinness", "< 16"),
  createData("Moderate Thinness", "16 - 17"),
  createData("Mild Thinness", "17 - 18.5"),
  createData("Normal", "18.5 - 25"),
  createData("Overweight", "25 - 30"),
  createData("Obese Class I", "30 - 35"),
  createData("Obese Class II", "35 - 40"),
  createData("Obese Class III", "> 40"),
];

export default function BMITable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 330 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Classification</StyledTableCell>
            <StyledTableCell align="right">BMI range - kg/m2</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.classification}>
              <StyledTableCell component="th" scope="row">
                {row.classification}
              </StyledTableCell>
              <StyledTableCell align="right">{row.interval}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
