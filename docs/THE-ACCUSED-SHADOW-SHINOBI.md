# The Accused — Shadow-Shinobi

## Canonical Game Record

This document is the working source of truth for the identity, design direction, story context, and authoring rules of **The Accused — Shadow-Shinobi**.

The repository contains a mature browser-MMO/action-RPG core. That core is being **adapted, expanded, and given the Shadow-Shinobi identity**. The purpose of this document is to stop that identity from being lost as more systems, assets, quests, UI, AI-authored content, and future contributors are added.

This is a living design record. Technical implementation can change; canonical game decisions should not silently change because an AI or contributor guessed at them.

---

## 1. Game Identity

**Title:** The Accused — Shadow-Shinobi  
**Project umbrella:** The Accused  
**Development identity:** ChaseCraft / Chase  
**Format:** persistent browser-based multiplayer action RPG / MMORPG

The game should present as its own dark shinobi fantasy rather than as a reskinned copy of another ninja franchise or the old placeholder setting in the inherited game core.

The Shadow-Shinobi identity is expressed through:

- original shinobi/ninja worldbuilding
- darker visual presentation and more dangerous-feeling progression
- original terminology, names, factions, enemies, techniques, items, locations, and story
- fast, readable, visually satisfying combat
- a persistent MMO layer surrounding the moment-to-moment action
- progression that rewards planning, experimentation, mastery, and social play
- a world that eventually needs to be physically explorable, not only represented by menus

The project is allowed to evolve beyond the first ideas. New content belongs in this record so later development does not erase earlier design work.

---

## 2. What We Are Building

The game combines three things that need to work together:

### The MMO layer

Players create a character, develop a build, collect equipment and materials, meet other players, join groups, trade, pursue quests, and work toward increasingly difficult content.

### The action layer

Combat must feel active and visual. Attacks, abilities, targeting, movement, hit feedback, damage readability, enemy reactions, effects, and rewards should make fighting something the player watches and participates in rather than a spreadsheet hidden behind a menu.

The visual bar is **high-energy character-action readability**: strong silhouettes, clear attacks, satisfying impact, useful telegraphs, meaningful defensive decisions, and a combat result that is easy to understand on both desktop and mobile screens. The game can take inspiration from the *presentation quality* players expect from modern hero/raid games without copying their characters, UI, art, or systems wholesale.

### The long-term progression layer

The player should have reasons to keep improving after the basic story. Builds, rare equipment, crafting outcomes, mastery, difficult dungeons/raids, group play, PvP, collections, exploration and status within the world all contribute to the endgame.

The game must not reduce the whole experience to “farm currency, buy power.”

---

## 3. Non-Negotiable Design Principles

### Not pay-to-win

The game should not sell direct competitive power that simply allows a paying player to bypass meaningful progression or defeat a player who played the game normally.

Optional monetisation may eventually exist around cosmetics, convenience, presentation, account services, or other non-dominating features, but it must not quietly turn progression into a credit-card contest.

### Resource pressure is intentional

The world should have meaningful resource limitations. Farming routes, materials, energy-like limits, crafting inputs, dungeon opportunities, or other controlled resources can create choices and prevent infinite mindless extraction.

The goal is **friction with purpose**, not frustration for its own sake.

### God-tier is supposed to be difficult

Reaching the highest levels of optimisation should be rare. Players pursuing extreme builds may need long-term planning, scarce resources, difficult content, risky crafting, and a willingness to accept failure.

A player who reaches a genuinely exceptional state should feel that they earned something unusual.

### Risk and reward belong together

Rare crafting and progression can include high failure risk. The strongest outcomes should be exciting precisely because they are not routine.

Failure must still be understandable and, where appropriate, give the player a meaningful path forward rather than feeling like a pure deletion of their time.

### Original setting

Do not import recognisable Naruto characters, clans, villages, story arcs, named techniques, symbols, organisations, or other franchise-identifying material. Reuse gameplay roles where useful, but create our own setting and expression.

A familiar gameplay role is fine. A disguised copy is not.

---

## 4. Shadow-Shinobi Fantasy

The player fantasy is the rise of a shinobi from a comparatively small beginning into a dangerous, recognised figure who can survive the world's hardest threats.

The tone should favour:

- secrecy, skill and preparation
- dangerous missions
- rivalries and alliances
- mastery rather than button spam
- equipment that feels personal
- techniques that change how a build plays
- environments that make the world feel inhabited and hazardous
- moments where a player's choices visibly matter

The game should not require every character to feel identical simply because they share a class. Build identity is a major part of the fantasy.

---

## 5. Character Progression

