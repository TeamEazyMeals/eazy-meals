const Sort = (props) => {
  const { handleSort } = props;
  return (
    <div>
      <select defaultValue="sort" onChange={handleSort}>
        <option value="sort" disabled>
          Sort Recipes
        </option>
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>
        <option value="shortest time">shortest time</option>
        <option value="longest time">longest time</option>
        <option value="least steps">least steps</option>
        <option value="most steps">most steps</option>
      </select>
    </div>
  );
};

export default Sort;
