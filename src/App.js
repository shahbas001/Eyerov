import React, { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Table from "./components/table";
import Spinner from "./components/spinner";

function App() {
  const [loader, setLoader] = useState(false);
  const [tableData, setTableData] = useState([]);

  const fetchData = () => {
    setLoader(true);
    console.log("testing");
    fetch(
      "https://eyerov-hiring-tasks-server-ujyffp74ba-el.a.run.app/api/damage-list"
    )
      .then(res => res.json())
      .then(response => {
        console.log(response);
        setTableData(response);
        setLoader(false);
      });
  };

  
  return (
    <div className="App">
      <h1 className="head">Damages Found</h1>
      {tableData.length > 0 ? (
        <Table tableData={tableData} />
      ) : (
        <>
          <Button fetchData={fetchData} btntext={"Get Damage Details"} />
          <br />
          
          {loader ? <Spinner /> : null}
        </>
      )}
    </div>
  );
}

export default App;
