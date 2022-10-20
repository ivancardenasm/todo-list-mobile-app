import {useState} from "react";
import useTaskList from "./use-task-list";
import TaskFormCreate from "./task-form-create";
import TaskList from "./task-list";

const TodoListApp = () => {
    const [bool, setBool] = useState(false);
    const toggleBool = () => setBool(!bool);
    const {data, onToggleTask, onCreateTask, onDeleteTask} = useTaskList({toggleBool});

    return <>
        <TaskFormCreate onCreate={onCreateTask} />
        <TaskList data={data} bool={bool} onToggleTask={onToggleTask} onDeleteTask={onDeleteTask} />
    </>;
};

export default TodoListApp;