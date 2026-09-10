import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const skipDirs = new Set(['.git', 'node_modules', 'coverage', 'test-results']);
const textExtensions = new Set(['.js', '.mjs', '.cjs', '.go', '.html', '.css', '.json', '.md', '.txt', '.yml', '.yaml', '.sh', '.ps1']);

const replacements = [
    ['EIDOLON ONLINE', 'THE ACCUSED - SHADOW-SHINOBI'],
    ['Eidolon Online', 'The Accused - Shadow-Shinobi'],
    ['EIDOLON', 'THE ACCUSED'],
    ['Eidolon', 'The Accused'],
    ['eidolon-tests', 'the-accused-shadow-shinobi'],
    ['eidolon-server', 'the-accused-shadow-shinobi-server'],
    ['eidolon.mendola.tech', 'github.com/ChaseChanceChange/The_Accused_shinobi'],
    ['eserver.mendola.tech', 'localhost:8080'],
    ['https://github.com/aeml/eidolon', 'https://github.com/ChaseChanceChange/The_Accused_shinobi'],
    ['Robert Mendola', 'ChaseCraft / Chase'],
    ['mendola.tech', 'github.com/ChaseChanceChange/The_Accused_shinobi'],
    ['EIDOLON_QA_USERNAMES', 'THE_ACCUSED_QA_USERNAMES'],
    ['EIDOLON_ISOLATED_QA_PORT', 'THE_ACCUSED_ISOLATED_QA_PORT'],
    ['EIDOLON_ISOLATED_QA_NETWORK_MODE', 'THE_ACCUSED_ISOLATED_QA_NETWORK_MODE'],
    ['EIDOLON_E2E_WEB_PORT', 'THE_ACCUSED_E2E_WEB_PORT'],
    ['EIDOLON_ISOLATED_QA_ROUTE', 'THE_ACCUSED_ISOLATED_QA_ROUTE'],
    ['EIDOLON_E2E_CLASS', 'THE_ACCUSED_E2E_CLASS'],
    ['EIDOLON_QA_', 'THE_ACCUSED_QA_'],
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
