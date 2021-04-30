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
      </select>
    </div>
  );
};

export default Sort;
