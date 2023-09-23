import { PropsWithChildren } from "react";

export function Card({ children, className = "" }: PropsWithChildren<{className: string}>) {
    return <div className={'inline-flex items-center bg-gray-200 dark:bg-gray-700 p-4'}>{children}</div>
}