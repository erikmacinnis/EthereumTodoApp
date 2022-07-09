import React, {useEffect, useState} from 'react';
import todo from './ethereum/todo.js';
import DisplayTasks from './components/DisplayTasks';
import CreateTask from './components/CreateTask.js';
import DropDownList from './components/DropDown.js';
import Loader from './components/Loader'
import './css/stylesheet.css';


const App = () => {

    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [completed, setCompleted] = useState([]);
    const [resetTasks, setResetTasks] = useState(false);

    useEffect(async() => {
        const initialCount = await todo.methods.count().call();
        setCount(initialCount);
        setLoading(false);
    }, [])

    if (!loading){
        return (
            <div className="ui container">
                <DisplayTasks resetTasks={resetTasks} count={count} completed={completed} setCompleted={setCompleted}/>
                <CreateTask resetTasks={resetTasks} setResetTasks={setResetTasks} setCount={setCount} count={count}/>
                <br></br>
                <DropDownList completed={completed} />
            </div>
        )
    }

    return(
        <Loader/>
    )
}

export default App;