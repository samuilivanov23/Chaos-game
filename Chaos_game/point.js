function Point(x, y){
    this.x = x;
    this.y = y;

    this.show = function(){
        point(this.x, this.y);
    }
}