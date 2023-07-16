import {TaskStatus} from "../../models/task";

export interface TaskProps {
    id: number,
    content: string,
    status: 'progress' | 'success',
    onChangeStatus?: (id: number, status: TaskStatus) => void,
    onRemove?: (id: number) => void
}