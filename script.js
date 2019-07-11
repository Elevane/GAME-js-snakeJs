window.onload = function(){

    const SCREENWIDTH = 500;
    const SCREENHEIGHT = 500;

    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    var direction = 'right';
    var snakex = 40;
    var snakey = 40;

    var apple = true;
    var appleX = 140;
    var appleY = 140;
    var snakeSize = 20;
    var vel = 20;


    function draw (){
    var canva = document.getElementById('canva');

    // draw map
    var ctx = canva.getContext('2d');
    ctx.fillStyle = "#4287f5";
    ctx.fillRect(0,0,SCREENWIDTH,SCREENHEIGHT);
    
    // draw snake
    ctx.fillStyle = "#ff3c00";
    ctx.fillRect(snakex,snakey, snakeSize,snakeSize);
    
    //draw apple
    ctx.fillStyle = "#4bdb5b";
    ctx.fillRect(appleX,appleY, snakeSize,snakeSize);
   

    //snake apear on other side
    if(snakex >= SCREENWIDTH-snakeSize && direction == 'right'){
        console.log('touché');
        snakex = 0;
    }
    else if (snakex <= 0 + snakeSize && direction =='left'){
        snakex = SCREENWIDTH;
    }

    else if (snakey <= 0 + snakeSize && direction =='up'){
        snakey = SCREENHEIGHT;
    }

    else if (snakex >= SCREENHEIGHT - snakeSize && direction =='down'){
        snakey = 0;
    }
    //draw snake i nteh direction of keypressed
    switch (direction){
        case 'right':
            snakex += vel;
            break;
        case 'left':
                snakex -= vel;
                break;
        case 'up':
                snakey -= vel;
                break;
        case 'down':
                snakey += vel;
                break;

    }

    // Handle event key pressed
    document.onkeydown = function handleKeyDown(event){
    var keyPressed = event.keyCode;
    if (keyPressed === LEFT_KEY ) {    direction = 'left'  }
    if (keyPressed === RIGHT_KEY ) {    direction ='right'  }
    if (keyPressed === UP_KEY ) {    direction = 'up'  }
    if (keyPressed === DOWN_KEY ) {    direction = 'down'  }
    }

    
    }
    if (snakex == appleX){
        apple == false;
    }

    if(apple == false){
        snakeX.getAppleX();
        snakeY.getAppleY();
    }


    function getAppleX(){
        lignex = [20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,480];
       
        this.appleX = Math.floor(Math.random() * Math.floor(lignex.length));
    }

    function getAppleY(){
        
        ligney = [20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,480];

        this.appleY = Math.floor(Math.random() * Math.floor(ligney.length));
    }


   
    // rehcarge tout
    console.log('x : ' + snakex+ "||  y : "+ snakey);
    console.log('applex : ' + appleX+ "||  appley : "+ appleY);
    setInterval(draw, 200);
    
    
}