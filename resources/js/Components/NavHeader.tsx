import { ReactNode } from "react";
import Dropdown from "./Dropdown";
import SecondaryButton from "./SecondaryButton";
import { MoreHorizontal, Plus } from "lucide-react";

type Props = {
    name: string;
    icon1?: ReactNode;
    icon2?: ReactNode;
}

export default function NavHeader({ name, icon1, icon2 }: Props) {
    return <div className="flex flex-row gap-1 items-center px-4 py-2">
        <h1 className="select-none font-semibold">{name}</h1>
        <Dropdown>
            <Dropdown.Trigger>
                {icon1 ? <SecondaryButton className="border-none">{icon1}</SecondaryButton>
                    : <SecondaryButton className="border-none"><MoreHorizontal className="h-4" /></SecondaryButton>}
            </Dropdown.Trigger>
            <Dropdown.Content align="left">
                <Dropdown.Link href={route('workspace.project.create', 1)}>Hello World</Dropdown.Link>
            </Dropdown.Content>
        </Dropdown>
        <Dropdown>
            <Dropdown.Trigger>
                {icon2 ? <SecondaryButton className="border-none">{icon2}</SecondaryButton>
                    : <SecondaryButton className="border-none"><Plus className="h-4" /></SecondaryButton>}
            </Dropdown.Trigger>
            <Dropdown.Content align="left">
                <Dropdown.Link href={route('workspace.project.create', 1)}>New Project</Dropdown.Link>
            </Dropdown.Content>
        </Dropdown>
    </div>
}