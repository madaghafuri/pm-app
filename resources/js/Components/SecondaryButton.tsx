import { ButtonHTMLAttributes } from 'react';

type Props = {
    spacing?: keyof typeof Spacing
}

export default function SecondaryButton({ type = 'button', spacing = 'xs', className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & Props) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center px-1 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className + Spacing[spacing]
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

const Spacing = {
    xs: 'px-1 py-1',
    sm: 'px-2 py-1',
    base: 'px-2 py-2',
    md: 'px-4 py-2',
    lg: 'px-4 py-4',
    xl: 'px-8 py-4'
}