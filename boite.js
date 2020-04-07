function Boite(name, x1, y1, xsize, ysize, bor, capa, count) {
    this.name = name;
    this.x1 = x1;
    this.x2 = x1 + xsize;
    this.y1 = y1;
    this.y2 = y1 + ysize;
    this.bords = bor;
    this.capa = capa;
    this.count = count;

    this.display = function () {
        noFill();
        stroke(125);
        strokeWeight(1);
        rect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);

        if (this.name == "Hopital") {
            textSize(30);
            fill(colors.H);
            stroke(colors.H);
        } else if (this.name == "Quarantaine") {
            textSize(30);
            fill(colors.Q);
            stroke(colors.Q);
        } else {
            textSize(40);
            fill(125, 100);
            stroke(125, 100);
        }

        textAlign(CENTER);
        text(this.name, (this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2);

        textSize(10);
        fill(125);
        stroke(125);
        textAlign(LEFT);
        text('Capacité :', this.x1 + 10, this.y1 + 20);
        textAlign(RIGHT);
        text(this.capa, this.x2 - 10, this.y1 + 20);
        textAlign(LEFT);
        text('Remplissage :', this.x1 + 10, this.y2 - 10);
        textAlign(RIGHT);
        text(this.count, this.x2 - 10, this.y2 - 10);
    }
}