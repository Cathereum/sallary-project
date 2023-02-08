import "./AppFilter.css";

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        Все сотрудники
      </button>
      <button className="btn" type="button">
        На повышение
      </button>
      <button className="btn" type="button">
        З/П больше 1000$
      </button>
    </div>
  );
};

export default AppFilter;
