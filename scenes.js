let apple_con = false;

class Title extends Phaser.Scene {
    constructor() {
        super('title');
    }

    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.add.text(50, 100, "This is where the title scene goes.");
        
        apple_con = false;

        this.input.on("pointerdown", () => {
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.time.delayedCall(1000, () => {
                this.scene.start("gameplay");
            });
        });
    }
}

class Gameplay extends Phaser.Scene {
    constructor() {
        super('gameplay');
    }

    preload() {
        this.load.image("apple", "./assets/apple.png");
    }

    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.add.text(50, 100, "Backyard scene, start of gameplay.");

        let credits = this.add.text(600, 100, "Credits here")
            .setInteractive()
            .on('pointerdown', () => {
                this.cameras.main.fadeOut(1000, 0, 0, 0);
                this.time.delayedCall(1000, () => {
                    if (apple_con == false) {
                        this.scene.start("credits");
                    } else if (apple_con == true) {
                        this.scene.start("better_credits");
                    }
            });
        });

        let settings = this.add.text(500, 700, "Settings will go here.")
            .setInteractive()
            .on('pointerdown', () => {
                this.cameras.main.fadeOut(1000, 0, 0, 0);
                this.time.delayedCall(1000, () => {
                    this.scene.start("settings");
                });
            });

        let apple = this.add.image(100, 600, "apple")
            .setInteractive()
            .on('pointerdown', () => {
                apple.destroy();
                apple_con = true;
            });

        if (apple_con == true) {
            apple.destroy();
        }
    }
}

class Credits extends Phaser.Scene {
    constructor() {
        super('credits');
    }

    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.add.text(50, 100, "This is where the credits will go.");

        this.add.text(50, 500, "Go back to title screen.")
            .setInteractive()
            .on('pointerdown', () => {
                this.cameras.main.fadeOut(1000, 0, 0, 0);
                this.time.delayedCall(1000, () => {
                    this.scene.start('title');
                });
            });

        this.add.text(50, 300, "You did not click on the apple.");
    }
}

class Settings extends Phaser.Scene {
    constructor() {
        super('settings');
    }

    preload() {
        this.load.image("sound_settings", "./assets/sound.png");
    }

    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.add.text(50, 100, "This is where settings will go.");

        this.add.image(200, 200, "sound_settings");

        this.add.text(50, 400, "^ Similar settings will be added. Renjs has a settings scene we can use.");

        this.add.text(400, 600, "Back to gameplay")
            .setInteractive()
            .on('pointerdown', () => {
                this.cameras.main.fadeOut(1000, 0, 0, 0);
                this.time.delayedCall(1000, () => {
                    this.scene.start('gameplay');
                })
            });
    }
}

class betterCredits extends Phaser.Scene {
    constructor() {
        super('better_credits');
    }

    create() {
        this.add.text(50, 100, "Congratulations, you picked up the apple!")
            .setFontSize(25);
        
        this.add.text(50, 600, "Back to title screen.")
            .setInteractive()
            .on('pointerdown', () => {
                this.cameras.main.fadeOut(1000, 0, 0, 0);
                this.time.delayedCall(1000, () => {
                    this.scene.start("title");
                });
            });
    }
}