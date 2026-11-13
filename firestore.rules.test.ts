import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const rulesPath = path.resolve(process.cwd(), 'firestore.rules');
const rulesContent = fs.readFileSync(rulesPath, 'utf8');

test('firestore.rules enforces default-deny catch-all and rules_version 2', () => {
  assert.match(rulesContent, /rules_version = '2';/);
  assert.match(rulesContent, /match \/\{document=\*\*\} \{\s*allow read, write: if false;/);
});

test('firestore.rules covers all 15 collections from firebase-blueprint.json', () => {
  const blueprint = JSON.parse(
    fs.readFileSync(path.resolve(process.cwd(), 'firebase-blueprint.json'), 'utf8'),
  );
  const collectionNames = Object.keys(blueprint.firestore).map((p) => p.split('/')[1]);
  for (const col of collectionNames) {
    assert.ok(
      rulesContent.includes(`match /${col}/`),
      `Missing match block for collection /${col}`,
    );
  }
});

test('firestore.rules enforces email_verified == true and strict keys().hasOnly() checks', () => {
  assert.match(rulesContent, /request\.auth\.token\.email_verified == true/);
  assert.match(rulesContent, /keys\(\)\.hasOnly\(/);
  assert.match(rulesContent, /affectedKeys\(\)\.hasOnly\(/);
  assert.match(rulesContent, /exists\(\/databases\/\$\(database\)\/documents\/expertise_categories\//);
});
