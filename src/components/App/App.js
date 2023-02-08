import "./App.css";
import AppInfo from "../AppInfo/AppInfo";
import SearchPanel from "../SearchPanel/SearchPanel";
import AppFilter from "../AppFilter/AppFilter";
import EmployeesList from "../EmployeesList/EmployeesList";
import EmployeesAddForm from "../EmployeesAddForm/EmployeesAddForm";

const App = () => {
  const data = [
    { name: "John B.", sallary: 1000, increase: true, id: 1 },
    { name: "Marta V.", sallary: 500, increase: false, id: 2 },
    { name: "Greg S.", sallary: 40000, increase: false, id: 3 },
  ];
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
};

export default App;
