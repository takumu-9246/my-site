import { useState, useEffect } from "react";
import { Sheets } from "./functions/Sheets";
import { DynamicTable } from "./components/DataTable";

function App() {
  const [spreaddata, setSpreadData] = useState<string[][]>([[]]);
  const [tablecolumns, setTablecolumns] = useState<string[]>([]);
  const [tabledata, setTabledata] = useState<string[][]>([[]]);
  const ss = new Sheets("1Ak4WKTiBghdClIAyWsofq3JEhRimsuWtwyDrKXxFUhQ", "日記");

  async function getSheet() {
    setSpreadData(await ss.getAllValuesBySheet());
  }

  useEffect(() => {
    if (spreaddata) {
      setTablecolumns(spreaddata[0]);
      setTabledata(spreaddata.slice(1));
    }
  }, [spreaddata]);

  return (
    <>
      <div>
        <button onClick={() => getSheet()}>get spreadsheet data</button>
      </div>
      <div>
        <DynamicTable
          columns={tablecolumns}
          data={tabledata}
          searchString="7"
        />
      </div>
    </>
  );
}

export default App;
