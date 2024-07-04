# Music 2023 Web Application
Author- Sharad Sisodia

## Introduction:
This is a web application for playing music tracks with synchronized lyrics.
This repository contains a music playlist themed around the best songs of 2023. The webpage includes a navigation bar, a song list with play options, a progress bar, and a section for displaying song lyrics.

## Technologies Used

- **HTML/CSS**: Basic structure and styling.
- **JavaScript**: Control audio playback, update UI elements dynamically.
- **Bootstrap**: For responsive design and UI components.


## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Credits](#credits)

## Features
- Play/Pause functionality for songs.
- Display of song progress using a progress bar.
- Display of current song time and total duration.
- Dynamic lyrics display synchronized with the song.
- 
- **Navigation**: 
  - A navigation bar (`<nav>`) with a logo (`Musify`) and links to Home and About sections.
  - Created by: **Sharad Sisodia** mentioned in the footer.

- **Song List**:
  - The main content (`<div class="container">`) includes a list of songs (`<div class="songList">`).
  - Each song (`<div class="songItem">`) displays:
    - Song title (`<span class="songName">`).
    - Play duration (`<span class="timestamp">`).
    - Play button icon (`<i id="X" class="songItemPlay fa-regular fa-circle-play">`).

- **Footer**:
  - A footer (`<div class="footer">`) indicating the creator of the webpage.

- **Playback Controls**:
  - At the bottom (`<div class="bottom">`), playback controls are provided:
    - Previous song (`<i class="fa-solid fa-3x fa-backward-step">`).
    - Play/pause toggle (`<i class="fa-regular fa-3x fa-circle-play">`).
    - Next song (`<i class="fa-solid fa-3x fa-forward-step">`).
  - Progress bar (`<input type="range" name="range" id="myProgressBar">`) to indicate and control playback progress.

- **Lyrics Display**:
  - A section (`<div class="lyricsContainer">`) for displaying song lyrics (`<div id="lyricsDisplay">`).

- **Dependencies**:
  - Uses Font Awesome icons (`<script src="https://kit.fontawesome.com/3a75051099.js" crossorigin="anonymous"></script>`).

## Files
- **index.html**: Contains the structure of the web page.
- **styles.css**: Defines styles for the web page.
- **script.js**: Implements functionality for the music player.

## Setup

1. Clone the repository.
2. Open `index.html` in a web browser.

## Usage

- Navigate through the website using the navigation bar.
-Click on a song title to load and play the song.
-The song's cover art, lyrics, and progress are displayed dynamically.
-Use the play/pause button to control playback.

# Custom CSS Styles for Music Player Interface

## Fonts
- Imported Google Fonts:
  - Lora (italic and weights 400 to 700)
  - Varela Round

## Reset
- Resets margins, paddings, and box-sizing for all elements.

## Body
- Sets the background color, font family, color, line height, and smooth font rendering.
- Applies a fadeIn animation for smooth visibility transition.

## Navigation (nav)
- Styles the navigation bar with a background color, box shadow, and hover effect.
- Aligns items horizontally with a list-style of none.
- Animates color change and transform on hover.

## Brand Logo (.brand)
- Styles the logo container with flex alignment, font size, and color.
- Includes a hover effect for scaling the logo and rotating an image inside.

## Container (.container)
- Provides styling for the main content container.
- Sets minimum height, background color, box shadow, and animation for entry.
- Uses a background image (not provided here) with cover and no-repeat properties.
- Applies a slideIn animation for smooth entry.

## Bottom Controls (.bottom)
- Styles the sticky bottom control bar with background color, alignment, and animation.
- Includes flex direction for vertical alignment of controls.

## Icons (.icons)
- Adds styles for icons, including hover effects for scaling.

## Progress Bar (#myProgressBar)
- Styles a custom progress bar with gradient colors and thumb appearance.
- Applies hover effects to increase bar height and change thumb color.

## Song Items (.songItemContainer, .songItem)
- Provides styles for individual song items.
- Sets background color, box shadow, padding, and hover effects.
- Includes animations for entry and hover transformations.

## Timestamp (.timestamp)
- Styles timestamps with margin, font size, and hover effects for icons.

## Song Info (.songInfo)
- Sets font family and hover effects for song information.
- Includes opacity transition for images inside.

## Background Animation (body::after)
- Adds a linear gradient background animation moving horizontally.

## Responsive Design
- Media queries for responsiveness across different screen sizes.
- Adjusts container width, navigation alignment, image sizes, and padding.
- Ensures optimal display on devices from large screens to mobile.

## Lyrics Container (.lyricsContainer)
- Styles a container for displaying song lyrics.
- Sets background color, text color, padding, margin, border radius, and positioning.
- Includes a z-index for layering and max-width for responsive scaling.
- Provides styles for heading and scrollable lyrics display.

## Footer (.footer)
- Aligns content to the right with center vertical alignment.
- Styles a span for color pulsing animation and hover scaling.



