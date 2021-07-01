import React, { useState } from "react";
import { v4 as createId} from "uuid";
import { parse } from "query-string";
import styled from "styled-components";

const Cell = styled.td`
  border: 1px solid grey;
  width: ${100 / 7}%;
`;

const Table = styled.table`
  width: 100%;
`;

const columns = {
  mon: {
    title: "Monday",
    id: "mon",
  },
  tue: {
    title: "Tuesday",
    id: "tue",
  },
  wed: {
    title: "Wednesday",
    id: "wed",
  },
  thu: {
    title: "Thursday",
    id: "thu",
  },
  fri: {
    title: "Friday",
    id: "fri",
  },
  sat: {
    title: "Saturday",
    id: "sat",
  },
  sun: {
    title: "Sunday",
    id: "sun",
  },
};
/**
 * 
 * @typedef {'mon' | 'tue'| 'wed'| 'thu'| 'fri'| 'sat' | 'sun'} day
 *  
 */
/**
 * 
 * @typedef {'breakfast' | 'lunch' | 'snack' | 'dinner'} type
 */
/**
 * @typedef {object} slot
 * @property {string} id
 * @property {string} meal
 * @property {type} type
 * @property {day} day
 */
const useAddMealPlanTypeTable = (startingSlot) => {
  /**
   * @type {[slot[], (newSlots: slot[]) => void]}
   */
  const [slots, setSlots] = useState(!startingSlot ? [] : [{ id: createId(), startingSlot }]);

  /**
   * @param {string} id
   */
  const remove = (id) => setSlots(slots.filter(singleSlot => singleSlot.id !== id))
  /**
   * @param {slot} newSlot
   */
  const add = (newSlot) => setSlots([...slots, newSlot]);
  // const update = () => {};

  return {
    slots,
    remove,
    add
  };
};

 const { mealSelectValue, mealTypeValue, dayValue } = parse(window.location.search);
 /**
  * 
  * @returns {slot[]}
  */
 const createInitialSlot = () => {
   if (!dayValue || !mealTypeValue || !mealSelectValue) return []
   return[{
     id: createId(),
     dayValue,
     mealSelectValue,
     mealTypeValue,
   }]
 }
const AddMealPlanTypeTable = () => {
  const { slots } = useAddMealPlanTypeTable({mealSelectValue, mealTypeValue, dayValue});
  // const query = parse(window.location.search);
  const columnStructure = Object.values(columns).map((singleColumn) => {
    return{
      ...singleColumn,
      slots: slots.filter((slotFromState) => slotFromState.day === singleColumn.id)
      
    }
  })
  const maxColumnSlots = Math.max(...columnStructure.map(({ slots }) => slots.length))
  const emptyRowsArray = new Array(maxColumnSlots).fill(null).map((value, index) => index)
  
  return (
    <Table>
      <thead>
        <tr>
          {columnStructure.map(({ id, title}) => {
            return ( 
            <Cell key={id} as="th">{title}</Cell>
            );
          })}
         
        </tr>
      </thead>
      <tbody>
      {emptyRowsArray.map((number) => {
          return (
            <tr>
              {columnStructure.map(({id, title, slots}) => {
                const currentSlot = slots[number];
                const content = currentSlot ? `${currentSlot.meal} (${currentSlot.type})` : '';
                return (
                  <Cell key={`${number}-${id}`}>{content})</Cell>)}
                )
              }
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
};

export default AddMealPlanTypeTable;
