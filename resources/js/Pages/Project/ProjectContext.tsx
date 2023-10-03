import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

type ProjectContextType = {
    statusList: any[];
    setStatusList: Dispatch<SetStateAction<any[]>>;
    taskList: any[];
    setTaskList: Dispatch<SetStateAction<any[]>>;
}

const ProjectContext = createContext<ProjectContextType>({
    statusList: [],
    setStatusList: () => {},
    taskList: [],
    setTaskList: () => {}
});

type Status = {
    id: string;
    title: string;
}

type Task = {
    id: string;
    title: string;
}

const StatusList: Status[] = [
    {
        id: '1',
        title: 'To Do'
    },
    {
        id: '2',
        title: 'Doing'
    },
    {
        id: '3',
        title: 'Done'
    },
];

const TaskList: Task[] = [
    {
        id: '1',
        title: 'Doing Things',
    },
    {
        id: '2',
        title: 'Doing another things'
    }
]

export function ProjectProvider({ children }: PropsWithChildren) {
    const [statusList, setStatusList] = useState<Status[]>(StatusList);
    const [taskList, setTaskList] = useState<Task[]>(TaskList);

    return (
        <ProjectContext.Provider value={{ statusList, setStatusList, taskList, setTaskList }}>
            {children}
        </ProjectContext.Provider>
    )
}

export function useProjectContext() {
    const context = useContext(ProjectContext);
    if (!context) throw new Error('useProjectContext must be used within a ProjectProvider');

    return context;
}