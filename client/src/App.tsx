import { useState } from "react";
import { Sheets } from "./functions/Sheets";
import DataTable from "./components/DataTable";

function App() {
  const [count, setCount] = useState([""]);
  const ss = new Sheets("1Ak4WKTiBghdClIAyWsofq3JEhRimsuWtwyDrKXxFUhQ", "日記");

  async function getSheet() {
    setCount(await ss.getAllValuesBySheet());
    console.log(count);
  }

  return (
    <>
      <div>
        <button onClick={() => getSheet()}>count is {count}</button>
      </div>
      <div>
        <DataTable />
      </div>
    </>
  );
}

export default App;
