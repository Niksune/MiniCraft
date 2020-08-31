var game = new Vue({
    el: '#craft',
    data: {
        score: 0,
        time: 100,
        actionNeeded: "vide",
        actions: {
            action1: "marteau",
            action2: "scie",
            action3: "tournevis"
        }
    },
    methods: {
        clickAction: function (action) {
            this.actionNeeded = this.actions[action];
        }
    }
})