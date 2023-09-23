import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { PropsWithChildren, ReactNode } from "react";

type SortableProps = {
    id: string | UniqueIdentifier;
}

export function SortableItem({id, children}: PropsWithChildren<SortableProps>) {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({ id });

    return <div {...attributes} {...listeners} ref={setNodeRef}>
        {children}
    </div>
}