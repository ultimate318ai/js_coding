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
    // first part
    const { maximum: maxinumCaloriesValue } = callorieAmoundPerElfList.reduce((data, currentValue, index) => {
        if (currentValue >= data.maximum) {
            data.index = index
            data.maximum = currentValue
        }
        return data
    }, { maximum: 0, index: 0 })
    console.log(maxinumCaloriesValue)

    // second part
    const topthreeCaloriesValues = callorieAmoundPerElfList.map((value, index) => ({ value, index })).sort(({ value: a }, { value: b }) => a - b).splice(-3)
    console.log(topthreeCaloriesValues.reduce((topthreeCaloriesValues, data) => topthreeCaloriesValues + data.value, 0))

}

day1()