The inherited core already supports classes, level progression, equipment, abilities, quests, dungeons, parties, social systems and persistent state. Those systems are a foundation, not the final design.

The Shadow-Shinobi direction should add a stronger sense of character identity through:

- equipment choices
- ability/technique selection
- mastery investment
- resources and crafting
- rare item outcomes
- combat roles
- progression decisions that cannot all be maximised simultaneously

### Classes and roles

The current technical core contains four broad combat archetypes. These can be retained as implementation scaffolding while their player-facing names, fantasy, skills and progression are redesigned for the Shadow-Shinobi setting.

Do not rename internal IDs simply for flavour. Player-facing terminology and internal protocol/database identifiers are separate concerns.

---

## 6. Equipment and Crafting

One of the key Shadow-Shinobi ideas is **individualised gear**.

A rare item should be able to feel like *that item*, not merely “Sword +17” copied a thousand times.

Desired direction:

- uncommon and rare gear can have differentiated attributes
- very rare crafting can produce unusual combinations or highly desirable rolls
- the best outcomes are not guaranteed
- crafting consumes meaningful resources
- failure is part of the risk model
- players should make decisions about whether a promising item is worth investing in
- the system should allow memorable “this is my weapon” moments

The final mathematical model still needs to be balanced against the existing server-authoritative item system. Do not invent database columns or silently change item persistence without checking the current implementation.

---

## 7. Combat Direction

Combat is a first-class feature, not decoration around menus.

The target experience includes:

- responsive movement
- clear targeting
- visible attacks and ability effects
- readable enemy attack telegraphs
- impact feedback
- health/resource feedback that can be understood immediately
- meaningful defensive and offensive choices
- group roles that matter in difficult encounters
- bosses with mechanics rather than only larger health pools
- combat spaces that support movement and positioning

The current server remains authoritative. The client may predict, smooth, animate and present actions, but it must not become the source of truth for damage, rewards, inventory, progression or encounter state.

---

## 8. The World Must Become a Real Place

A major project requirement is that the game eventually needs an actual world for players to move through and fight in.

Menus are important, but menus alone are not the finished game.

The world direction should grow toward:

- explorable areas
- recognisable settlements and dangerous zones
- paths, shortcuts and points of interest
- encounter spaces designed for combat
- dungeon interiors that visually support their mechanics
- bosses with readable arenas
- environmental storytelling
- gathering and exploration locations
- visual landmarks that help players navigate without relying entirely on coordinates

The existing realms/dungeons in the core provide structure that can be transformed into Shadow-Shinobi locations and encounters.

---

## 9. MMO Systems That Belong in the Final Game

The current foundation already contains or points toward:

- parties and group play
- friendships and social status
- persistent character saves
- stash/inventory
- forge/crafting entry points
- quests
- trading/auction systems
- reconnect/session resume
- dungeons
- PvP/arena systems
- guild/social features

These should be treated as parts of one world rather than disconnected demonstrations.

Future systems should answer a player question such as “why would I use this?” rather than existing only because the engine can support it.

---

## 10. Story and Lore Record

### Canon rule

The Shadow-Shinobi setting is original. Do not fabricate missing canon and then present it as something Chase previously decided.

Known canon direction from the project work includes:

- the game is a dark original shinobi fantasy
- the player is building a character whose identity develops through actions and progression
- the world is intended to support missions, factions, rivalries, exploration, combat and long-term progression
- the story should eventually connect character progression to the wider world rather than existing as unrelated quest text
- the game's strongest content should be written specifically for Shadow-Shinobi rather than translated from the old placeholder setting

When an old story element from the previous project is useful, treat it as **material to be reworked into Shadow-Shinobi**, not as binding lore.

When a new story idea is introduced, add it to this section or a linked lore file before treating it as established canon.

### Story development rule

Stories, quest arcs and factions should be written with:

- original names
- original motivations
- consequences that can appear in gameplay
- opportunities for NPC and player interaction
- room for future expansion
- compatibility with multiplayer progression

Do not let lore become a wall of text disconnected from systems.

---

## 11. UI and Visual Direction

The interface should feel like a finished game, not a developer dashboard.

Desired direction:

- dark, confident presentation
- readable typography
- strong ninja silhouettes and imagery
- menus that feel unified rather than individually styled
- responsive layouts for desktop and phone screens
- combat information visible without covering the action
- equipment and crafting screens that communicate rarity and risk clearly
- visual feedback for progression and rewards

Assets are replaceable. The system should not be designed around one temporary artwork set.

Free/open or appropriately licensed assets may be used during development, but final asset provenance must be tracked. Do not assume that “found online” means commercially reusable.

---

