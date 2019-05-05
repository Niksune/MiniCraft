var Init = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function Init() {
            Phaser.Scene.call(this, { key: 'BootScene' });
        },

    preload: function () {
        this.load.image('marteau', 'images/marteau.png');
        this.load.image('scie', 'images/scie.png');
        this.load.image('tournevis', 'images/tournevis.png');
    },

    create: function () {
        this.scene.start('Tycoon');
    }
});