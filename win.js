function win(){
    database.ref('/').update({
        winz:win1,
        winx:win2,
        win3:win3
    });
    var gameStateRef  = database.ref('winz');
        gameStateRef.on("value",function(data){
        win1 = data.val();
    });
    var gameStateRef  = database.ref('winx');
        gameStateRef.on("value",function(data){
        win2 = data.val();
    });
        var gameStateRef  = database.ref('win3');
        gameStateRef.on("value",function(data){
        win3 = data.val();
    });
    if(z1===1&&z2===1&&z3===1){
        win1=1;
    }
    else if(z4===1&&z5===1&&z6===1){
        win1=1;
    }
    else if(z7===1&&z8===1&&z9===1){
        win1=1;
    }
    else if(z1===1&&z4===1&&z7===1){
        win1=1;
    }
    else if(z2===1&&z5===1&&z8===1){
        win1=1;
    }
    else if(z3===1&&z6===1&&z9===1){
        win1=1;
    }
    else if(z1===1&&z5===1&&z9===1){
        win1=1;
    }
    else if(z3===1&&z5===1&&z7===1){
        win1=1;
    }
    else if(x1===1&&x2===1&&x3===1){
        win2=1;
    }
    else if(x4===1&&x5===1&&x6===1){
        win2=1;
    }
    else if(x7===1&&x8===1&&x9===1){
        win2=1;
    }
    else if(x1===1&&x4===1&&x7===1){
        win2=1;
    }
    else if(x2===1&&x5===1&&x8===1){
        win2=1;
    }
    else if(x3===1&&x6===1&&x9===1){
        win2=1;
    }
    else if(x1===1&&x5===1&&x9===1){
        win2=1;
    }
    else if(x3===1&&x5===1&&x7===1){
        win2=1;
    }
    else{
        if(chance===9){
            win3=1;
        }
    }
    if(win1===1){
        textSize(40);
        fill("red");
        text("X Win",100,200);
        chance=10
    }
    if(win2===1){
        textSize(40);
        fill("red");
        text("O Win",100,200);
        chance=10
    }
    if(win3===1){
        textSize(40);
        fill("red");
        text("Tie",100,200);
        chance=10
    }
}