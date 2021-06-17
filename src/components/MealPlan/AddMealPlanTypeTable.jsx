import React from "react";
//import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


  
  const columns = [
    {field: 'id', headerName: 'ID'},
    { field: 'id', headerName: 'Sunday'},
    { field: 'id', headerName: 'Monday'},
    { field: 'id', headerName: 'Tuesday'},
    { field: 'id', headerName: 'Wednesday'},
    { field: 'id', headerName: 'Thursday'},
    { field: 'id', headerName: 'Friday'},
    { field: 'id', headerName: 'Saturday'},
  ];

  // const rows = [
  //   { id: Breakfast},
  //   { id: Lunch},     
  //   { id: Dinner},
  //   { id: Snack},,
    
  // ];
  
  const AddMealPlanTypeTable = ()  => {
  
    return (
      <TableContainer>
        <>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">Meal Type</TableCell>
              <TableCell align="right">Sunday</TableCell>
              <TableCell align="right">Monday</TableCell>
              <TableCell align="right">Tuesday</TableCell>
              <TableCell align="right">Wednesday</TableCell>
              <TableCell align="right">Thursday</TableCell>
              <TableCell align="right">Friday</TableCell>
              <TableCell align="right">Saturday</TableCell>

            </TableRow>
          </TableHead>

          <TableBody>
            
            {/* {rows.map((row) => ( */}
              <>
              <TableRow>
                <TableCell  />
                <TableCell align="left">Breakfast</TableCell>
                
              </TableRow>

             <TableRow>        
                 <TableCell component="th" scope="row" />
                <TableCell align="left">Lunch</TableCell>

            </TableRow>

            <TableRow>        
                 <TableCell component="th" scope="row" />
                <TableCell align="left">Dinner</TableCell>

            </TableRow>
            <TableRow>        
                 <TableCell component="th" scope="row" />
                <TableCell align="left">Snack</TableCell>

            </TableRow>
              
              </>
            {/* ))} */}
            
          </TableBody>
          
        </Table>
        </>
      </TableContainer>
    );
  };


export default AddMealPlanTypeTable;
