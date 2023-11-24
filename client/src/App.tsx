import { useState, useEffect } from "react";
import { Sheets } from "./functions/Sheets";
import { DynamicTable } from "./components/DataTable";
import { convertToDictionary } from "./functions/utils";

// interface Dict {
//   [key: string]: string;
// }

function App() {
  const [count, setCount] = useState<string[][]>();
  const [tablecolumns, setTablecolumns] = useState<string[]>([]);
  // const [tabledata, setTabledata] = useState<Dict[]>([]);
  let output: { [k: string]: string }[] = [];
  const ss = new Sheets("1Ak4WKTiBghdClIAyWsofq3JEhRimsuWtwyDrKXxFUhQ", "日記");

  async function getSheet() {
    setCount(await ss.getAllValuesBySheet());
  }

  useEffect(() => {
    if (count) {
      output = convertToDictionary(count as string[][]);
      setTablecolumns(Object.keys(output[0]));
      // setTabledata(output.slice(1));
    }
  }, [count]);

  return (
    <>
      <div>
        <button onClick={() => getSheet()}>count is {count}</button>
      </div>
      <div>
        <DynamicTable columns={tablecolumns} />
      </div>
    </>
  );
}

export default App;
