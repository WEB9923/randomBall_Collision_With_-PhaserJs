let b = { };
class BallScene extends Phaser.Scene {
    constructor() {
        super('BallScene');
    }
    preload(){
        b.number = 30;
        for (let i = 0; i < b.number; i++) {
            b.circle = this.add.circle(
                Math.random() * config.width,
                Math.random() * config.height,
                this.randomBallSize(),
                this.randomColor()
            );
            this.physics.add.existing(b.circle);
            b.circle.body.setVelocity(
                this.randomVelocity(),
                this.randomVelocity()
            );
            b.circle.body.setCollideWorldBounds(true,1,1,true);
        }
    }
    randomBallSize(){
        let randomSize = Math.floor(Math.random() * 30)
        if(randomSize < 10){
            randomSize = 15;
        }
        return randomSize
    }
    randomVelocity(){
        let ch = Math.floor(Math.random() * 2);
        if(ch === 1){
            return Math.floor(Math.random() * 200) + 100
        } else{
            return -Math.floor(Math.random() * 200) - 100
        }
    }
    randomColor(){
        let d = '0123456789abcdef';
        let h = '';
        for (let i = 0; i < 6; i++) {
            h += d[Math.floor(Math.random() * 16)]
        }
        return Number('0x' + h)
    }
    create(){

    }
    update(){

    }
}