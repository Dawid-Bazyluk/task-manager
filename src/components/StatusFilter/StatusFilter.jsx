import { useSelector } from "react-redux";
import { Button } from "../Button/Button";
import css from "./StatusFilter.module.scss";
import { getStatusFilter } from "../../redux/selectors";
import { startTransition } from "react";
import { statusFilters } from "../../redux/constans";

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);
  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
