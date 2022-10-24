import {Button, CheckBox, ListItem} from "@rneui/base";
import {Text} from "react-native";
import {TASK_STATUS} from "./constans";

const Task = ({data, onToggleTask, onDelete}) => {
    const _onSwipeLeft = (_reset) => <Button onPress={() => onDelete(data._id)}
                                             icon={{name: 'delete', color: 'white'}}
                                             buttonStyle={{minHeight: '100%', backgroundColor: 'red'}} />;

    const _onToggle = () => {
        const newStatus = data.status === TASK_STATUS.COMPLETED ? TASK_STATUS.IN_PROGRESS : TASK_STATUS.COMPLETED;
        onToggleTask(data._id, newStatus);
    };

    const textStyle = data.status === TASK_STATUS.COMPLETED ? {textDecorationLine: 'line-through'} : null;

    return <ListItem.Swipeable rightContent={_onSwipeLeft} bottomDivider>
        <CheckBox checked={data.status === TASK_STATUS.COMPLETED} onPress={_onToggle}/>
        <Text style={textStyle}>
            {data.name}
        </Text>
    </ListItem.Swipeable>
};

export default Task;