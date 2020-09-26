<div align="center">
<img src="./public/codequest_title.png" width="500px">
<br><br>

[![Build Status](https://travis-ci.com/ChrisCooney05/codeQuest.svg?branch=master)](https://travis-ci.com/ChrisCooney05/codeQuest)
[![Netlify Status](https://api.netlify.com/api/v1/badges/e2dd292d-0968-4564-b990-02ce06425514/deploy-status)](https://app.netlify.com/sites/lets-codequest/deploys)

</div>

Welcome to codeQuest(), if you would like to give our game a try you can play it [here](https://lets-codequest.netlify.app/). This game also won [Best Project of August](https://careerkarma.com/discussions/projects/codequest-174/) as voted by the Career Karma community.

The goal of this project is to teach basic problem solving concepts to young children, while introducing them to some basic programming syntax. It is a platform game like many others - but with a twist. You must run and jump across the map in order to collect the coins and clear the levels; but instead of moving your player using keystrokes, you enter commands into a terminal and watch as he carries them out one at a time.

A lot of thought was put into the sort of learning environment we wanted to create. We deliberately did not include time limits, health bars or a finite number of lives. The point of this game is to fail. You are not supposed to instinctively know the right sequence of commands to pass a level - like every budding software engineer you must start small, try a few things out, figure out what works and continuously iterate until you reach a full working solution.

## How to play

Players are presented with an avatar (the ‘Hero’) which they can control by entering commands into the terminal and clicking the “Play” button. The avatar can perform simple movements by responding to single commands:
![move](./public/single.gif)

By creating a chain of multiple commands, the hero can perform more complex movements that allow him to jump onto or over obstacles within the level:
![move](./public/combo.gif)

A level is cleared by collecting the golden coin. Once a coin is collected, a new and more complex level is rendered:
![move](./public/clearing.gif)

If the player does not clear the level with the set of commands they have entered, they can send the hero back to the starting position without resetting the commands by clicking the “Back to Start” button:
![move](./public/reset.gif)

If the hero falls down a hole then he is sent back to the starting position of the same level:
![move](./public/falling.gif)

## Team codeQuest()

[Emanuele Pace](https://github.com/Emanuele-20)<br/>
[Benedetta Arinci](https://github.com/BeneArinci)<br/>
[Anthony Donovan](https://github.com/ad13380)<br/>
[Chris Cooney](https://github.com/ChrisCooney05)<br/>

## Technologies

| Area                 | Technology             |
| -------------------- | ---------------------- |
| Front end            | React                  |
| Languages used       | Javascript, HTML5, CSS |
| CI/CD                | Travis                 |
| Hosting              | Netflify               |
| Styling              | CSS, Tachyons          |
| testing and coverage | Jest                   |

## Installing Locally

If you would rather play the game locally, or if you want to play with the source code you can do the following.

1. Please clone this repo to your local machine (or fork then clone if you want to store a copy on your own repo)
2. Run the following command to install dependencies <br/>
   ```
   npm install
   ```
3. You have a few out the box scripts you can run
   ```
   npm test
   npm start
   ```
   npm test will run all tests <br/>
   npm start will boot the server to port 3000 for you to play the game locally.
