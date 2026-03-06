import { readFromFile } from "../common.js";


function parseFileContent(fileName) {
    const content = readFromFile(fileName);
    return content.split('\n').reduce((callorieAmoundPerElfList, currentLine) => {
        if (currentLine === "") {
            return callorieAmoundPerElfList.concat(0);
        }
        callorieAmoundPerElfList[[callorieAmoundPerElfList.length - 1]] += +currentLine
        return callorieAmoundPerElfList
    }, [0])
}

function day1() {
    const callorieAmoundPerElfList = parseFileContent("./input.txt")
    const { index: maxinumCaloriesIndex } = callorieAmoundPerElfList.reduce((data, currentValue, index) => {
        if (currentValue >= data.maximum) {
            data.index = index
            data.maximum = currentValue
        }
        return data
    }, { maximum: 0, index: 0 })
    console.log(maxinumCaloriesIndex + 1) //elf's index starts at one 
}

day1()