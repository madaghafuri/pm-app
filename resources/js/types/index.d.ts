import { FC } from "react";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export type View = {
    viewId: string;
    page: FC
}

export type BaseModel = {
    created_at: string;
    updated_at: string;
}

export interface Workspace extends BaseModel {
    id: number;
    name: string;
    description: string;
    pivot: { user_id: number; workspace_id: number };
}

export interface Project extends BaseModel {
    id: number;
    workspace_id: number;
    start_date: string;
    end_date: string;
    name: string;
}