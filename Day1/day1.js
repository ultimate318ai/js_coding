import { readFromFile } from "../common.js";


function parseFileContent(fileName) {
    const content = readFromFile(fileName);
    const elfIndex = 0;
    return content.split('\n').reduce((callorieAmoundPerElfList, currentLine) => {
        if (currentLine === " ") {
            elfIndex++;
            return callorieAmoundPerElfList;
        }
        callorieAmoundPerElfList[elfIndex] += +currentLine
        return callorieAmoundPerElfList
    }, [])
}

function day1() {
    const maxinumCaloriesIndex = parseFileContent("./input.txt").reduce((maximum, currentValue, index) => {
        if (currentValue >= maximum) {
            maximum = index
        }
        return maximum
    }, 0)
    console.log(maxinumCaloriesIndex)
}

day1()