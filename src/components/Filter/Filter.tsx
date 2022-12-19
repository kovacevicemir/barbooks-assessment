import React, { useContext } from "react";
import { filterType } from "./types";
import Select from "react-select";
import { FiltersContext } from "../../context/FiltersContext";
import styles from "./filter.module.css";

interface IFilterProps {
  type: filterType;
  filterItems?: object[];
  isMulti?: boolean;
  label: string;
}

const Filter: React.FC<IFilterProps> = ({
  type,
  filterItems,
  isMulti,
  label,
}) => {
  //@ts-ignore
  const { filters, setFilters } = useContext(FiltersContext);
  const onChangeHandler = (
    type: filterType,
    e: { value: string } | Array<object>
  ) => {
    switch (type) {
      case "platform":
        setFilters({ ...filters, platform: e });
        break;
      case "category":
        console.log(e);
        setFilters({
          ...filters,
          //@ts-ignore
          category: e.map((e) => {
            return e.value;
          }),
        });
        break;
      case "order":
        setFilters({ ...filters, order: e });
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <span style={{ color: "whitesmoke", fontSize: "12px" }}>{label}</span>
      <Select
        placeholder={type}
        options={filterItems}
        isMulti={isMulti}
        onChange={(e) => {
          //@ts-ignore
          isMulti ? onChangeHandler(type, e) : onChangeHandler(type, e.value);
        }}
        className={styles.select}
      />
    </div>
  );
};

export default Filter;
