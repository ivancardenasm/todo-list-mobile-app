import useTaskList from "./use-task-list";
import TaskFormCreate from "./task-form-create";
import TaskList from "./task-list";

const TodoListApp = () => {
    const {data, onToggleTask, onCreateTask, onDeleteTask} = useTaskList();

    return <>
        <TaskFormCreate onCreate={onCreateTask} />
        <TaskList data={data} onToggleTask={onToggleTask} onDeleteTask={onDeleteTask} />
    </>;
};

export default TodoListApp;