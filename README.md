<!-- @format -->

# Virtual World

An interactive 2D world simulator with roads, vehicles, buildings, and traffic systems.

![Status](https://img.shields.io/badge/status-active-brightgreen)

## Demo

[virtual-world-five.vercel.app](https://virtual-world-five.vercel.app)

---

## About

A visual simulation built with vanilla JavaScript. Features interactive editors for creating roads, parking lots, traffic lights, and more.

## Usage

### Getting Started

1. **Start with an empty canvas** - You begin with a blank viewport to design your world
2. **Create roads** - Left click to place nodes in graph mode
3. **Connect nodes** - Select a node, then click another node (or a new point) to create a road segment
4. **Edit roads** - Left click and drag a selected node to reshape roads
5. **Auto-generated elements** - Buildings and trees automatically generate around your roads as you design
6. **Add markings** - Use the toolbar buttons to add road markings:
   - Crossing lanes at intersections
   - Parking spots and parking lots
   - Traffic lights for intersection control
   - Start points (where vehicles spawn)
   - Stop signs
   - Yield signs
   - Target destinations (where vehicles navigate to)

### Controls

- **Left click (graph mode)**: Add/select nodes; clicking from a selected node creates a segment
- **Left click + drag (graph mode)**: Move a selected node
- **Right click (graph mode)**: Clear selected node, or remove a hovered node
- **Left click (marking modes)**: Place the current marking on valid road/lane guides
- **Right click (marking modes)**: Remove a marking under the cursor
- **Middle mouse button + drag**: Pan the viewport
- **Mouse wheel**: Zoom in/out (clamped between 1x and 5x)
- **Mode buttons**: Switch between graph, stop, yield, crossing, parking, light, start, and target tools
- **Top action buttons**: Clear world, save as `.world`, and load from `.world`

## Quick Start

### Prerequisites

- Git installed
- A modern browser (Chrome, Firefox, Safari, Edge)
- Live Server (VS Code extension) or `npx live-server` available

### Installation

```bash
git clone https://github.com/SaMaKsH-exe/Virtual-World.git
cd Virtual-World
```

### Running Locally

**Option 1: VS Code Live Server**

1. Open the project folder in VS Code
2. Install or enable the Live Server extension
3. Right-click `src/index.html` → Open with Live Server

**Option 2: Command Line**

```bash
npx live-server src
```

This serves `src/index.html` in your browser automatically.

## Learning Resources

Built following this video series:

**[YouTube Playlist](https://www.youtube.com/playlist?list=PLB0Tybl0UNfZtY5IQl1aNwcoOPJNtnPEO)**

---

Made with vanilla JavaScript
