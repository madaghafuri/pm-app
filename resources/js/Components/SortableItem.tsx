import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { PropsWithChildren, ReactNode } from "react";
import { CSS } from '@dnd-kit/utilities';

type SortableProps = {
    id: string | UniqueIdentifier;
}

export function SortableItem({id, children}: PropsWithChildren<SortableProps>) {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return <div {...attributes} style={style} {...listeners} ref={setNodeRef}>
        {children}
    </div>
}