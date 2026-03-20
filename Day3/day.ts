// --- Day 3: Rucksack Reorganization ---

import { readFromFile } from "../common.js";


function parseFileContentFirstPart(fileName: string): {left: string[], right: string[]}[] {
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

function parseFileContentSecondPart(fileName: string): {one: string[], two: string[], three: string[]}[] {
    const content: string[] = readFromFile(fileName).split("\n");
    const buffer: string[][] = []

    return content.reduce((result, line, index) => {
        if ((index + 1) % 3 === 0){
            buffer.push(line.split(""))
            const one = buffer.pop()
            const two = buffer.pop()
            const three =  buffer.pop()
            if (one === undefined || two === undefined  || three === undefined){
                throw Error("expected three element is buffer")
            }
            return result.concat([{one, two, three}])
        }
        buffer.push(line.split(""))
        return result
    }, [] as {one: string[], two: string[], three: string[]}[])

}

function getCommonLetterFrom(...args: string[][]): string{
    return [...args.reduce((commonLetter, arg) => commonLetter.intersection(new Set(arg)), new Set(args[0]))][0]
}

function getLetterPriority(letter: string) : number{
    return letter.charCodeAt(0) - (letter.toUpperCase() === letter ? 38 : 96)
}


function day3() {

    const fileContent = parseFileContentFirstPart("./input.txt")

    // first part
    const result = fileContent.reduce((totalPriority, {left, right}) => {
        const commonLetter = getCommonLetterFrom(left, right)
        const letterPriority = getLetterPriority(commonLetter)
        return totalPriority + letterPriority
        
    }, 0)
    console.log(result)

    const fileContent2 = parseFileContentSecondPart("./input.txt")

    // second part
    const result2 = fileContent2.reduce((totalPriority, {one, two, three}) => {
        const commonLetter = getCommonLetterFrom(one, two, three)
        const letterPriority = getLetterPriority(commonLetter)
        return totalPriority + letterPriority
        
    }, 0)
    console.log(result2)
    
}

day3()