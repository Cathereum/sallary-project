import "./EmployeesListItem.css";

const EmployeesListItem = ({ name, sallary, increase }) => {
  return (
    <li className={increase ? "list-group-item increase" : "list-group-item"}>
      <span>{name}</span>
      <div>{sallary + "$"}</div>

      <div className="btn-wrapper">
        <button type="button">cookie</button>
        <button type="button">trash</button>
        <button type="button">star</button>
      </div>
    </li>
  );
};

export default EmployeesListItem;
