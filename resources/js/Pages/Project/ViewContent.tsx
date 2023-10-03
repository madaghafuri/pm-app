import PrimaryButton from "@/Components/PrimaryButton";
import { StatusBoard } from "@/Components/project/StatusBoard";
import { useState } from "react"
import { useProjectContext } from "./ProjectContext";

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
            newStatusList.push('undefined');
            return newStatusList;
        })
    }

    return (
        <div className="text-gray-400 bg-gray-800 w-full p-6">
            Board View Content
            <div className="flex flex-row gap-6">
                {statusList.map((val, index) => {
                    return (
                        <StatusBoard key={index} status={val} taskList={taskList} />
                    )
                })}
                <PrimaryButton onClick={handleNewStatusBoard}>
                    Add Section
                </PrimaryButton>
            </div>
        </div>
    )
}