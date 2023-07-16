export type TaskStatus = 'progress' | 'success'
export type TaskFilter = 'all' | TaskStatus

export interface ITask {
    id: number,
    content: string,
    status: TaskStatus
}
