import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useTheme } from "@mui/material";

export default function SetsTable({
  sets,
  handleDeleteSet,
  exerciseId,
  readOnly,
}) {
  const theme = useTheme();
  return (
    <TableContainer component={Paper} style={{ marginBottom: "24px" }}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead
          style={{
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <TableRow>
            <TableCell style={{ color: "white" }}>Set Nr.</TableCell>
            <TableCell style={{ color: "white" }} align="right">
              Weight(KG)
            </TableCell>
            <TableCell style={{ color: "white" }} align="right">
              Repetitions
            </TableCell>
            {!readOnly ? (
              <TableCell style={{ color: "white" }} align="right">
                Delete
              </TableCell>
            ) : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {sets?.map((set) => (
            <TableRow
              key={set.id || set._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {set.number}
              </TableCell>
              <TableCell align="right">{set.weight}</TableCell>
              <TableCell align="right">{set.reps}</TableCell>
              {!readOnly ? (
                <TableCell align="right">
                  <div
                    onClick={() => {
                      handleDeleteSet(exerciseId, set.id);
                    }}
                  >
                    <RemoveCircleOutlineIcon />
                  </div>
                </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
