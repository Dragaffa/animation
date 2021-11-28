/**
 * ALGO : ceci est une classe...
 * Vous voyez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
la classe  Tableau1  étend  Phaser . Scène {
    /**
     * Précharger les actifs
     */
    précharger ( )  {
        //petit personnage meurt:
        ça . charge . image ( 'mort1' ,  'assets/Characters/boy/boy_style_2/PNG/die/Layer-1.png' ) ;
        ça . charge . image ( 'mort2' ,  'assets/Characters/boy/boy_style_2/PNG/die/Layer-2.png' ) ;
        ça . charge . image ( 'mort3' ,  'assets/Characters/boy/boy_style_2/PNG/die/Layer-3.png' ) ;
        ça . charge . image ( 'mort4' ,  'assets/Characters/boy/boy_style_2/PNG/die/Layer-4.png' ) ;
        ça . charge . image ( 'mort5' ,  'assets/Characters/boy/boy_style_2/PNG/die/Layer-5.png' ) ;
        ça . charge . image ( 'mort6' ,  'assets/Characters/boy/boy_style_2/PNG/die/Layer-6.png' ) ;
        ça . charge . image ( 'mort7' ,  'assets/Characters/boy/boy_style_2/PNG/die/Layer-7.png' ) ;
        ça . charge . image ( 'mort8' ,  'assets/Characters/boy/boy_style_2/PNG/die/Layer-8.png' ) ;
        ça . charge . image ( 'mort9' ,  'assets/Characters/boy/boy_style_2/PNG/die/Layer-9.png' ) ;


        //bg 2 (tout au fond et très flou)
        ça . charge . image ( 'bg2-terrain-2' ,  'assets/level/background-2/bg2-terrain-2.png' ) ;
        ça . charge . image ( 'bg2-tree-2' ,  'assets/level/background-2/bg2-tree-2.png' ) ;
        ça . charge . image ( 'bg2-terrain-1' , 'assets/level/background-2/bg2-terrain-1.png' )
        ça . charge . image ( 'bg2-tree-3' , '/assets/level/background-2/bg2-tree-3.png' )



        //bg 1 (gris légèrement flou)
        ça . charge . image ( 'bg1-terrain-3' ,  'assets/level/background-1/bg-terrain-3.png' ) ;
        ça . charge . image ( 'bg1-tree-1' ,  'assets/level/background-1/bg-tree-1.png' ) ;
        ça . charge . image ( 'bg1-tree-3' ,  'assets/level/background-1/bg-tree-3.png' ) ;
        ça . charge . image ( 'bg1-terrain-1' ,  'assets/level/background-1/bg-terrain-1.png' ) ;
        ça . charge . image ( 'bg1T4' ,  'assets/level/background-1/bg-terrain-4.png' ) ;
        ça . charge . image ( 'pontFlou' ,  'assets/level/background-1/bg-wooden-bridge.png' ) ;

        //terrain (premier plan noir)
        ça . charge . image ( 'gMid' ,  'assets/level/ground/g-mid.png' ) ;
        ça . charge . image ( 'gRight' ,  'assets/level/ground/g-right.png' ) ;
        ça . charge . image ( 'gTree1' ,  'assets/level/ground/g-tree-1.png' ) ;
        ça . charge . image ( 'gLeft' ,  'assets/level/ground/g-left.png' ) ;

        ça . charge . image ( 'gStone2' ,  'assets/level/ground/g-stone-2.png' ) ;
        ça . charge . image ( 'gTree2' ,  'assets/level/ground/g-tree-2.png' ) ;
        ça . charge . image ( 'gMushroom1' ,  'assets/level/ground/g-mushroom1.png' ) ;
        ça . charge . image ( 'gTree3' ,  'assets/level/ground/g-tree-3.png' ) ;
        ça . charge . image ( 'gLeft' ,  'assets/level/ground/g-left.png' ) ;
        ça . charge . image ( 'gStone4' ,  'assets/level/ground/g-stone-4.png' ) ;
        ça . charge . image ( 'gWB' ,  'assets/level/ground/g-wooden-bridge.png' ) ;
        ça . charge . image ( 'gWater' ,  'assets/level/ground/g-water.png' ) ;
        ça . charge . image ( 'gBox' ,  'assets/level/ground/g-box-2.png' ) ;
        ça . charge . image ( 'gVine' ,  'assets/level/ground/g-vine-a.png' ) ;

        ça . charge . image ( 'gStone5' ,  'assets/level/ground/g-stone-5.png' ) ;
        ça . charge . image ( 'gRight2' ,  'assets/level/ground/g-right.png' ) ;
        ça . charge . image ( 'gRight3' ,  'assets/level/ground/g-right.png' ) ;
        ça . charge . image ( 'grass2' ,  'assets/level/ground/g-grass-2.png' ) ;
        ça . charge . image ( 'gTron1' ,  'assets/level/ground/g-fellen-tree-1.png' ) ;
        ça . charge . image ( 'gSpike' ,  'assets/level/ground/g-spike-1.png' ) ;
        ça . charge . image ( 'zombie' ,  'assets/level/zombie/z1.png' ) ;

        ça . charge . image ( 'zombie1' ,  'assets/level/zombie/z8.png' ) ;

        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        pour  ( soit  i  =  1 ;  i  <=  5 ;  i ++ )  {
            ça . charge . image ( 'g-grass-'  +  i ,  'assets/level/ground/g-grass-'  +  i  +  '.png' ) ;
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        pour  ( soit  a  =  1 ;  a  <=  3 ;  a ++ )  {
            ça . charge . image ( 'filterFilm'  +  a ,  'assets/level/filters/film/frame-'  +  a  +  '.png' ) ;
        }
        pour  ( soit  a  =  1 ;  a  <=  3 ;  a ++ )  {
            ça . charge . image ( 'filterBlood'  +  a ,  'assets/level/filters/bloody/frame'  +  a  +  '.png' ) ;
        }
        //texture au fond TODO élève : faire une boucle pour charger les 3 images et par la même que vous savez aller au plus simple
        pour  ( soit  g  =  1 ;  g  <=  3 ;  g ++ )  {
            ça . charge . image ( 'bg-animation-'  +  g ,  'assets/level/background-2/bg-animation/bg-animation-'  +  g  +  '.png' ) ;
        }
        //texture au fond TODO élève : faire une boucle pour charger les 3 images et par la même que vous savez aller au plus simple
        pour  ( soit  g  =  1 ;  g  <=  3 ;  g ++ )  {
            ça . charge . image ( 'filterRain'  +  g ,  'assets/level/weather/rain/frame'  +  g  +  '.png' ) ;
        }
        //texture au fond TODO élève : faire une boucle pour charger les 3 images et par la même que vous savez aller au plus simple
        pour  ( soit  g  =  1 ;  g  <=  5 ;  g ++ )  {
            ça . charge . image ( 'filterSnow'  +  g ,  'assets/level/weather/neige/frame'  +  g  +  '.png' ) ;
        }
    }


    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    créer ( ) {

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        laissez  bgAnimationA = ceci . ajouter . sprite ( 0 , 0 ,  'bg-animation-1' ) . setOrigin ( 0 , 0 ) ;

        //----------------fond 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @voir https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        ça . bg2Conteneur = ceci . ajouter . conteneur ( 0 , 0 ) ;
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        laissez  bg2Terrain2 = ceci . ajouter . image ( - 100 , 150 ,  'bg2-terrain-2' ) . setOrigin ( 0 , 0 ) ;
        ça . bg2Conteneur . add ( bg2Terrain2 ) ;




        laissez  bg2Terrain1 = ceci . ajouter . image ( 1000 , 100 ,  'bg2-terrain-1' ) . setOrigin ( 0 , 0 ) ;
        ça . bg2Conteneur . add ( bg2Terrain1 ) ;

        laissez  bg2Terrain12 = ceci . ajouter . image ( 1500 ,  400 , 'bg2-terrain-1' ) . setOrigin ( 0 , 0 ) ;
        ça . bg2Conteneur . ajouter ( bg2Terrain12 ) ;

        laissez  bg2tree3 = ceci . ajouter . image ( 800 , - 50 ,  'bg2-tree-3' ) . setOrigin ( 0 , 0 ) ;
        ça . bg2Conteneur . ajouter ( bg2tree3 ) ;

        laissez  bg2tree32 = ceci . ajouter . image ( 1900 , - 50 ,  'bg2-tree-3' ) . setOrigin ( 0 , 0 ) ;
        ça . bg2Conteneur . ajouter ( bg2tree32 ) ;
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        laissez  bg2Tree2 = ceci . ajouter . image ( 400 , - 50 ,  'bg2-tree-2' ) . setOrigin ( 0 , 0 ) ;
        ça . bg2Conteneur . add ( bg2Tree2 ) ;
        bg2Tree2 . angle = - 5 ;  //pencher l'arbre de -5 degrés

        //--------------fond 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        ça . bg1Conteneur = ceci . ajouter . conteneur ( 0 , 0 ) ;

        laissez  bg1Terrain3 = ceci . ajouter . image ( - 425 , 200 ,  'bg1-terrain-3' ) . setOrigin ( 0 , 0 ) ;
        ça . bg1Conteneur . add ( bg1Terrain3 ) ;

        laissez  bg1T4 = ceci . ajouter . image ( 700 , 200 ,  'bg1T4' ) . setOrigin ( 0 , 0 ) ;
        ça . bg1Conteneur . ajouter ( bg1T4 ) ;

        laissez  bg1T42 = ceci . ajouter . image ( 1700 , 200 ,  'bg1T4' ) . setOrigin ( 0 , 0 ) ;
        ça . bg1Conteneur . ajouter ( bg1T42 ) ;

        laissez  bg1Terrain1 = ceci . ajouter . image ( 700 , 300 ,  'bg1-terrain-1' ) . setOrigin ( 0 , 0 ) ;
        ça . bg1Conteneur . add ( bg1Terrain1 ) ;
        bg1Terrain1 . setScale ( 0.5 )
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        laissez  bg1Tree1 = ceci . ajouter . image ( - 25 , - 40 ,  'bg1-tree-1' ) . setOrigin ( 0 , 0 ) ;
        ça . bg1Conteneur . add ( bg1Tree1 ) ;
        bg1Arbre1 . setScale ( 0.7 )

        laissez  bg1Tree3 = ceci . ajouter . image ( 3000 , 100 ,  'bg1-tree-3' ) . setOrigin ( 0 , 0 ) ;
        ça . bg1Conteneur . add ( bg1Tree3 ) ;
        bg1Arbre3 . setScale ( 0.6 )

        laissez  bg1Tree32 = ceci . ajouter . image ( 1300 , - 80 ,  'bg1-tree-3' ) . setOrigin ( 0 , 0 ) ;
        ça . bg1Conteneur . ajouter ( bg1Tree32 ) ;
        bg1Arbre3 . setScale ( 0.2 )

        laissez  bg1Tree322 = ceci . ajouter . image ( 1150 , - 80 ,  'bg1-tree-1' ) . setOrigin ( 0 , 0 ) ;
        ça . bg1Conteneur . ajouter ( bg1Tree322 ) ;

        laissez  bg1Tree3222 = ceci . ajouter . image ( 2000 , - 80 ,  'bg1-tree-1' ) . setOrigin ( 0 , 0 ) ;
        ça . bg1Conteneur . ajouter ( bg1Tree3222 ) ;

        laissez  bg1Tree3223 = ceci . ajouter . image ( 1900 , - 80 ,  'bg1-tree-1' ) . setOrigin ( 0 , 0 ) ;
        ça . bg1Conteneur . ajouter ( bg1Tree3223 ) ;


        soit  pontFlou = this . ajouter . image ( 1500 , - 80 ,  'pontFlou' ) . setOrigin ( 0 , 0 ) ;
        ça . bg1Conteneur . ajouter ( pontFlou ) ;

        //-------------terrain (premier plan noir)---------------------------

        /**petit personnage meurt
         /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        ça . GroundContainer = this . ajouter . conteneur ( 0 , 0 ) ;
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        laissez  tree2 = this . ajouter . image ( 250 , 375 ,  'gTree2' ) . setOrigin ( 0 , 1 ) ;
        ça . GroundContainer . ajouter ( arbre2 ) ;
        arbre2 . setScale ( 0.7 )

        laissez  tree21 = this . ajouter . image ( 1120 , 380 ,  'gTree2' ) . setOrigin ( 0 , 1 ) ;
        ça . GroundContainer . ajouter ( arbre21 ) ;
        arbre21 . setScale ( 0.7 )

        laissez  tree3 = this . ajouter . image ( 30 , 375 ,  'gTree3' ) . setOrigin ( 0 , 1 ) ;
        ça . GroundContainer . add ( arbre3 ) ;
        arbre3 . setScale ( 0.7 )

        laissez  tree1 = this . ajouter . image ( 900 , 385 ,  'gTree1' ) . setOrigin ( 0 , 1 ) ;
        ça . GroundContainer . add ( arbre1 ) ;

        arbre1 . angle = - 10

        /**
         * zombie
         * @type {Phaser.GameObjects.Image}
         */

        laissez  zombie = ceci . ajouter . image ( 1710 , 170 ,  'zombie' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . ajouter ( zombie ) ;
        zombie . angle = 3

        laissez  zombie1 = ceci . ajouter . image ( 320 , 190 ,  'zombie1' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . add ( zombie1 ) ;

        /**
         * tron
         * @type {Phaser.GameObjects.Image}
         */

        laissez  gTron1 = this . ajouter . image ( 1610 , 295 ,  'gTron1' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . ajouter ( gTron1 ) ;
        gTron1 . angle = 5
        gTron1 . setScale ( 0.8 )

        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        laissez  gRight3 = this . ajouter . image ( 950 , 368 ,  'gMid' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . add ( gDroite3 ) ;

        laissez  gRight2 = this . ajouter . image ( 1100 , 368 ,  'gDroit' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . add ( gDroite2 ) ;

        laissez  gRight21 = this . ajouter . image ( 1250 , 368 ,  'gDroit' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . ajouter ( gDroit21 ) ;

        laissez  gRight22 = this . ajouter . image ( 1300 , 368 ,  'gDroit' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . ajouter ( gDroite22 ) ;

        laissez  gRight23 = this . ajouter . image ( 1450 , 368 ,  'gDroit' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . ajouter ( gDroite23 ) ;

        laissez  gLeft = this . ajouter . image ( 1900 , 380 ,  'gLeft' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . add ( gGauche ) ;

        //ici on va calculer les postes
        laissez  gMid1 = this . ajouter . image ( - 150 , 350 ,  'gMid' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . ajouter ( gMid1 ) ;
        /**
         * Herbe dans l'eau
         * @type {Phaser.GameObjects.TileSprite}
         */
        laissez  gGrass7 = this . ajouter . image ( 425 , 400 ,  'g-herbe-4' ) . setOrigin ( 0 , 0 ) ;
        gGrass7 . setScale ( 2.5 )
        ça . GroundContainer . add ( gGrass7 ) ;

        laissez  gGrass8 = this . ajouter . image ( 575 , 400 ,  'g-herbe-4' ) . setOrigin ( 0 , 0 ) ;
        gGrass8 . setScale ( 2.5 )
        ça . GroundContainer . add ( gGrass8 ) ;

        laissez  gGrass9 = this . ajouter . image ( 685 , 400 ,  'g-herbe-4' ) . setOrigin ( 0 , 0 ) ;
        gGrass9 . setScale ( 2.5 )
        ça . GroundContainer . add ( gGrass9 ) ;
        /**
         * De l'eau
         * @type {Phaser.GameObjects.TileSprite}
         */
        laissez  gWater = this . ajouter . image ( 425 , 385 ,  'gWater' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . add ( gEau ) ;
        /**
         * roche
         * @type {Phaser.GameObjects.Image}
         */

        laissez  gStone51 = this . ajouter . image ( 1060 , 320 ,  'gStone5' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . ajouter ( gStone51 ) ;
        gStone51 . setScale ( 2.0 )

        laissez  gStone41 = this . ajouter . image ( 950 , 350 ,  'gStone4' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . ajouter ( gStone41 ) ;

        laissez  gStone42 = this . ajouter . image ( 1070 , 350 ,  'gStone4' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . ajouter ( gStone42 ) ;


        laissez  gStone2 = this . ajouter . image ( 350 , 335 ,  'gStone2' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . add ( gStone2 ) ;

        laissez  gStone4 = this . ajouter . image ( 790 , 350 ,  'gStone4' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . ajouter ( gStone4 ) ;
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        laissez  gMid2 = this . ajouter . image ( gMid1 . x + gMid1 . width + 1 , 350 ,  'gMid' ) . setOrigin ( 0 , 0 ) ;  //on rajoute 1 px pour l'exemple
        ça . GroundContainer . ajouter ( gMid2 ) ;
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        laissez  gMid3 = this . ajouter . image ( gMid2 . x + gMid2 . width , 350 ,  'gRight' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . ajouter ( gMid3 ) ;
        /**
         * Terrain 4
         * @type {Phaser.GameObjects.Image}
         */
        laissez  gMid4 = this . ajouter . image ( 775 , 365 ,  'gLeft' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . ajouter ( gMid4 ) ;

        /**
         * De l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        laissez  gGrass1 = this . ajouter . image ( 390 , 310 ,  'g-herbe-1' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . add ( gGrass1 ) ;

        laissez  gGrass12 = this . ajouter . image ( 1425 , 330 ,  'g-herbe-1' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . add ( gGrass12 ) ;

        laissez  gGrass2 = this . ajouter . image ( 340 , 310 ,  'g-herbe-2' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . add ( gGrass2 ) ;

        laissez  gGrass5 = this . ajouter . image ( 175 , 300 ,  'g-herbe-5' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . add ( gGrass5 ) ;

        laissez  gGrass3 = this . ajouter . image ( 105 , 300 ,  'g-herbe-3' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . add ( gGrass3 ) ;

        laissez  gGrass31 = this . ajouter . image ( 1550 , 330 ,  'g-herbe-3' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . add ( gGrass31 ) ;


        laissez  gGrass4 = this . ajouter . image ( 5 , 310 ,  'g-herbe-4' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . add ( gGrass4 ) ;

        laissez  gGrass6 = this . ajouter . image ( 875 , 325 ,  'g-herbe-5' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . add ( gGrass6 ) ;

        let  grass2 = this . ajouter . image ( 1045 , 310 ,  'g-herbe-5' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . ajouter ( herbe2 ) ;

        laissez  gSpike = this . ajouter . image ( 1635 , 420 ,  'gSpike' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . add ( gSpike ) ;
        gSpike . setScale ( 1.5 )
        /**
         * Champignon
         * @type {Phaser.GameObjects.TileSprite}
         */
        laissez  gMushroom1 = this . ajouter . image ( 140 , 268 ,  'gMushroom1' ) . setOrigin ( 0 , 0 ) ;
        gChampignon1 . angle = 10 ;
        ça . GroundContainer . add ( gChampignon1 ) ;

        laissez  gMushroom12 = this . ajouter . image ( 1460 , 327 ,  'gMushroom1' ) . setOrigin ( 0 , 0 ) ;
        ça . GroundContainer . add ( gMushroom12 ) ;
        gChampignon12 . setScale ( 0.6 )
        /**
         * pont
         * @type {Phaser.GameObjects.TileSprite}
         */
        soit  gWB = this . ajouter . image ( 425 , 300 ,  'gWB' ) . setOrigin ( 0 , 0 ) ;
        gWB . setScale ( 0.8 )
        ça . GroundContainer . ajouter ( gWB ) ;
        /**
         * Caisse
         * @type {Phaser.GameObjects.TileSprite}
         */
        laissez  gBox = this . ajouter . image ( 525 , 293 ,  'gBox' ) . setOrigin ( 0 , 0 ) ;
        gBox . setScale ( 0.6 )
        gBox . angle = 5
        ça . GroundContainer . add ( gBox ) ;
        /**
         * liane
         * @type {Phaser.GameObjects.TileSprite}
         */
        laissez  gVine = this . ajouter . tileSprite ( 570 , - 3 ,  20 ,  400 , 'gVine' ) . setOrigin ( 0 , 0 ) ;
        gVine . setScale ( 0.5 )
        ça . GroundContainer . add ( gVine ) ;
        laissez  gVine2 = this . ajouter . tileSprite ( 600 , - 3 ,  20 ,  250 , 'gVine' ) . setOrigin ( 0 , 0 ) ;
        gVine2 . setScale ( 0.5 )
        ça . GroundContainer . add ( gVine2 ) ;

        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        ça . filterFilm  =  ceci . ajouter . sprite ( 0 ,  0 ,  'filterFilm1' ) . setOrigin ( 0 , 0 ) ;
        //animation de 3 images
        ça . animés . créer ( {
            clé : 'film' ,
            cadres : [
                { clé : 'filterFilm1' } ,
                { clé : 'filterFilm2' } ,
                { clé : 'filterFilm3' } ,
                { clé : '' } ,
            ] ,
            FrameRate : 16 ,
            répéter : - 1
        } ) ;
        ça . filtreFilm . jouer ( 'film' ) ;

        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        ça . filterSnow  =  ceci . ajouter . sprite ( 0 ,  0 ,  'filterSnow1' ) . setOrigin ( 0 , 0 ) ;
        //animation de 3 images
        ça . animés . créer ( {
            clé : 'neige' ,
            cadres : [
                { clé : 'filterSnow1' } ,
                { clé : 'filterSnow2' } ,
                { clé : 'filterSnow3' } ,
                { clé : 'filterSnow4' } ,
                { clé : 'filterSnow5' } ,
            ] ,
            FrameRate : 16 ,
            répéter : - 1
        } ) ;
        ça . filtreNeige . jouer ( 'neige' ) ;
        ça . filtreNeige . visible = faux ;

        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        ça . filterBlood  =  ceci . ajouter . sprite ( 0 ,  0 ,  'filterBlood1' ) . setOrigin ( 0 , 0 ) ;
        //animation de 3 images
        ça . animés . créer ( {
            clé : 'Sang' ,
            cadres : [
                { clé : 'filterBlood1' } ,
                { clé : 'filterBlood2' } ,
                { clé : 'filterBlood3' } ,
            ] ,
            FrameRate : 16 ,
            répéter : - 1
        } ) ;
        ça . filtreSang . jouer ( 'Sang' ) ;

        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        ça . filterRain  =  ceci . ajouter . sprite ( 0 ,  0 ,  'filterRain1' ) . setOrigin ( 0 , 0 ) ;
        //animation de 3 images
        ça . animés . créer ( {
            touche : 'pluie' ,
            cadres : [
                { clé : 'filterRain1' } ,
                { clé : 'filterRain2' } ,
                { clé : 'filterRain3' } ,
            ] ,
            FrameRate : 16 ,
            répéter : - 1
        } ) ;
        ça . filtrePluie . jouer ( 'pluie' ) ;

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {nombre}
         */
        ça . vitesse = 0 ;
        //initialiser ce qui se passe avec le clavier
        ça . initKeyboard ( ) ;
        // Définit l'espace de déplacement de la caméra
        ça . caméras . principal . setBounds ( 0 ,  0 ,  1073 ,  540 ) ;
        //définit à quelle vitesse se déplacent nos différents plans
        bgAnimationA . scrollFactorX = 0 ;
        ça . filtreFilm . scrollFactorX = 0 ;
        ça . filtreSang . scrollFactorX = 0 ;
        ça . filtrePluie . scrollFactorX = 0 ;
        ça . filtreNeige . scrollFactorX = 0 ;
        ça . bg2Conteneur . scrollFactorX = 10 ;
        ça . bg1Conteneur . scrollFactorX = 10 ;
        ça . GroundContainer . scrollFactorX = 10 ;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard ( ) {
        laissez-  moi = ceci ;
        ça . entrée . clavier . on ( 'keydown' ,  fonction ( kevent )
        {
            commutateur  ( kevent . keyCode )
            {
                cas  Phaser . Entrée . Clavier . Codes clés . DROITE :
                moi . vitesse = 1 ;
                pause ;
                cas  Phaser . Entrée . Clavier . Codes clés . A GAUCHE :
                moi . vitesse = - 1 ;
                pause ;
                cas  Phaser . Entrée . Clavier . Codes clés . S :
                moi . filtreNeige . visible = faux ;
                moi . filtrePluie . visible = faux ;
                pause ;
                cas  Phaser . Entrée . Clavier . Codes clés . P :
                moi . filtreNeige . visible = faux ;
                moi . filtrePluie . visible = vrai ;
                pause ;
                cas  Phaser . Entrée . Clavier . Codes clés . N :
                moi . filtreNeige . visible = vrai ;
                moi . filtrePluie . visible = faux ;
                pause ;
            }
        } ) ;
        ça . entrée . clavier . on ( 'keyup' ,  fonction ( kevent )
        {
            commutateur  ( kevent . keyCode )
            {
                cas  Phaser . Entrée . Clavier . Codes clés . DROITE :
                cas  Phaser . Entrée . Clavier . Codes clés . A GAUCHE :
                moi . vitesse = 0 ;
                pause ;
            }
        } ) ;
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    mettre à jour ( ) {
        //déplacement de la caméra
        ça . caméras . principal . scrollX += this . vitesse ;  // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        ça . filtreFilm . setAlpha ( Phaser . Math . Entre ( 95 , 100 ) / 100 )
    }


}