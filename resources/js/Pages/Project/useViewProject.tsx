import { FC, PropsWithChildren, createContext, useState } from "react";

type ViewType = 'List' | 'Overview' | 'Board' | 'Timeline' | 'Calendar';

const ViewContext = createContext({});

const ViewProvider: FC<PropsWithChildren> = ({ children }) => {
    const [currentView, setCurrentView] = useState<ViewType>('Board');
    

    return (
        <ViewContext.Provider value={{}}>

        </ViewContext.Provider>
    )
}