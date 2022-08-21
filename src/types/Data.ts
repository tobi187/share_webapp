export interface TextData {
    content: string,
    label: string,
    created: Date
}

export interface FileData {
    id: number,
    path: string,
    fileName: string,
    fileEnding: string,
    label: string,
    created: Date,
    AccessId: number,
    AccessGroupId: number
}