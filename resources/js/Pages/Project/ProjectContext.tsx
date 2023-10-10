import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

type ProjectContextType = {
    statusList: Status[];
    setStatusList: Dispatch<SetStateAction<Status[]>>;
    taskList: Task[];
    setTaskList: Dispatch<SetStateAction<Task[]>>;
}

const ProjectContext = createContext<ProjectContextType>({
    statusList: [],
    setStatusList: () => {},
    taskList: [],
    setTaskList: () => {}
});

export type Status = {
    id: string;
    title: string;
}

export type Task = {
    id: string;
    title: string;
}

const StatusList: Status[] = [
    {
        id: '02333776-a7a9-4281-9c12-a1317f3fd73b',
        title: 'To Do'
    },
    {
        id: 'e1844a83-69f4-4bf0-b6c9-8e6854153c2f',
        title: 'Doing'
    },
    {
        id: 'd6f10d70-45cb-4a64-9821-d629b72c1061',
        title: 'Done'
    },
];

const TaskList: Task[] = [
    {
        id: 'e0acf7f4-4e45-4c4e-bcef-833a219d4fd9',
        title: 'Doing Things',
    },
    {
        id: 'f80d4b2a-ae65-458e-878e-4a305c0f7f00',
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