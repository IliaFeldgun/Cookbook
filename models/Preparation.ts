import { IIngredient } from "@models/Ingredient"

export interface IRecipe {
    steps: IPreparationStep[]

    addStep(step: IPreparationStep, stepPlace: number, shiftLeft?: boolean): void
    removeStep(stepPlace: number): void

    getSteps(isMandatory: boolean): IPreparationStep[]

    getUtensils(isBasic: boolean): IUtensil[]
    getIngredients(isMandatory: boolean): IIngredient[]
    getTotalPreparationTime(isMandatory: boolean): IPreparationTime[]
    getAllPreparationTypes(isMandatory: boolean): IPreparationType[]
}

// Cut onions, pour water to pot, Boil water, Cook chicken
export interface IPreparationStep {
    preparationType: IPreparationType
    preparationTime?: IPreparationTime
    ingredients: IIngredient[]
    isMandatory: boolean

    getUtensils(isBasic: boolean): IUtensil[] // For hiding in GUI
}

// 10-15 min
export interface IPreparationTime {
    units: string
    value: number
    secondValue?: number
    comment?: string // wait until golden

    toString(): string
    addTime(time: IPreparationTime): void
}

// Cook, Fry, Cut
export interface IPreparationType {
    name: string
    utensils: IUtensil[]

    getUtensils(isBasic: boolean): IUtensil[]
}


export interface IUtensil {
    name: string
    isBasic: boolean // Knife, pot, plate is basic. Sous-vide, Egg splitter, Food processor is not
}