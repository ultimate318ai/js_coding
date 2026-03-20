// --- Day 2: Rock Paper Scissors ---

import { readFromFile } from "../common.js";

type Round = {opponentAction: OponentAction, userAction: UserAction}


type OponentAction = "A" | "B" | "C";

type UserAction = "X" | "Y" | "Z";

type RoundResult = "Won" | "Draw" | "Lost"

const roundExpectedResult : Record<UserAction, RoundResult> = {
    "X": "Lost",
    "Y": "Draw",
    "Z": "Won",
}

const actionResultsMapping : Record<OponentAction, Record<RoundResult, UserAction>> = {
    "A":  {"Lost": "Z", "Draw": "X", "Won": "Y"},
    "B": {"Lost": "X", "Draw": "Y", "Won": "Z"},
    "C": {"Lost": "Y", "Draw": "Z", "Won": "X"}
}


const actionScore: Record<UserAction, number> = {
    "X": 1,
    "Y": 2,
    "Z": 3,
}

const roundScore: Record<RoundResult, number> = {
    "Won": 6,
    "Draw": 3,
    "Lost": 0
}


function parseFileContent(fileName: string): {opponentAction: OponentAction, userAction: UserAction}[] {
    const content: string = readFromFile(fileName);
    return content.split('\n').map((currentLine) => {
        const [opponentAction, userAction] = currentLine.split(" ") as [OponentAction, UserAction]
        return { opponentAction, userAction }
    })
}

function parseRound(action: Round): number {
    return actionScore[action.userAction] + roundScore[getRoundResult(action)]

}

function parseSecondRound(action: Round): number {

    const {opponentAction, userAction} = action;

    //now X is a lost, Y is draw, and Z is win.


    const expectedRoundResult = roundExpectedResult[userAction]
    const actionResultMapping = actionResultsMapping[opponentAction][expectedRoundResult]

    return actionScore[actionResultMapping] + roundScore[expectedRoundResult]
}

function getRoundResult(action: Round): RoundResult {

    const {opponentAction, userAction} = action;

    switch (opponentAction) {
        case "A":
            switch (userAction) {
                case "X":
                    return "Draw"
                case "Y":
                    return "Won"
                case "Z":
                    return "Lost"
            }
        case "B":
            switch (userAction) {
                case "X":
                    return "Lost"
                case "Y":
                    return "Draw"
                case "Z":
                    return "Won"
            }
        case "C":
            switch (userAction) {
                case "X":
                    return "Won"
                case "Y":
                    return "Lost"
                case "Z":
                    return "Draw"
            }
    }
}


function day2() {

    const fileContent = parseFileContent("./input.txt")

    // first part
    const resultScoreList =  fileContent.map((round) => parseRound(round))
    const roundsResult = resultScoreList.reduce((currentScore, score) => currentScore + score, 0)
    console.log(roundsResult)

    //second part
    const secondRoundResult = fileContent.map((round) => parseSecondRound(round))
    const secondRoundsResult =  secondRoundResult.reduce((currentScore, score) => currentScore + score, 0)

    console.log(secondRoundsResult)
}

day2()