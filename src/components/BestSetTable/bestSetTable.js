import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination, useTheme } from "@mui/material";

export default function BestSetTable({ workoutExercises }) {
  const theme = useTheme();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    event.stopPropagation();
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const findBestSet = (sets) => {
    if (!sets || sets.length === 0) {
      return "No data available";
    }

    const bestSet = sets.reduce(
      (max, set) => (parseInt(set.weight) > parseInt(max.weight) ? set : max),
      sets[0]
    );

    return `${bestSet.weight}kg - ${bestSet.reps} reps`;
  };
  return (
    <TableContainer component={Paper} style={{ marginBottom: "24px" }}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead
          style={{
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <TableRow>
            <TableCell style={{ color: "white" }}>Exercise Name</TableCell>
            <TableCell style={{ color: "white" }} align="right">
              Best Set
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workoutExercises &&
            workoutExercises
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((exercise) => (
                <TableRow
                  key={exercise._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {exercise.name}
                  </TableCell>
                  <TableCell align="right">
                    <span
                      style={{
                        color: theme.palette.secondary.main,
                        fontWeight: "bold",
                      }}
                    >
                      {findBestSet(exercise?.series)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[3]}
        component="div"
        count={workoutExercises.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
