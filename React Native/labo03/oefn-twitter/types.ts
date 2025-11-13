export interface Tweet {
    id: number;
    handle: string;
    text: string;
    createdOn: string
    profile?: Profile
}

export interface Profile {
    id: number;
    handle: string;
    name: string;
    bio: Date;
    avatar: string;
    banner: string;
}