import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const FilterAndSearch = ({ filter, setFilter }) => {
  return (
    <div className="d-flex justify-content-between my-2">
      <MyInput
        placeholder="Search..."
        className="form-control"
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(e) => setFilter({ ...filter, sort: e })}
        defaultValue={"Sorted by"}
        option={[
          { value: "title", name: "Programming" },
          { value: "stack", name: "Jobs" },
        ]}
      />
    </div>
  );
};

export default FilterAndSearch;
