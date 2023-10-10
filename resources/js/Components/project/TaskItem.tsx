import { UniqueIdentifier } from "@dnd-kit/core";
import { SortableItem } from "../SortableItem";
import { Badge } from "./Badge";

type Props = {
    id: UniqueIdentifier,
    name: string;
}

export function TaskItem({ id, name }: Props) {
    return (
        <SortableItem id={id}>
            <div className="rounded-md p-3 outline outline-offset-2 outline-1 outline-gray-400 bg-gray-800">
                <h1>{name}</h1>
                <Badge>Hello</Badge>
            </div>
        </SortableItem>
    )
}