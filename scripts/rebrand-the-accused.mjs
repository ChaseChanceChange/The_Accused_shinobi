import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const skipDirs = new Set(['.git', 'node_modules', 'coverage', 'test-results']);
const textExtensions = new Set(['.js', '.mjs', '.cjs', '.html', '.css', '.md', '.txt']);

// Only replace explicit player-facing or documentation phrases.
// Do not replace generic identifiers such as EidolonDevourer or environment
// variable names because those may be part of stable internal contracts.
const replacements = [
    [
        'Journey through Earth, Water, Fire, and Air. Restore their ancient crystals, awaken the Eidolons, and confront the darkness beyond.',
        'Test your skill, shape your shadow, and forge your legend. Enter The Accused — Shadow-Shinobi, master combat and crafting, gather rare materials, build your own fighting style, and rise beyond god-tier to become Transcendent.'
    ],
    ['EIDOLON ONLINE', 'THE ACCUSED — SHADOW-SHINOBI'],
    ['Eidolon Online', 'The Accused — Shadow-Shinobi'],
    ['eidolon.mendola.tech', 'github.com/ChaseChanceChange/The_Accused_shinobi'],
    ['eserver.mendola.tech', 'localhost:8080'],
    ['https://github.com/aeml/eidolon', 'https://github.com/ChaseChanceChange/The_Accused_shinobi'],
    ['Robert Mendola', 'ChaseCraft / Chase'],
    ['mendola.tech', 'github.com/ChaseChanceChange/The_Accused_shinobi']
];

let changedFiles = 0;
let changedStrings = 0;

async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (skipDirs.has(entry.name)) continue;
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await walk(fullPath);
            continue;
        }

        const extension = path.extname(entry.name).toLowerCase();
        if (!textExtensions.has(extension)) continue;

        const before = await fs.readFile(fullPath, 'utf8');
        let after = before;
        let fileChanges = 0;

        for (const [from, to] of replacements) {
            const count = after.split(from).length - 1;
            if (count > 0) {
                fileChanges += count;
                after = after.split(from).join(to);
            }
        }

        if (after !== before) {
            await fs.writeFile(fullPath, after, 'utf8');
            changedFiles += 1;
            changedStrings += fileChanges;
            console.log(`rebranded: ${path.relative(root, fullPath)} (${fileChanges} replacements)`);
        }
    }
}

await walk(root);
console.log(`The Accused rebrand pass complete: ${changedFiles} files, ${changedStrings} replacements.`);