export interface IJoke {
    category: string,
    error: boolean,
    flags: {
        nsfw: boolean,
        religious: boolean,
        political: boolean,
        racist: boolean,
        sexist: boolean,
        explicit: boolean
    },
    id: number,
    setup?: string;
    delivery?: string;
    joke?: string,
    lang: string,
    safe: boolean,
    type: string
}