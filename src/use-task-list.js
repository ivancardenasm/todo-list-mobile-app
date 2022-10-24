import {useMemo, useState} from "react";
import {CALL_STATUS, TASK_STATUS} from "./constans";
import TaskService from "./task-service";

const TaskServiceInstance = new TaskService();

const useTaskList = ({toggleBool}) => {
    const [tasks, setTasks] = useState({data: [], count: 0, status: CALL_STATUS.IDLE});

    const getData = async () => {
        const callback = (data) => {
            setTasks({
                data: data,
                count: data.length,
                status: CALL_STATUS.RESOLVED,
            });
            toggleBool && toggleBool();
        }
        TaskServiceInstance.fetchData(callback);
    };
    useMemo(getData, []);

    const defaultSuccessCallback = (_transactionObj, _resultSet) => getData();

    const onToggleTask = (_id, newStatus) => TaskServiceInstance.updateStatus(_id, newStatus, defaultSuccessCallback);
    const onCreateTask = taskName => TaskServiceInstance.create(taskName, TASK_STATUS.IN_PROGRESS, defaultSuccessCallback);
    const onDeleteTask = _id => TaskServiceInstance.delete(_id, defaultSuccessCallback);

    return {
        data: tasks.data,
        onToggleTask,
        onCreateTask,
        onDeleteTask,
    };
};

export default useTaskList;
