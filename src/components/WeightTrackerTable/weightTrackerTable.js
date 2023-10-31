import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { convertDate } from "../../utils/convertDate";
import theme from "../../theme/theme";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export default function WeightTrackerTable({
  bodyWeights,
  handleDeleteBodyWeight,
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    bodyWeights && (
      <Paper sx={{ width: "100%", overflow: "hidden", marginBottom: "24px" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                  }}
                >
                  Body Weight
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                  }}
                >
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bodyWeights
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row) => (
                  <TableRow tabIndex={-1} key={row._id}>
                    <TableCell align="left">{row.weight} Kg</TableCell>
                    <TableCell align="right">
                      {row.createdAt && convertDate(row.createdAt)}
                    </TableCell>
                    <TableCell align="right">
                      <div onClick={() => handleDeleteBodyWeight(row._id)}>
                        <RemoveCircleOutlineIcon />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={bodyWeights.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    )
  );
}
