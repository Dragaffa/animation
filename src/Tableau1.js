
class Tableau1 extends Phaser.Scene{

    preload() {
        for (let i = 1; i <= 10; i++) {
            this.load.image('idle'+i, 'assets/characters/boy/boy2/PNG/idle/Layer-1' + i + '.png');
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
        this.die = this.add.sprite(425, 110, 'idle').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'idle',
            frames: this.getFrames("idle",10),
            frameRate: 12,
            repeat: -1
        });
        this.die.play('idle');



    }


    initKeyboard()
        {

    }



    update(){

    }


}
