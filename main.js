const config = {
    type: Phaser.AUTO,
    width: innerWidth,
    height: innerHeight,
    backgroundColor: '#123456',
    physics: {
        default: 'arcade',
        arcade:{
            gravity: { x:0, y:0 },
            debug: false
        }
    },
    scene: [BallScene]
}
const game = new Phaser.Game(config);
