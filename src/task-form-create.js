import {Card, Chip, Input} from "@rneui/base";
import {useRef, useState} from "react";

const TaskFormCreate = ({onCreate}) => {
    const [taskName, setTaskName] = useState('');
    const inputRef = useRef();

    return <Card style={{ marginTop: 20, padding: 10, flex: 1 }}>
        <Input ref={inputRef}
               placeholder='Write a new task'
               leftIcon={{type: 'font-awesome', name: 'list'}}
               value={taskName}
               onChangeText={inputValue => setTaskName(inputValue)} />
        <Chip title="Create" onPress={() => {
            onCreate(taskName);
            inputRef.current.clear();
        }}/>
    </Card>;
};

export default TaskFormCreate;