export interface IIngredient {
    name: string
    category: IIngredientCategory
    allergens: IAllergen[]
    dietaryValues: IDietaryValue[]
    warning?: IWarning
    //subIngredients: Ingredient[]
}

export interface IIngredientCategory {
    name: string // Fruit, Veg, Meat
}

export interface IWarning {
    warning: string // Should be washed before eaten
}

export interface IDietaryValue {
    name: string // Vitamin E, Magnesium, Pottasium
    type: string // Vitamins, Minerals, Fat, Protein, Carb
}

// Peanuts, Soy, Gluten
export interface IAllergen {
    name: string
}
