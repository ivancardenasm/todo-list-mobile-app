import {useMemo, useState} from "react";
import {CALL_STATUS, TASK_STATUS} from "./constans";

const INITIAL_DATA = [
    {
        _id: 0,
        name: "Task 00: The first task",
        status: TASK_STATUS.IN_PROGRESS,
    },
    {
        _id: 1,
        name: "Task 01: The second task",
        status: TASK_STATUS.IN_PROGRESS,
    },
    {
        _id: 2,
        name: "Task 02: The third task",
        status: TASK_STATUS.IN_PROGRESS,
    },
    {
        _id: 3,
        name: "Task 03: The fourth task",
        status: TASK_STATUS.IN_PROGRESS,
    },
    {
        _id: 4,
        name: "Task 04: The fifth task",
        status: TASK_STATUS.IN_PROGRESS,
    },
];

const useTaskList = ({toggleBool}) => {
    const [tasks, setTasks] = useState({data: [], count: 0, status: CALL_STATUS.IDLE});

    const getData = async () => {

        setTasks({
            data: INITIAL_DATA,
            count: INITIAL_DATA.length,
            status: CALL_STATUS.RESOLVED,
        });
    };
    useMemo(getData, []);

    const onToggleTask = (id) => {
        const taskList = tasks.data;
        const task = taskList.find(task => task._id === id);
        task.status = task.status === TASK_STATUS.COMPLETED ? TASK_STATUS.IN_PROGRESS : TASK_STATUS.COMPLETED;
        setTasks({...task, data: taskList});
        toggleBool && toggleBool();
    };
    const onCreateTask = async (taskName) => {
        const newTask = {
            _id: tasks.data.length,
            name: taskName,
            status: TASK_STATUS.IN_PROGRESS,
        };

        setTasks({...tasks, data: [...tasks.data, newTask]});
    };
    const onDeleteTask = (id) => setTasks({...tasks, data: tasks.data.filter(task => task._id !== id)});

    return {
        data: tasks.data,
        onToggleTask,
        onCreateTask,
        onDeleteTask,
    };
};

export default useTaskList;
