import { IFood } from "@models/Food";

export interface IUser {
    name: string
    email: string
    favouriteFoods: IFood[]
    personalRecipes: IFood[]
    friends: IUser[]
}