export interface IJokes {
    error: boolean,
    amount: number,
    jokes: [
        {
            category: string,
            type: string,
            setup?: string,
            delivery?: string,
            joke?: string,
            flags: {
                nsfw: boolean,
                religious: boolean,
                political: boolean,
                racist: boolean,
                sexist: boolean,
                explicit: boolean
            },
            id: number,
            safe: boolean,
            lang: string,
        }
    ]
}