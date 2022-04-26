class Player {
    x;
    y;
    width;
    height;
    constructor(x,y,color) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.color = color;
        this.speed = 5;
        this.direct = "right";
    }

    render(canvas){
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    checkScreen(canvas){
        if(this.x > canvas.width){
            this.x = 0;
        }else if(this.x < 0){
            this.x = canvas.width;
        }

        if(this.y > canvas.height){
            this.y = 0;
        }else if(this.y < 0 - this.height){
            this.y = canvas.height;
        }
    }

    autoMove(){
        // let arr = ["left","right","bottom","up"];

        let directs = new Array(50).fill(this.direct);
        directs.push("left","right","bottom","top");
        let rand = Math.floor(Math.random()*directs.length);
        this.direct = directs[rand];
        this.move();
    }

    move(){
        switch (this.direct) {
            case "right":
                this.x += this.speed;
                break;
            case "left":
                this.x -= this.speed;
                break;
            case "top":
                this.y -= this.speed;
                break;
            case "bottom":
                this.y += this.speed;
                break;
            default:
                console.log("Idle")

        }


    }
}
