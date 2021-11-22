
class Tableau1 extends Phaser.Scene{

    preload() {
        for (let i = 1; i <= 10; i++) {
            this.load.image('idle'+i, 'assets/characters/boy/boy2/PNG/idle/Layer-' + i + '.png');

        for (let i = 1; i <= 9; i++) {
            this.load.image('mort'+i, 'assets/characters/boy/boy2/PNG/die/die' + i + '.png');
        }
        }
    }

    getFrames(prefix,length){
        let frames=[];
        for (let i=1;i<=length;i++){
            frames.push({key: prefix+i});
        }
        return frames;
    }


    create(){
        this.idle = this.add.sprite(500, 110, 'idle').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'idle',
            frames: this.getFrames("idle",10),
            frameRate: 12,
            repeat: -1
        });
        this.idle.play('idle');
    }

    create(){
        this.mort = this.add.sprite(500, 110, 'mort').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'mort',
            frames: this.getFrames("mort",10),
            frameRate: 12,
            repeat: -1
        });
        this.mort.play('mort');
    }
    //this.mort.visible=false;

    initKeyboard()
        {

    }



    update(){

    }


}
