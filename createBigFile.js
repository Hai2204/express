import { writeFileSync } from 'fs';

for (let i = 0; i < 10000; i++) {
    writeFileSync("./files/bigFile.txt", `Hello ${i}\n`, { flag: 'a' })
    
}