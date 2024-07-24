//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .97

//Player setup
var Players = new Array();
Players[0] = new Player();
Players[1] = new Player();
Players.pad = new Box();

//Paddle Assignment
var Pads = new Array();
Pads[0] = Players[0].pad;
Pads[1] = Players[1].pad;

//Pads[0] setup
Pads[0] = new Box();
Pads[0].w = 20
Pads[0].h = 150
Pads[0].x = 0 + Pads[0].w/2

//Pads[1] setup
Pads[1] = new Box();
Pads[1].w = 20
Pads[1].h = 150
Pads[1].x = 700 - Pads[1].w/2
Pads[1].color = `green`

//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -2
ball.vy = -2
ball.color = `black`

//scoreboard selector
scoreBoard = document.querySelectorAll("#score div")

function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //Pads[0] accelerates when key is pressed 
    if(keys[`w`])
    {
       Pads[0].vy += -Pads[0].force
    }

    if(keys[`s`])
    {
        Pads[0].vy += Pads[0].force
    }
    //applies friction
    Pads[0].vy *= fy
    //player movement
    Pads[0].move();

    //Pads[1] accelerates when key is pressed
    if(keys[`ArrowUp`])
    {
        Pads[1].vy += -Pads[1].force
    }

    if(keys[`ArrowDown`])
    {
        Pads[1].vy += Pads[1].force
    }
    //applies friction
    Pads[1].vy *= fy
    //player movement
    Pads[1].move();

    //ball movement
    ball.move()

    //Pads[0] collision
    if(Pads[0].y < 0+Pads[0].h/2)
    {
        Pads[0].y = 0+Pads[0].h/2
    }
    if(Pads[0].y > c.height-Pads[0].h/2)
    {
        Pads[0].y = c.height-Pads[0].h/2
    }

    //Pads[1] collision
    if(Pads[1].y < 0+Pads[1].h/2)
    {
        Pads[1].y = 0+Pads[1].h/2
    }
    if(Pads[1].y > c.height-Pads[1].h/2)
    {
        Pads[1].y = c.height-Pads[1].h/2
    }

    //ball collision 
    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y  =c.height/2
        Players[1].score += 1
        console.log(Players[0].score+" | "+Players[1].score)
    }
    if(ball.x > c.width)
    {
        ball.x = c.width/2
        ball.vx = -ball.vx
        Players[0].score += 1
        console.log(Players[0].score+" | "+Players[1].score)
    }
    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy       
    }

    //Pads[0] with ball collision
    if(ball.collide(Pads[0]))
    {
        ball.x = Pads[0].x + Pads[0].w/2 + ball.w/2
        ball.vx = -ball.vx;
    }

    //Pads[1] with ball collision
    if(ball.collide(Pads[1]))
    {
        ball.x = Pads[1].x - Pads[1].w/2 - ball.w/2
        ball.vx = -ball.vx;
    }

    //draw the objects
    Pads[0].draw()
    Pads[1].draw()
    ball.draw()

    //scoreboard writer
    for(var i=0; i < scoreBoard.length; i++){
        scoreBoard[i].innerHTML = Players[i].score
        console.log(scoreBoard.length)
    }

}
