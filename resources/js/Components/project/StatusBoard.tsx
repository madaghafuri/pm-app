import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { TaskItem } from "./TaskItem";
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, UniqueIdentifier } from "@dnd-kit/core";
import { useState } from "react";

type StatusBoardProps = {
    taskList: any[];
    status: string;
}

export function StatusBoard({ taskList, status }: StatusBoardProps) {
    const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

    const handleDragStart = ({ active }: DragStartEvent) => {
        setActiveId(active.id);
        console.log(active);
    }

    const handleDragEnd = ({ active, over }: DragEndEvent) => {
        if (active.id !== over?.id) {
            const oldIndex = taskList.indexOf(active.id);
            const newIndex = taskList.indexOf(over?.id);

            return arrayMove(taskList, oldIndex, newIndex);
        }
    }

    return <div>
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
            <h1 className="select-none">{status}</h1>
            <SortableContext items={taskList} strategy={verticalListSortingStrategy}>
                <div className="flex flex-col gap-2">
                    {taskList.map((value, index) => {
                        return (
                            <TaskItem key={index} id={index} name={value} />
                        )
                    })}
                </div>
            </SortableContext>
            <DragOverlay>
                <TaskItem id={activeId as UniqueIdentifier} name="Dragging" />
            </DragOverlay>
        </DndContext>
    </div>
}