## 12. Asset Integration Policy

Assets should be introduced incrementally and committed in manageable groups.

For each imported asset set:

1. record where it came from
2. record its licence/usage terms
3. keep original files identifiable during development
4. connect the asset to the game system that uses it
5. avoid replacing a working asset path without checking all references
6. verify that the visual result actually improves the game

Temporary placeholder art is acceptable. Permanent ambiguity about provenance is not.

---

## 13. Technical Foundation

The current game core provides:

- vanilla JavaScript ES modules and Three.js client rendering
- authoritative Go multiplayer server
- WebSockets
- JSON command handling
- protobuf state replication with binary framing
- MongoDB persistence
- service-worker asset caching
- Docker/Compose deployment
- Nginx and TLS deployment tooling
- Jest, ESLint, Playwright and Go validation

The architectural rule that matters most is **server authority**:

> The browser expresses intent and presents the world. The server owns truth.

Do not trade that property away for convenience.

---

## 14. Documentation Rules for Future AI and Contributors

Before changing an existing system:

1. inspect the current implementation
2. identify which part is technical infrastructure and which part is player-facing identity
3. preserve working contracts unless the task is deliberately changing them
4. check this document before inventing lore or terminology
5. record new major design decisions here
6. keep internal identifiers stable unless a migration is explicitly planned
7. test after meaningful changes

### Especially important

Do **not** perform blind global text replacement of the old game's name across the repository.

Some legacy identifiers can be protocol names, storage keys, environment variables, test selectors, generated data or migration markers. Those may require compatibility handling rather than cosmetic renaming.

Player-facing identity can change without breaking internal contracts.

---

## 15. Inherited Core vs New Game Identity

The distinction is deliberate:

### Inherited / foundation

The repository contains a pre-existing multiplayer action-RPG architecture and a substantial body of gameplay infrastructure. That foundation provides code, protocols, tests, deployment tooling and working systems that the new game can build upon.

### Shadow-Shinobi development

The new game identity is created by changing and expanding the player-facing world, content, visual language, mechanics, story, equipment, encounters, progression and assets around that foundation.

This is normal game development. We are not pretending the original foundation appeared from nowhere; we are developing the game that now runs on it.

---

## 16. Canonical Decisions vs Open Questions

### Canonical now

- The title is **The Accused — Shadow-Shinobi**.
- The project sits under **The Accused / ChaseCraft**.
- The world is an original dark shinobi setting.
- The game is an MMO/action-RPG hybrid, not a menu-only manager.
- Combat needs strong visual feedback and active participation.
- Progression can include meaningful resource limitations.
- Reaching extreme/god-tier progression should be difficult and uncommon.
- Rare crafting can carry meaningful failure risk.
- The final world must be genuinely explorable.
- Pay-to-win is not an acceptable design direction.
- Existing technical systems should be evolved rather than thrown away merely for appearance.
- Future AI contributors must preserve and extend the accumulated ideas rather than resetting the project to a generic template.

### Open / still being designed

- final class names and shinobi archetypes
- final factions, clans and organisations
- final geographic names and world map
- final campaign structure and chapter names
- final technique/ability naming system
- exact crafting failure/recovery rules
- precise resource-limit model
- final monetisation boundaries, if any
- final art style and production asset library
- final endgame raid structure

Open decisions must not be silently promoted to canon.

---

## 17. AI Authoring Contract

When an AI creates content for this game, it should behave as a game developer working inside an existing product.

It should:

- preserve engine contracts
- prefer compatible extensions over unnecessary rewrites
- use original Shadow-Shinobi concepts
- explain assumptions
- never claim inherited work as newly authored work
- never erase documented ideas just because they are inconvenient to a new implementation
- update documentation when a major design decision changes
- keep technical and player-facing naming concerns separate
- produce deterministic, reviewable data changes
- test the actual repository after code changes when the environment permits

The priority is a coherent game, not a convincing-looking rename.

---

## 18. Migration Roadmap

The practical order of work is:

1. establish canonical Shadow-Shinobi documentation and terminology
2. remove old player-facing identity from the client/server presentation
3. preserve and verify the multiplayer/gameplay foundation
4. map useful Shadow Shinobi material into the new core
5. replace temporary lore, names and UI copy with original Shadow-Shinobi content
6. build the actual explorable world and combat presentation
7. integrate assets in controlled batches with provenance records
8. deepen progression, crafting, factions, story and endgame systems
9. repeatedly test multiplayer, mobile, persistence, combat and deployment
10. only then promote the branch into the main release line

This order is intentional. The game should become recognisably itself before we start polishing an enormous amount of content on top of an unclear identity.
