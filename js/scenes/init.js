var Init = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function Init() {
            Phaser.Scene.call(this, { key: 'BootScene' });
        },

    preload: function () {
    },

    create: function () {
        this.scene.start('Tycoon');
    }
});