import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps, Project, Workspace } from "@/types";
import { Fragment, useState } from "react";
import { BoardView, ListView, OverView, TimelineView } from "./ViewContent";
import SecondaryButton from "@/Components/SecondaryButton";
import { ProjectProvider } from "./ProjectContext";

const View = {
    overview: <OverView />,
    list: <ListView />,
    board: <BoardView />,
    timeline: <TimelineView />
}

const list: Array<keyof typeof View> = ['overview', 'list', 'board', 'timeline'];

export default function Show({ auth, projectList, project }: PageProps<{ project: Project, workspace: Workspace, projectList: Project[] }>) {
    const [selectedView, setSelectedView] = useState<keyof typeof View>('overview');


    return (
        <ProjectProvider>

            <Authenticated user={auth.user} projectList={projectList} workspaceList={[]}>
                <div className="text-gray-400 w-full">
                    <section className="flex flex-row px-10 py-6">
                        <div>
                            <h1 className="font-semibold text-2xl">
                                {project.name}
                            </h1>
                            <div className="flex flex-row gap-2">
                                {list.map((val, index) => {
                                    return (
                                        <ViewNav key={index} title={val} className={selectedView === val ? "border-b-2" : ""} selected={selectedView === val} onClick={() => {
                                            setSelectedView(val as keyof typeof View);
                                        }}></ViewNav>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            Avatar, Share BUtton
                        </div>
                        <div>
                            Filter Sort Hide
                        </div>
                    </section>
                    <section>
                        {View[selectedView]}
                    </section>
                </div>
            </Authenticated>
        </ProjectProvider>
    )
}

type ViewNavProps = {
    title: string;
    className?: string;
    onClick?: () => void;
    selected: boolean;
}

export function ViewNav({title, className = '', onClick = () => {}, selected = false}: ViewNavProps) {
    const handleClick = () => {
        onClick()
    }

    return (
        <div className={`bg-inherit text-gray-400 select-none hover:bg-gray-50 dark:hover:bg-gray-700 p-1 rounded-t-md hover:border-b-2 ` + className} onClick={handleClick}>
            {title.toUpperCase()}
        </div>
    )
}