import React from "react";
//import { useState, useEffect } from "react";
//import { useParams } from "react-router";
import DataTable from "react-data-table-component";
//import DeleteIcon from "@material-ui/icons/Delete";

const data = [
  { id: 1, Type: "Type" },
  { id: 2, Sunday: "Sunday" },
  { id: 2, Sunday: "Monday" },
  { id: 2, Sunday: "Tuesday" },
  { id: 2, Sunday: "Wednesday" },
  { id: 2, Sunday: "Thursday" },
  { id: 2, Sunday: "Friday" },
  { id: 2, Sunday: "Saturday" },
];
const columns = [
  {
    name: "Type",
  },
  { name: "Sunday" },
  { name: "Monday" },
  { name: "Tuesday" },
  { name: "Wednesday" },
  { name: "Thursday" },
  { name: "Friday" },
  { name: "Saturday" },
];

const handleChange = (state) => {
  console.log("Selected Rows: ", state.selectedRows);
};
// const handleDeleteItem = () => onDeleteItem();

const AddMealPlanTypeTable = () => {
  
 
  return (
    <>
      <DataTable
        title="Meal Table"
        columns={columns}
        data={data}
        
        selectableRows //add for checkbox selection
        Clicked
        onSelectedRowsChange={handleChange}
        //onChange={changeMealPlanTable}
      />
      {/* <DeleteIcon onClick={handleDeleteItem}>
        <DeleteIcon />
      </DeleteIcon> */}
    </>
  );
};

export default AddMealPlanTypeTable;
