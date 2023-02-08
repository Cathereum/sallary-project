import "./EmployeesList.css";
import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";

const EmployeesList = ({ data }) => {
  const allEmployees = data.map((item) => (
    <EmployeesListItem
      key={item.id}
      name={item.name}
      sallary={item.sallary}
      increase={item.increase}
    />
  ));
  return <ul>{allEmployees}</ul>;
};

export default EmployeesList;
