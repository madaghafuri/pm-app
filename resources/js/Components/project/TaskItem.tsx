import { UniqueIdentifier } from "@dnd-kit/core";
import { SortableItem } from "../SortableItem";
import { Badge } from "./Badge";
import { cn } from "@/utils";

type Props = {
    id: UniqueIdentifier,
    name: string;
    className?: string;
}

export function TaskItem({ id, name, className }: Props) {
    return (
        <SortableItem id={id}>
            <div className={cn("rounded-md p-3 outline outline-offset-2 outline-1 outline-gray-400 bg-gray-800 w-56", className)}>
                <h1>{name}</h1>
                <Badge>Hello</Badge>
            </div>
        </SortableItem>
    )
}

type BlankTaskProps = {
    id: UniqueIdentifier
}

export function BlankTask({ id }: BlankTaskProps) {
    return (
        <SortableItem id={id}>
            <div className={cn("rounded-md p-3 w-56 bg-gray-500 text-gray-500")}>
                <h1>HAHA</h1>
                <h1>HAHA</h1>
            </div>
        </SortableItem>
    )
}