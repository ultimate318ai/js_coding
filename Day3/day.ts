// --- Day 3: Rucksack Reorganization ---

import { readFromFile } from "../common.js";


function parseFileContent(fileName: string): {left: string[], right: string[]}[] {
    const content: string = readFromFile(fileName);
    return content.split('\n').map((line) => {

    const lineItemList = line.split("")
    const right = lineItemList.splice(line.length / 2)   
    return {
        left: lineItemList,
        right,
    }
    }
    
    )
}

function getCommonLetterFrom(left: string[], right: string[]): string{
    return [...new Set(left).intersection(new Set(right))][0]
}

function getLetterPriority(letter: string) : number{
    return letter.charCodeAt(0) - (letter.toUpperCase() === letter ? 38 : 96)
}


function day3() {

    const fileContent = parseFileContent("./input.txt")

    // first part
    const result = fileContent.reduce((totalPriority, {left, right}) => {

        const commonLetter = getCommonLetterFrom(left, right)
        console.log(commonLetter)

        const letterPriority = getLetterPriority(commonLetter)
        console.log(letterPriority)

        
        return totalPriority + letterPriority
        
    }, 0)
    console.log(result)
    
}

day3()