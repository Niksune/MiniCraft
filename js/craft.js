﻿/*GLOBAL VARIABLES*/

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [
        Init,
        Tycoon,
        Craft
    ]
};
var game = new Phaser.Game(config);




