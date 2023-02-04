import React from "react";
import DataTable from "react-data-table-component";
import "../styles/table.css";

const data = [
  {
    id: 1,
    anho: "2020",
    saldoIni: "1000",
    aportacion: "2000",
    rendimiento: "3000",
    saldoFin: "4000",
  },
  {
    id: 2,
    anho: "2021",
    saldoIni: "1000",
    aportacion: "2000",
    rendimiento: "3000",
    saldoFin: "4000",
  },
  {
    id: 3,
    anho: "2022",
    saldoIni: "1000",
    aportacion: "2000",
    rendimiento: "3000",
    saldoFin: "4000",
  },
  {
    id: 4,
    anho: "2023",
    saldoIni: "1000",
    aportacion: "2000",
    rendimiento: "3000",
    saldoFin: "4000",
  },
];

const columns = [
  {
    name: "Año",
    selector: (row) => row.anho,
    center: true,
  },
  {
    name: "Saldo Inicial",
    selector: (row) => row.saldoIni,
    center: true,
  },
  {
    name: "Aportación",
    selector: (row) => row.aportacion,
    center: true,
  },
  {
    name: "Rendimiento",
    selector: (row) => row.rendimiento,
    center: true,
  },
  {
    name: "Saldo Final",
    selector: (row) => row.saldoFin,
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

const Table = () => {
  return (
    <div className="table">
      <DataTable
        title="Resultado de Inversiones"
        columns={columns}
        data={data}
        customStyles={customizing}
      />
    </div>
  );
};

export default Table;
