import React from "react";
import useRecipeCategories from "./useRecipeCatergories";
import {Select,MenuItem} from '@material-ui/core'
import { capitalize } from "lodash";

export const RecipeCategories = () => {
  const { recipes, filterTags } = useRecipeCategories();

  return ( 
  <div>
    <Select fullWidth variant='outlined' value ='any'>
      <MenuItem><em>any</em></MenuItem>
      {filterTags.map(({id,name})=><MenuItem key={id} value ={id}>{capitalize(name)}</MenuItem>)}
      
    </Select>

  </div>
  );
};

export default RecipeCategories;
