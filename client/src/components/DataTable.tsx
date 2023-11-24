import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type TableProps = {
  columns: string[];
  data: string[][];
};

export const DynamicTable = (props: TableProps) => {
  let tableColumns = props.columns.map((content, index) => {
    return <TableCell key={index}>{content}</TableCell>;
  });
  let tableData = props.data.map((row, index) => {
    return (
      <TableRow key={index}>
        {row.map((content) => {
          return <TableCell>{content}</TableCell>;
        })}
      </TableRow>
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>{tableColumns}</TableRow>
        </TableHead>
        <TableBody>{tableData}</TableBody>
      </Table>
    </TableContainer>
  );
};
