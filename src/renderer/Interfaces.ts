export interface User {
    id: string;
    username: string;
    tag: string;
    email?: string;
    avatar: string;
    bio: string;
    banner: string;
    password?: string;
    guilds: object[] | null;
    friends: object[] | null;
    status: string | "";
    apps?: object[] | null;
}
