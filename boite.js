function Boite(type, x1, y1, xsize, ysize, bor, capa, count) {
    this.type = type;
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

        if (radio_lang.value() == 0) {
            var boite_txt = ["Hopital", "Quarantaine", "Population", 'Capacité :', 'Remplissage :'];
        } else if (radio_lang.value() == 1) {
            var boite_txt = ["Hospital", "Quarantine", "Population", 'Capacity :', 'Filling :'];
        }

        textAlign(CENTER);
        if (this.type == "ho") {
            textSize(30);
            fill(colors.H);
            stroke(colors.H);
            text(boite_txt[0], (this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2);
        } else if (this.type == "qt") {
            textSize(30);
            fill(colors.Q);
            stroke(colors.Q);
            text(boite_txt[1], (this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2);
        } else if (this.type == "pop") {
            textSize(40);
            fill(125, 50);
            stroke(125, 20);
            text(boite_txt[2], (this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2);
        }

        textSize(10);
        fill(125);
        stroke(125);
        textAlign(LEFT);
        text(boite_txt[3], this.x1 + 10, this.y1 + 20);
        textAlign(RIGHT);
        text(this.capa, this.x2 - 10, this.y1 + 20);
        textAlign(LEFT);
        text(boite_txt[4], this.x1 + 10, this.y2 - 10);
        textAlign(RIGHT);
        text(this.count, this.x2 - 10, this.y2 - 10);
    }
}
