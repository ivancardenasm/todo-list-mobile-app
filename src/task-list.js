import {FlashList} from "@shopify/flash-list";
import Task from "./task";
import {ESTIMATED_ITEM_HEIGHT} from "./constans";

const TaskList = ({data, onToggleTask, onDeleteTask}) => {

    const onRenderItem = ({item}) => <Task key={item._id} data={item} onToggleTask={onToggleTask} onDelete={onDeleteTask} />;

    return <FlashList data={data}
                      keyExtractor={task => task._id}
                      renderItem={onRenderItem}
                      estimatedItemSize={ESTIMATED_ITEM_HEIGHT}
    />;
};

export default TaskList;