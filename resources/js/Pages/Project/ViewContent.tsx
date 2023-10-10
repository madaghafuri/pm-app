import { DndContext } from "@dnd-kit/core";
import { useProjectContext } from "./ProjectContext";
import { StatusBoard } from "@/Components/project/StatusBoard";

export function ListView() {
    return (
        <div className="text-gray-400">
            List View Content
        </div>
    )
}

export function OverView() {
    return (
        <div className="text-gray-400 bg-gray-800 w-full">
            Overview Content
        </div>
    )
}

export function TimelineView() {
    return (
        <div className="text-gray-400">
            Timeline View Content
        </div>
    )
}

export function BoardView() {
    const { statusList, setStatusList, taskList } = useProjectContext();

    const handleNewStatusBoard = () => {
        setStatusList((prev) => {
            const newStatusList = [...prev];
            newStatusList.push({ id: 'kljasdljaiwdj', title: "Default" });
            return newStatusList;
        })
    }

    return (
        <div className="text-gray-400 bg-gray-800 w-full p-6">
            <div className="flex flex-row">
                <DndContext>
                    {statusList.map((val, index) => 
                        (
                            <StatusBoard key={index} status={val} taskList={taskList} />
                        )
                    )}
                </DndContext>
            </div>
        </div>
    )
}