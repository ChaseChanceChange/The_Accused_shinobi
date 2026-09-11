# Shadow-Shinobi Migration Safety

This note exists because **The Accused — Shadow-Shinobi** is being built by evolving a working game foundation, not by blindly replacing strings.

## Safe to change first

Player-facing identity should move to Shadow-Shinobi early:

- page titles and visible branding
- menu copy
- NPC, quest, item, location and ability names
- lore and story text
- loading/help/tutorial copy
- visual assets and presentation language
- project descriptions and public documentation

## Do not blindly rename

The following may be compatibility-sensitive until inspected and migrated deliberately:

- WebSocket protocol identifiers
- protobuf field/message names
- binary protocol magic such as `EDPB`
- MongoDB collection names and persisted document keys
- browser storage keys
- QA environment variables such as `EIDOLON_*`
- automated test selectors and route names
- Go import paths/module references
- database migration identifiers
- deployment hostnames/certificates
- generated files and generated protocol bindings

A legacy technical identifier is not a player-facing endorsement of the old game. It may simply be a contract that existing code relies on.

## Migration rule

For each legacy reference:

1. classify it as **player-facing**, **documentation-only**, **compatibility-sensitive**, or **generated**
2. change player-facing material first
3. preserve compatibility-sensitive contracts until the replacement is implemented and tested
4. migrate tests/configuration alongside code rather than deleting coverage
5. document intentional legacy names so future AI contributors do not “fix” them by guesswork

## AI handoff rule

Before a global rename or broad refactor, read:

- `docs/THE-ACCUSED-SHADOW-SHINOBI.md`
- this document
- the relevant implementation and tests

When uncertain, preserve the working contract and change the presentation layer first.

## Current intentional legacy examples

These are known examples from the inherited foundation and existing QA system. Their continued presence does **not** mean the player-facing game should continue to use the old identity:

- `EIDOLON_*` isolated-QA environment variables
- `EDPB` protobuf/state wire marker
- existing technical paths and protocol contracts that have not yet received a compatibility-safe migration

They can be migrated later as explicit engineering work. Until then, they are treated as legacy implementation details.
