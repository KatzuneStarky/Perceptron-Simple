class Bola {
    constructor (x, y){
        this.x = x;
        this.y = y;
        this.type = 1;
    }

    draw(){
        push();
        strokeWeight(5);

        if (this.type === 1){
            stroke(0, 0, 255);
        }else{
            stroke(60, 179, 113);
        }
        point(this.x, this.y);
        pop();
    }
}