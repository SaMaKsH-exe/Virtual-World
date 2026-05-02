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
2. **Create roads** - Left click to place nodes. Each click creates a node point on the canvas
3. **Connect nodes** - Click two nodes and they'll automatically connect with a road path
4. **Edit roads** - Right click on nodes or segments to access editors. Drag nodes to reposition them and adjust your road layout in real-time
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

- **Left click**: Place nodes to draw roads
- **Right click**: Open editor panels for nodes and road segments to modify properties
- **Drag nodes**: Click and drag any node to reposition it and adjust road layout
- **Mouse drag (pan)**: Drag the canvas to move around the viewport
- **Scroll**: Zoom in and out for better visibility
- **Toolbar buttons**: Switch between road drawing mode and different marking tools
- **Editor panels**: Fine-tune properties like road width, lane count, traffic light timing, etc.

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
