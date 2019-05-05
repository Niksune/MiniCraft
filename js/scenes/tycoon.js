var Tycoon = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function Tycoon() {
            Phaser.Scene.call(this, { key: 'Tycoon' });
        },

    preload: function () {
    },

    create: function () {

        Tycoon = this.scene.get("Tycoon");
        Tycoon.scene.start('Craft');

    }
});