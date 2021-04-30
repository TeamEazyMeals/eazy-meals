


const Sort = (props) => {
    const {handleSort} = props;
  return (
    <div>
      <select defaultValue="sort" onChange={handleSort}>
        <option value="sort" disabled>
          Sort Recipes
        </option>
        <option value="shortest time">shortest time</option>
        <option value="longest time">longest time</option>
        <option value="alphabetically">alphabetically</option>
      </select>
    </div>
  );
 
};

export default Sort;
