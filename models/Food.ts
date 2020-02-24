import { IIngredient, IAllergen, IDietaryValue, IWarning } from "@models/Ingredient"
import { IRecipe, IUtensil, IPreparationType, IPreparationTime } from "@models/Preparation"
import { IUser } from "@models/User"
import { IRating, IRecommendation, IComment } from "@models/Metadata"

// Bolognese, Pizza
export interface IFood {
    category: string
    preparationSteps: IRecipe
    domminantTastes: ITaste[]// ????????

    userSubmitter?: IUser // Not sure
    rating: IRating
    recommendedWith: IRecommendation[]
    comments: IComment[]


    getAllergens(): IAllergen[]
    getDietaryValues(): IDietaryValue[]
    getUtensils(isBasic: boolean): IUtensil[]
    getWarnings(): IWarning[]
    getIngredients(isMandatory: boolean): IIngredient[]
    getTotalPreparationTime(isMandatory: boolean): IPreparationTime
    getAllPreparationTypes(isMandatory: boolean): IPreparationType[]
}

export interface ITaste {
    name: string
}
