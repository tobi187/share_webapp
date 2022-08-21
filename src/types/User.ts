export interface User {
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string
    created: Date
}

export interface TempUser {
    id: number,
    username: string,
    email: string,
    creator: number,
    deleteAt: Date,
    hasAccessTo: number[],
    hasAccessToGroups: number[],
    hasLoggedIn: boolean
}

export interface Login {
    username: string,
    password: string
}

export interface Group {
    id: number,

}