import React from "react";
import DataTable from "react-data-table-component";
import { parse } from "query-string";
import { Checkbox, IconButton} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";

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

const AddMealPlanTypeTable = () => {
  const query = parse(window.location.search);
  const ExpandableComponent = [
    { name: `${query.dayValue}` },
    { name: `${query.mealTypeValue}` },
    { name: `${query.mealSelectValue}` },
  ];
  console.log(ExpandableComponent);

  // const rows = [{name: `${query.dayValue}`},
  // {name: `${query.mealTypeValue}`},
  // {name: `${query.mealSelectValue}`}];

  

  const handleChange = (state) => {
    console.log("Selected Rows: ", state.selectedRows);
  
  }
  // const Task = (props) => {
  //   const { onDeleteItem } = props;
  //   //  const handleDeleteItem = () => onDeleteItem()}

  // const handleDeleteItem = () => onDeleteItem();

  return (
    <>
      {/* <div> {dayValue} {mealTypeValue} {mealSelectValue} </div> */}
      <DataTable
        title="Meal Table"
        // columns={columns}
        data={data}
        // columns={rows}
        selectableRows //add for checkbox selection
        Clicked
        onSelectedRowsChange={handleChange}
        onChange
        columns ={ExpandableComponent}
        // onClick={handleDeleteItem}
       
      />
            
      {/* <DeleteIcon onClick={handleDeleteItem}>
        <DeleteIcon />
      </DeleteIcon> */}
    </>
  );
};

export default AddMealPlanTypeTable;
