import './employees-list-item.css';

//для каждого отдельного сотрудника
const EmployeesListItem = ({name, salary, increase, id}) => {
    let classNames = "list-group-item d-flex justify-content-between";

    if (increase) {
        classNames += ' increase'
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i> 
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;

//иконка печеньки - для назначения премии, корзины - для удаления сотрудника, звездочки - сотрудник на повышение