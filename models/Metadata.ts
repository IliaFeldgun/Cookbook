import { IUser } from "@models/User";
import { IFood } from "@models/Food";

export interface IRecommendation {
    food: IFood
    user: IUser
    rating: IRating
    reason: string
}
export interface IComment {
    user: IUser[]
    title: string
    content: string
    rating: IRating

    removeComment(): void
    editComment(title: string, content: string): void
}

export interface IRating {
    likes: IUser[]
    dislikes: IUser[]
}