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
    return [...new Set([...left, ...right])][0]
}

function getLetterPriority(letter: string) : number{
    return letter.charCodeAt(0) - (letter.toUpperCase() === letter ? 36 : 96)
}


function day3() {

    const fileContent = parseFileContent("./input.txt")

    // first part
    const result = fileContent.reduce((totalPriority, {left, right}) => totalPriority + getLetterPriority(getCommonLetterFrom(left, right)), 0)
    console.log(result)
    
}

day3()