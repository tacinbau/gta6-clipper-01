# GTA 6 Clipper

![make.fun badge](https://make.fun/badge/gta6-clipper-01.svg)
![rank](https://make.fun/badge/gta6-clipper-01/tacinbau/gta6-clipper-01/rank.svg)
![reward](https://make.fun/badge/gta6-clipper-01/tacinbau/gta6-clipper-01/reward.svg)

A vertical GTA 6 clip cut from a live Twitch stream, with a make.fun pitch
baked in, posted as a public YouTube Short. The clip takes the funniest
moments from a live GTA 6 broadcast — the streamer's reactions, the chaos
on screen, the mission beats — and packs them into under a minute of
vertical video with the original stream audio. Mid-clip it tells viewers
they can make money making clips with AI, and it closes on a full-screen
make.fun end card.

Bounty: https://make.fun/bounty/gta6-clipper-01

## How to run

```sh
node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
bot directory into the output directory. It reads `MAKEFUN_BOT_DIR`
(default `/bot`) and `MAKEFUN_OUTPUT_DIR` (default `/output`).
`VIDEO.json` holds the URL of the published Short.
