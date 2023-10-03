import { UniqueIdentifier } from "@dnd-kit/core";
import { SortableItem } from "../SortableItem";

type Props = {
    id: UniqueIdentifier,
    name: string;
}

export function TaskItem({ id, name }: Props) {
    return (
        <SortableItem id={id}>
            <div className="rounded-md p-3 outline outline-offset-2 outline-1 outline-gray-400">
                <h1>{name}</h1>
            </div>
        </SortableItem>
    )
}