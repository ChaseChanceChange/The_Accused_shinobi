# The Accused - Shadow-Shinobi Multiplayer Server

This directory contains the authoritative multiplayer server for **The Accused - Shadow-Shinobi**.

It is written in Go and owns the parts of the game that cannot be trusted to the browser: world simulation, movement validation, combat resolution, dungeon progression, rewards, party/session handling, persistence, and multiplayer state replication.

## Runtime

- Go `1.24.5`
- MongoDB persistence
- Gorilla WebSocket networking
- protobuf state envelopes for realtime replication

## Run locally

From `server/`:

```bash
go run .
```

Default endpoint:

```text
ws://localhost:8080/ws
```

The listen address can be changed with `--addr`.

Health endpoint:

```text
http://localhost:8080/healthz
```

## Local TLS

For browser testing over `wss://`, generate a local certificate and start the server with:

```bash
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes -subj "/CN=localhost"
go run . --cert=cert.pem --key=key.pem
```

## Tests and build

```bash
go test ./...
go build ./...
```

## Deployment

Typical production layout:

- Go server running behind a reverse proxy
- TLS terminated by the reverse proxy
- MongoDB running with the server environment
- WebSocket traffic forwarded to `/ws`

Linux deployment notes are under `server/deploy/`.

## QA-only commands

The server contains several QA helpers used for automated gameplay validation. They remain restricted to explicit QA usernames and are not normal player commands.

The isolated QA environment creates disposable accounts and resources for testing so ordinary player data is not used by the test suite.
