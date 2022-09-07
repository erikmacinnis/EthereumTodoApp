import React, {useState} from 'react';
import web3 from '../ethereum/web3';
import todo from '../ethereum/todo';
import { Button, Form } from 'semantic-ui-react';
import Loader from './InlineLoader';

const CreateTask = ({setCount, count, setResetTasks, resetTasks}) => {

    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const createTask = async(event) => {
        event.preventDefault();
        setLoading(true);
        setCount(parseInt(count) + 1);
        const accounts = await web3.eth.getAccounts();
        try {
            await todo.methods.createTask(content).send({from: accounts[0]});
        } catch(err) {
            setLoading(false);
        }
        setLoading(false);
        setResetTasks(!resetTasks);
    }

    if (loading) {
        return <Loader/>;
    }

    return (
        <Form className="createTask">
            <Form.Field>
                <label style={{fontSize: "15px", Color: "#181818"}}>Create a Task</label>
                <input 
                value = {content}
                placeholder='I will brush my teeth' 
                onChange={event => setContent(event.target.value)}/>
            </Form.Field>
            <Button 
            className="ui black button"
            type='submit'
            onClick={(event) => createTask(event)}
            >Create</Button>
            <h5>A task may take up to 30 seconds to be added or removed</h5>
        </Form>
    )
}

export default CreateTask;