import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { BlankTask, TaskItem } from "./TaskItem";
import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent, UniqueIdentifier, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import { Status, Task, useProjectContext } from "@/Pages/Project/ProjectContext";
import { MoreHorizontal, Plus } from "lucide-react";
import SecondaryButton from "../SecondaryButton";

type StatusBoardProps = {
    taskList: Task[];
    status: Status;
}

export function StatusBoard({ taskList, status }: StatusBoardProps) {
    const { setTaskList, } = useProjectContext();

    const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
    const activeTask = activeId ? taskList.find((value) => value.id === activeId) : null;

    const handleDragStart = ({ active }: DragStartEvent) => {
        setActiveId(active.id);
    }

    const handleDragEnd = ({ active, over }: DragEndEvent) => {
        if (active.id !== over?.id) {
            const oldIndex = taskList.findIndex((task) => task.id === active.id);
            const newIndex = taskList.findIndex((task) => task.id === over?.id);
            
            setTaskList((prevTaskList) => arrayMove(prevTaskList, oldIndex, newIndex));
        }
        setActiveId(null);
    }

    const handleDragOver = ({ active, over }: DragOverEvent) => {
        console.log({ active, over });
    }

    useDndMonitor({ onDragStart: handleDragStart, onDragEnd: handleDragEnd, onDragOver: handleDragOver })

    return (
            <div className="p-4 rounded-md hover:outline hover:outline-1 hover:outline-gray-400">
                <div className="flex mb-5 justify-between items-center">
                    <h1 className="select-none font-bold text-xl">{status.title}</h1>
                    <div className="flex gap-1">
                        <SecondaryButton spacing="xs" className="border-none">
                            <Plus className="h-4" />
                        </SecondaryButton>
                        <SecondaryButton spacing="xs" className="border-none">
                            <MoreHorizontal className="h-4" />
                        </SecondaryButton>
                    </div>
                </div>
                <SortableContext items={taskList} strategy={verticalListSortingStrategy}>
                    <div className="grid grid-cols-1 gap-2">
                        {taskList.map((value) => {
                            if (value.id === activeId) return (
                                <BlankTask key={value.id} id={value.id} />
                            )

                            return (
                                <TaskItem key={value.id} id={value.id} name={value.title} />
                            )
                        })}
                    </div>
                </SortableContext>
                <DragOverlay>
                    {activeId ? <TaskItem id={activeId as UniqueIdentifier} name={activeTask?.title as string} className="outline outline-purple-500 outline-offset-0" /> : null}
                </DragOverlay>
            </div>
    )
}