export interface Camera {
    id?: number;
    name: string;
    ip: string;
    port: number;
    username: string;
    password: string;
    is_active: boolean;
    path?: string | null;
    description?: string | null;
} 