import * as Models from "@models/Food"

export class Ingredient implements Models.IIngredient {
    name: string
    category: string
    allergens: Models.IAllergen[]
}

export class Food implements Models.IFood {
    ingredients: Models.IIngredient[]
    category: string
    preparationSteps: Models.IPreparationSteps
    domminantTaste: Models.ITaste
    getAllergens(): Models.IAllergen[] {
        let allergens: Models.IAllergen[]

        this.ingredients.forEach(ingredient => {
            ingredient.allergens.forEach(allergen => {
                allergens.push(allergen)
            })
        })

        return allergens
    }
}

export class Taste implements Models.ITaste {
    name: string
}

export class Allergen implements Models.IAllergen {
    name: string
}

export class PreparationTime implements Models.IPreparationTime {
    constructor(units: string, value: number, secondValue?: number, comment?: string) {
        this.units = units
        this.value = value
        this.secondValue = secondValue
        this.comment = comment
    }

    units: string
    value: number
    secondValue?: number
    comment?: string

    toString(): string {
        let output = `${this.value}`

        if (this.secondValue)
            output += `-${this.secondValue}`

        output += ` ${this.units}`

        if (this.comment) {
            output += ` ${this.comment}`
        }

        return output;
    }
}

class PreparationType implements Models.IPreparationType {
    name: string
}

class PreparationStep implements Models.IPreparationStep {
    preparationType: Models.IPreparationType
    preparationTime?: Models.IPreparationTime
}

class PreparationSteps implements Models.IPreparationSteps {
    steps: Models.IPreparationStep[]

    addStep(step: Models.IPreparationStep, stepPlace: number, shiftLeft?: boolean): void {
        let index: number

        if (shiftLeft)
            index = stepPlace - 1
        else
            index = stepPlace

        let furtherSteps = this.steps.slice(index)
        void this.steps.splice(index, furtherSteps.length)
        this.steps.concat(furtherSteps);
    }

    removeStep(stepPlace: number): void {
        this.steps.splice(stepPlace)
    }
}