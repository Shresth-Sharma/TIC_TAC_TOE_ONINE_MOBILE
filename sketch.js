var database;
var name1,confname;
var conf;
var gameState=0;
var players=0;
var q1=0;
var wait=50;
var a1,a2,a3,a4,a5,a6,a7,a8,a9;
var s1,s2,s3,s4,s5,s6,s7,s8,s9;
var d1,d2,d3,d4,d5,d6,d7,d8,d9;
var z1,z2,z3,z4,z5,z6,z7,z8,z9;
var x1,x2,x3,x4,x5,x6,x7,x8,x9;
var chance=0;
var c1,c2,c3,c4;
var index=0;
var win1=0,win2=0,win3=0;
var p1=0;
var p2=0;
var cr=0;
var e1,e2,e3,e4,e5,e6,e7,e8,e9;
var aq1,aq2=2,aq3,aq4;
function preload(){
    c1=loadImage("cross.png");
    c2=loadImage("O.png");
}
function setup(){
    alert("File has been created by Shresth Sharma and "+"All the copyrights are reserved");
    createCanvas(850,600);
    database=firebase.database();
    name1=createInput();
    name1.position(100,130);
    name1.size(400,50);
    conf=createButton('START');
    conf.position(200,200);
    conf.size(100,50);
    a1=createSprite(350,300,10,410);
    a2=createSprite(750,300,10,410);
    a3=createSprite(550,100,410,10);
    a4=createSprite(550,500,410,10);
    a5=createSprite(477,300,10,410);
    a6=createSprite(623,300,10,410);
    a7=createSprite(550,227,410,10);
    a8=createSprite(550,373,410,10);
    a1.visible=false;
    a2.visible=false;
    a3.visible=false;
    a4.visible=false;
    a5.visible=false;
    a6.visible=false;
    a7.visible=false;
    a8.visible=false;
    a1.shapeColor=("green");
    a2.shapeColor=("green");
    a3.shapeColor=("green");
    a4.shapeColor=("green");
    a5.shapeColor=("green");
    a6.shapeColor=("green");
    a7.shapeColor=("green");
    a8.shapeColor=("green");
    s1=createSprite(400,150,10,10);
    s2=createSprite(400,300,10,10);
    s3=createSprite(400,450,10,10);
    s4=createSprite(550,150,10,10);
    s5=createSprite(550,300,10,10);
    s6=createSprite(550,450,10,10);
    s7=createSprite(700,150,10,10);
    s8=createSprite(700,300,10,10);
    s9=createSprite(700,450,10,10);
    s1.addImage("a",c1);
    s2.addImage("a",c1);
    s3.addImage("a",c1);
    s4.addImage("a",c1);
    s5.addImage("a",c1);
    s6.addImage("a",c1);
    s7.addImage("a",c1);
    s8.addImage("a",c1);
    s9.addImage("a",c1);
    s1.scale=2;
    s2.scale=2;
    s3.scale=2;
    s4.scale=2;
    s5.scale=2;
    s6.scale=2;
    s7.scale=2;
    s8.scale=2;
    s9.scale=2;
    s1.visible=false;
    s2.visible=false;
    s3.visible=false;
    s4.visible=false;
    s5.visible=false;
    s6.visible=false;
    s7.visible=false;
    s8.visible=false;
    s9.visible=false;
    d1=createSprite(400,150,10,10);
    d2=createSprite(400,300,10,10);
    d3=createSprite(400,450,10,10);
    d4=createSprite(550,150,10,10);
    d5=createSprite(550,300,10,10);
    d6=createSprite(550,450,10,10);
    d7=createSprite(700,150,10,10);
    d8=createSprite(700,300,10,10);
    d9=createSprite(700,450,10,10);
    d1.addImage("a",c2);
    d2.addImage("a",c2);
    d3.addImage("a",c2);
    d4.addImage("a",c2);
    d5.addImage("a",c2);
    d6.addImage("a",c2);
    d7.addImage("a",c2);
    d8.addImage("a",c2);
    d9.addImage("a",c2);
    d1.scale=2;
    d2.scale=2;
    d3.scale=2;
    d4.scale=2;
    d5.scale=2;
    d6.scale=2;
    d7.scale=2;
    d8.scale=2;
    d9.scale=2;
    d1.visible=false;
    d2.visible=false;
    d3.visible=false;
    d4.visible=false;
    d5.visible=false;
    d6.visible=false;
    d7.visible=false;
    d8.visible=false;
    d9.visible=false;
    
    c3=createSprite(175,300,20,20);
    c4=createSprite(175,300,20,20);
    c3.addImage("a",c1);
    c4.addImage("a",c2);
    c3.scale=4;
    c4.scale=4;
    c3.visible=false;
    c4.visible=false;
    z1=0;
    x1=0;
    z2=0;
    x2=0;
    z3=0;
    x3=0;
    z4=0;
    x4=0;
    z5=0;
    x5=0;
    z6=0;
    x6=0;
    z7=0;
    x7=0;
    z8=0;
    x8=0;
    z9=0;
    x9=0;
    var gameStateRef  = database.ref('Views on TIC_TAC_TOE_ONLINE');
    gameStateRef.on("value",function(data){
    p1 = data.val();
    });
    p2=1
    e1=createButton('1');
    e1.size(80,80);
    e1.position(50,500);
    e2=createButton('2');
    e2.size(80,80);
    e2.position(130,500);
    e3=createButton('3');
    e3.size(80,80);
    e3.position(210,500);
    e4=createButton('4');
    e4.size(80,80);
    e4.position(290,500);
    e5=createButton('5');
    e5.size(80,80);
    e5.position(370,500);
    e6=createButton('6');
    e6.size(80,80);
    e6.position(450,500);
    e7=createButton('7');
    e7.size(80,80);
    e7.position(530,500);
    e8=createButton('8');
    e8.size(80,80);
    e8.position(610,500);
    e9=createButton('9');
    e9.size(80,80);
    e9.position(690,500);
    e1.hide();
    e2.hide();
    e3.hide();
    e4.hide();
    e5.hide();
    e6.hide();
    e7.hide();
    e8.hide();
    e9.hide();
    aq1=createButton('next');
    aq1.size(100,100);
}
function draw(){
    
    aq1.mousePressed(()=>{
        if(index===2){
            aq2=1
        }
        if(index===3){
            aq2=2
        }
        database.ref('/').update({
            aq2:aq2
        });
    });
    var gameStateRef  = database.ref('aq2');
        gameStateRef.on("value",function(data){
        aq2 = data.val();
    });
   
    background("orange");
    if(gameState===0){
        textSize(50);
        fill("Green");
        text("Enter your name.",100,100);
        conf.mousePressed(()=>{
        name1.hide();
        conf.hide();
        gameState=1;
        confname=name1.value();
        var gameStateRef  = database.ref('S');
        gameStateRef.on("value",function(data){
        players = data.val();
        });
        q1=1;
        });
    
    }
    if(gameState===1){
        textSize(50);
        fill("Green");
        text("Wating For Players",100,100);
        var gameStateRef  = database.ref('S');
        gameStateRef.on("value",function(data){
        players = data.val();
        });
        if(players===3){
            gameState=3;
        }
    }
    if(gameState===3){
        gameState=4;
    }
    if(gameState===4){
        if(index===2&&aq2===2){
            a1.visible=true;
            a2.visible=true;
            a3.visible=true;
            a4.visible=true;
            a5.visible=true;
            a6.visible=true;
            a7.visible=true;
            a8.visible=true;
            fill("red");
            textSize(20);
            text("1",450,125);
            text("2",450,250);
            text("3",450,405);
            text("4",600,125);
            text("5",600,250);
            text("6",600,405);
            text("7",730,125);
            text("8",730,250);
            text("9",730,405);
            main1();
            win();
            main();
            if(chance===0){
                c3.visible=true;
                c4.visible=false;
            }
            if(chance===1){
                c4.visible=true;
                c3.visible=false;
            }
            if(chance===2){
                c3.visible=true;
                c4.visible=false;
            }
            if(chance===3){
                c4.visible=true;
                c3.visible=false;
            }
            if(chance===4){
                c3.visible=true;
                c4.visible=false;
            }
            if(chance===5){
                c4.visible=true;
                c3.visible=false;
            }
            if(chance===6){
                c3.visible=true;
                c4.visible=false;
            }
            if(chance===7){
                c4.visible=true;
                c3.visible=false;
            }
            if(chance===8){
                c3.visible=true;
                c4.visible=false;
            }
            
            console.log(index);
            if(index===2){
                text("X",100,100);
            }
            if(index===3){
                text("O",100,100);
            }
            e1.show();
            e2.show();
            e3.show();
            e4.show();
            e5.show();
            e6.show();
            e7.show();
            e8.show();
            e9.show();
        }
        if(index===3&&aq2===1){
            a1.visible=true;
            a2.visible=true;
            a3.visible=true;
            a4.visible=true;
            a5.visible=true;
            a6.visible=true;
            a7.visible=true;
            a8.visible=true;
            fill("red");
            textSize(20);
            text("1",450,125);
            text("2",450,250);
            text("3",450,405);
            text("4",600,125);
            text("5",600,250);
            text("6",600,405);
            text("7",730,125);
            text("8",730,250);
            text("9",730,405);
            main1();
            win();
            main();
            if(chance===0){
                c3.visible=true;
                c4.visible=false;
            }
            if(chance===1){
                c4.visible=true;
                c3.visible=false;
            }
            if(chance===2){
                c3.visible=true;
                c4.visible=false;
            }
            if(chance===3){
                c4.visible=true;
                c3.visible=false;
            }
            if(chance===4){
                c3.visible=true;
                c4.visible=false;
            }
            if(chance===5){
                c4.visible=true;
                c3.visible=false;
            }
            if(chance===6){
                c3.visible=true;
                c4.visible=false;
            }
            if(chance===7){
                c4.visible=true;
                c3.visible=false;
            }
            if(chance===8){
                c3.visible=true;
                c4.visible=false;
            }
            
            console.log(index);
            if(index===2){
                text("X",100,100);
            }
            if(index===3){
                text("O",100,100);
            }
            e1.show();
            e2.show();
            e3.show();
            e4.show();
            e5.show();
            e6.show();
            e7.show();
            e8.show();
            e9.show();
        }

    }
    if(players!==0){
        if(q1===1){
            players=players+1
            index=players
            q1=0
        }
        console.log(index);
        if(cr===0){
            database.ref('/').update({
                S:players
            }); 
            cr=1;
        }
        
    }
    if(p1!==0){
        
     }
     if(p2===1&&p1!==0){
         p1=p1+1
         p2=0
         database.ref('/').update({
            "Views on TIC_TAC_TOE_ONLINE":p1
        });
    }
    textSize(50);
    text("Views : "+p1,100,50);
   drawSprites();
}