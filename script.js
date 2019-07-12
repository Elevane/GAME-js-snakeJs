window.onload = function(){

    const SCREENWIDTH = 500;
    const SCREENHEIGHT = 500;

    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    const ESC_KEY = 32;

    var direction = 'right';
    var snakex = 40;
    var snakey = 40;
    var apple = true; // apple exist
    var appleX = 240; // first appleX
    var appleY = 240; // firs apple y
    var snakeSize = 20;
    var vel = 20;

    //coordinates of teh first snake head
    var snake = [ {
            x: snakex,
            y: snakey
        }
    ];
    var score = 0;

    // when game is over, restart the game
    function restart(){
        direction = 'right';
             snakeX = 40;
             snakeY = 40;
             appleX = 240; 
             appleY = 240; 

            run = setInterval(draw, 100); 
         snake = [ {
            x: snakeX,
            y: snakeY
            }
        ];
         score = 0;

    }


     // Handle event key pressed
     document.onkeydown = function handleKeyDown(event){
        var keyPressed = event.keyCode;
        if (keyPressed == LEFT_KEY && direction != "right") {    direction = 'left'  }
        if (keyPressed == RIGHT_KEY && direction != "left" ) {    direction ='right'  }
        if (keyPressed == UP_KEY && direction != "down" ) {    direction = 'up'  }
        if (keyPressed == DOWN_KEY && direction != "up" ) {    direction = 'down'  }
        if (keyPressed == ESC_KEY ) {  restart() }
        }

    function draw (){


        // coordinates of the snake
        //console.log('x : ' + snakex+ "||  y : "+ snakey);
        var canva = document.getElementById('canva');

        // draw map
        var ctx = canva.getContext('2d');
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,SCREENWIDTH,SCREENHEIGHT);
        
        
        
        // draw snake part one by one
        function drawSnakePart(snakePart) {     
        ctx.fillStyle = "green";
        ctx.strokeStyle = "white";
        ctx.fillRect(snakePart.x, snakePart.y, snakeSize, snakeSize); }
        

        // draw teh snake entirely according to every part of teh array/snake
        function drawSnake() {snake.forEach(drawSnakePart);}
        //call the draw snake function
        drawSnake();


        //draw apple
        ctx.fillStyle = "red";
        ctx.fillRect(appleX,appleY, snakeSize,snakeSize);

        // the current head coordinates
        let snakeX = snake[0].x;
        let snakeY = snake[0].y;



        // change of direction according to the event handler
        switch(direction){
            case 'right':
                    snakeX += vel;
                break;
            case 'left':
                    snakeX -= vel;
                break;
            case 'up':
                    snakeY -= vel;
                break;
            case 'down':
                    snakeY += vel;
                break;           
        }
        

        if(snakeX >= SCREENWIDTH || snakeX <= -1 || snakeY >= SCREENHEIGHT || snakeY <= -1){
            clearInterval(run);
            ctx.fillStyle = "white";
            ctx.font = "20px Arial";
            ctx.fillText("|| Press Space to restart ||", 80, 450);
        }
            
            

       
        // if he eats an apple draw another one otherwise pop the last cube so the snake appearing to move
        if (snake[0].x == appleX && snake[0].y == appleY){
            apple = false;
            score ++;
        }
        else {
            snake.pop();
        }
        if(apple == false){
            getAppleXY();
            apple = true;
            //coordinates of the apple
            //console.log('applex : ' + appleX+ "||  appley : "+ appleY);
        }


        // get coordinates of the first cube according to the direction
        let newHead = {
            x : snakeX,
            y : snakeY
        }

        
        
        // add a cube at start of teh snake so appearing to move foward
        snake.unshift(newHead);

        // randomize a new apple coordinate
        function getAppleXY(){
            lignex = [20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,480];
           
            index = Math.floor(Math.random() * Math.floor(lignex.length));
            appleX = lignex[index];

            ligney = [20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,480];
        
            index = Math.floor(Math.random() * Math.floor(ligney.length));
            appleY = ligney[index];
        }
       
    
       

        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("Your score :"+ score, 10, 490);
    }
    
    
    
    //intervall redrw everything every 100 ms
    var run = setInterval(draw, 100);

}

