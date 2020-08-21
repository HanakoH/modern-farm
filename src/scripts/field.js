const emptyField = []

export const addPlant = (seedObj) => {
    emptyField.push(seedObj)
    // if (Array.isArray(seedObj) === false) {
    //     console.log("It is an object, push it!")
    //     emptyField.push(seedObj)
    // } else {
    //     for (const seed of seedObj) {
    //         const cornSeed = seedObj[seed]
    //         emptyField.push(cornSeed)
    //     }
    // }
    //   for (const plant of seedObj) {
         
    //    }
    // if (seedObj.type = "asparagus") {
    //     emptyField.push(seedObj)
    // } else if (seedObj.isArray = "corn") {
    //     emptyField.push(seedObj[0]),
    //     emptyField.push(seedObj[1])
    // } else if (seedObj.type = "potato") {
    //     emptyField.push(seedObj)
    // } else if (seedObj.type = "soybean") {
    //     emptyField.push(seedObj)
    // } else if (seedObj.type = "sunflower") {
    //     emptyField.push(seedObj)
    // } else {
    //     emptyField.push(seedObj)
    // } 
        
}

export const usePlants = () => { return emptyField }