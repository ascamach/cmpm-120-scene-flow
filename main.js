const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 800,

    scene: [Title, Gameplay, Credits, Settings],
    title: "CMPM 120 Scene Flow Prototype"
})