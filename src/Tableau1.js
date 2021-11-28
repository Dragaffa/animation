
class Tableau1 extends Phaser.Scene{

    preload() {
        for (let i = 1; i <= 10; i++) {
            this.load.image('idle'+i, 'assets/characters/boy/boy2/PNG/idle/Layer-' + i + '.png');
        }
        for (let i = 1; i <= 10; i++) {
            this.load.image('enemy'+i, 'assets/characters/enemy 1/PNG/idle/Layer-' + i + '.png');
        }
        for (let i = 1; i <= 6; i++) {
            this.load.image('enemy2'+i, 'assets/characters/enemy 2/PNG/idle/Layer-' + i + '.png');
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

        this.enemy = this.add.sprite(200, 50, 'enemy').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'enemy',
            frames: this.getFrames("enemy",10),
            frameRate: 12,
            repeat: -1
        });
        this.enemy.play('enemy');

        this.enemy2 = this.add.sprite(50, 50, 'enemy2').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'enemy2',
            frames: this.getFrames("enemy2",10),
            frameRate: 12,
            repeat: -1
        });
        this.enemy2.play('enemy2');
    }




    initKeyboard()
        {

    }



    update(){

    }


}
