import fs from 'node:fs';

export function readFromFile(fileName) {
    return fs.readFileSync(fileName, 'utf8');
}