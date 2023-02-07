import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../styles/table.css";

const columns = [
  {
    name: "Año",
    selector: (row) => row.year,
    center: true,
  },
  {
    name: "Saldo Inicial",
    selector: (row) => row.initialBalance,
    center: true,
  },
  {
    name: "Aportación",
    selector: (row) => row.contribution,
    center: true,
  },
  {
    name: "Rendimiento",
    selector: (row) => row.yearlyInvestmentReturn,
    center: true,
  },
  {
    name: "Saldo Final",
    selector: (row) => row.finalBalance,
    center: true,
  },
];

const customizing = {
  headCells: {
    style: {
      fontSize: "14px",
      fontWeight: "bold",
    },
  },
};

const Table = ({ dataParent }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (dataParent) {
      setTableData(dataParent);
    }
  }, [dataParent]);

  return (
    <div className="table">
      <DataTable
        title="Resultado de Inversiones"
        columns={columns}
        data={tableData}
        customStyles={customizing}
      />
    </div>
  );
};

export default Table;
