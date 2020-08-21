console.log("Welcome to the main module")

import { createPlan } from './plan.js';

const yearlyPlan = createPlan()

console.log(yearlyPlan)

import { addPlant } from './field.js';
import { createAsparagus } from './seeds/asparagus.js';
import { usePlants } from './field.js';

const fullField = createAsparagus()

addPlant(fullField)

const field = usePlants()

console.log(field)