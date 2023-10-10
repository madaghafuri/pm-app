import { PropsWithChildren } from "react";

type PriorityVariant = 'Low' | 'Medium' | 'High';

type StatusVariant = 'On Track' | 'At Risk' | 'Off Track';

type BadgeProps = {
    for: 'status' | 'priority';
    variant: PriorityVariant & StatusVariant;
}

export function Badge({ children }: PropsWithChildren) {
    return (
        <div className="rounded-full px-2.5 bg-yellow-300 text-black text-xs h-5 font-semibold inline-flex items-center justify-center">
            {children}
        </div>
    )
}