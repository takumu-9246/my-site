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
  searchString: string;
};

function convertToString(data: any[][]): string[][] {
  return data.map((subArray) => {
    return subArray.map((row) => row.toString());
  });
}

function DataFilter(data: string[][], searchString: string): string[][] {
  return data.filter((subArray) =>
    subArray.some((item) => item.includes(searchString))
  );
}

export const DynamicTable = (props: TableProps) => {
  // カラム部分を作成
  let tableColumns = props.columns.map((content, index) => {
    return <TableCell key={index}>{content}</TableCell>;
  });
  // stringに変換し、フィルタ実施
  let stringData = convertToString(props.data);
  let filteringData = props.searchString
    ? DataFilter(stringData, props.searchString)
    : stringData;
  console.log(filteringData);
  // データ部分を作成
  let tableData = filteringData.map((row, index) => {
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
