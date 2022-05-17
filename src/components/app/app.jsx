import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'; //тк webpack


function App() {
    const data = [
        {name: 'John Brown', salary: 1000, increase: false, id: 1},
        {name: 'David Smith', salary: 2200, increase: true, id: 2},
        {name: 'Michael Clark', salary: 3000, increase: false, id: 3},
    ];

    return (
        <div className='app'>
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;