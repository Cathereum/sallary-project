import "./EmployeesAddForm.css";

const EmployeesAddForm = () => {
  return (
    <div className="add-form-wrapper">
      <h3>Добавьте нового сотрудника</h3>
      <form>
        <input type="text" placeholder="Имя сотрудника" />
        <input type="text" placeholder="З/П Сотрудника" />
        <button>Добавить</button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
