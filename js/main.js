var game = new Vue({
    el: '#craft',
    data: {
        gameOn: true,
        score: 0,
        maxTime: 300,
        multFactor: 10,
        time: 0,
        actionNeeded: "vide",
        actionNames: {
            action1: "marteau",
            action2: "scie",
            action3: "tournevis",
            vide: "vide"
        },
        actionsNumbers: ["action1", "action2", 'action3'],
        waitingIdle: 10,
        waitingAction: 10,
        timeWaited: 0,
        moment: "beforeGame",
        reTry: '<br><button onClick="document.location.reload(false);">Recommence !</button>'
    },
    computed: {
        nameAction: function () {
            return this.actionNames[this.actionNeeded];
        },
        printTime: function () {
            return Math.floor(this.time/this.multFactor);
        }
    },
    /*mounted() {
        this.initialize();
    },*/
    methods: {
        initialize: function () {
            this.moment = "idle";
            this.start = "";
            this.time = this.maxTime;
            setTimeout(() => { this.tick() }, 1000);
        },
        tick: function () {
            this.time--;

            if (this.time <= 0) {
                this.gameOn = false;
                if (this.score > 60)
                    $("#actionNeeded").html("Un tricheur hein ? Félicitations pour avoir cassé le code !");
                else if (this.score >= 30)
                    $("#actionNeeded").html("Félicitations ! Tu es officiellement un.e PGM !");
                else if (this.score >= 20)
                    $("#actionNeeded").html("Bien joué ! Tu es sur le chemin de la réussite ! Encore un petit effort !"+this.reTry);
                else if (this.score >= 10)
                    $("#actionNeeded").html("Allez ! Ca commence à venir !"+this.reTry);
                else if (this.score > 0)
                    $("#actionNeeded").html("Dans le positif ! C'est déjà cool !"+this.reTry);
                else
                    $("#actionNeeded").html("Respire un bon coup ! Tu vas voir, ça va venir !"+this.reTry);
            }

            this.timeWaited++;
            if (this.timeWaited == this.waitingIdle && this.moment == "idle") {
                this.newAction();
            }
            else if (this.timeWaited == this.waitingAction && this.moment == "action") {
                this.score -= 5;
                this.goingIdle();
            }

            if (this.gameOn)
                setTimeout(() => { this.tick() }, 100);

        },
        newAction: function () {
            this.timeWaited = 0;
            let actionChoosen = Math.floor(Math.random() * 3);
            this.actionNeeded = this.actionsNumbers[actionChoosen];
            this.moment = "action";
        },
        goingIdle: function () {
            this.timeWaited = 0;
            this.actionNeeded = "vide";
            this.moment = "idle";
        },
        clickAction: function (action) {
            if (this.actionNeeded == "vide")
                return null;

            if (action == this.actionNeeded) {
                this.score += 2;
                this.goingIdle();
            }
            else {
                this.score -= 10;
                this.goingIdle();
            }
        }
    }
})