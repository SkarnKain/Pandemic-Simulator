function Pt_graph(S, I, M, R, A, SL, SF, SE, H) {
    this.s = S;
    this.i = I;
    this.m = M;
    this.r = R;
    this.a = A;
    this.sl = SL;
    this.sf = SF;
    this.se = SE;
    this.h = H;
}


function Graph(max_y1, max_y2, max_x) {
    this.pts = []
    this.max_y1 = max_y1;
    this.max_y2 = max_y2;
    this.max_x = max_x;

    this.posG1 = [width - 550, width - 50, 500, 50]; // [x1, x2, y1, y2]
    this.posG2 = [this.posG1[0], this.posG1[1], 850, 600]; // [x1, x2, y1, y2]


    this.display = function () {
        if (this.pts.length - 1 > this.max_x) {
            this.max_x = 50 * ceil((this.pts.length - 1) / 50);
        }
        if (radio_graph_visu.value() == 0) {
            this.display_G1_lin();
        } else {
            this.display_G1_log();
        }
        this.display_G2();
        this.display_SD_QT();
    }


    this.display_G1_lin = function () {
        // Visualisation du graphique de contamination en version linéaire
        noStroke();
        fill(colors.S);
        beginShape();
        var x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        var y = map(nb_agents, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, this.posG1[0], this.posG1[1]);
            y = map(this.pts[i].s + this.pts[i].r + this.pts[i].a + this.pts[i].sl + this.pts[i].sf + this.pts[i].se + this.pts[i].m, 0, this.max_y1, this.posG1[2], this.posG1[3]);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.R);
        beginShape();
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, this.posG1[0], this.posG1[1]);
            y = map(this.pts[i].r + this.pts[i].a + this.pts[i].sl + this.pts[i].sf + this.pts[i].se + this.pts[i].m, 0, this.max_y1, this.posG1[2], this.posG1[3]);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.A);
        beginShape();
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, this.posG1[0], this.posG1[1]);
            y = map(this.pts[i].a + this.pts[i].sl + this.pts[i].sf + this.pts[i].se + this.pts[i].m, 0, this.max_y1, this.posG1[2], this.posG1[3]);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.SL);
        beginShape();
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, this.posG1[0], this.posG1[1]);
            y = map(this.pts[i].sl + this.pts[i].sf + this.pts[i].se + this.pts[i].m, 0, this.max_y1, this.posG1[2], this.posG1[3]);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.SF);
        beginShape();
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, this.posG1[0], this.posG1[1]);
            y = map(this.pts[i].sf + this.pts[i].se + this.pts[i].m, 0, this.max_y1, this.posG1[2], this.posG1[3]);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.SE);
        beginShape();
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, this.posG1[0], this.posG1[1]);
            y = map(this.pts[i].se + this.pts[i].m, 0, this.max_y1, this.posG1[2], this.posG1[3]);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.M);
        beginShape();
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, this.posG1[0], this.posG1[1]);
            y = map(this.pts[i].m, 0, this.max_y1, this.posG1[2], this.posG1[3]);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, this.max_y1, this.posG1[2], this.posG1[3]);
        vertex(x, y);
        endShape(CLOSE);

        fill(255);
        stroke(255);
        line(this.posG1[0], this.posG1[2], this.posG1[1], this.posG1[2])
        textSize(10);
        textAlign(CENTER);
        text(0, this.posG1[0], this.posG1[2] + 10);
        line(this.posG1[0], this.posG1[2], this.posG1[0], this.posG1[3]);
        for (var i = 1; i <= floor(this.max_x / 10); i++) {
            var posX = map(i, 0, this.max_x / 10, this.posG1[0], this.posG1[1]);
            fill(255);
            stroke(255)
            text(i * 10, posX, this.posG1[2] + 10);
            fill(255, 50);
            stroke(255, 50);
            line(posX, this.posG1[2], posX, this.posG1[3]);
        }
        textAlign(RIGHT);
        for (var i = 1; i <= floor(this.max_y1 / 100); i++) {
            var posY = map(i, 0, this.max_y1 / 100, this.posG1[2], this.posG1[3]);
            fill(255);
            stroke(255)
            text(i * 100, this.posG1[0] - 5, posY + 5);
            fill(255, 50);
            stroke(255, 50);
            line(this.posG1[0], posY, this.posG1[1], posY);
        }
    }


    this.display_G1_log = function () {
        // Visualisation du graphique de contamination en version logarithmique - Base 10
        noStroke();
        fill(colors.S);
        beginShape();
        var x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        var y = map(Math.log10(nb_agents), 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, this.posG1[0], this.posG1[1]);
            y = map(Math.log10(this.pts[i].s + this.pts[i].r + this.pts[i].a + this.pts[i].sl + this.pts[i].sf + this.pts[i].se + this.pts[i].m), 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.R);
        beginShape();
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(Math.log10(0), 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, this.posG1[0], this.posG1[1]);
            y = map(Math.log10(this.pts[i].r + this.pts[i].a + this.pts[i].sl + this.pts[i].sf + this.pts[i].se + this.pts[i].m), 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.A);
        beginShape();
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(Math.log10(0), 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, this.posG1[0], this.posG1[1]);
            y = map(Math.log10(this.pts[i].a + this.pts[i].sl + this.pts[i].sf + this.pts[i].se + this.pts[i].m), 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.SL);
        beginShape();
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(Math.log10(0), 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, this.posG1[0], this.posG1[1]);
            y = map(Math.log10(this.pts[i].sl + this.pts[i].sf + this.pts[i].se + this.pts[i].m), 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.SF);
        beginShape();
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(Math.log10(0), 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, this.posG1[0], this.posG1[1]);
            y = map(Math.log10(this.pts[i].sf + this.pts[i].se + this.pts[i].m), 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.SE);
        beginShape();
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(Math.log10(0), 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, this.posG1[0], this.posG1[1]);
            y = map(Math.log10(this.pts[i].se + this.pts[i].m), 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.M);
        beginShape();
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(Math.log10(0), 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, this.posG1[0], this.posG1[1]);
            y = map(Math.log10(this.pts[i].m), 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        x = map(0, 0, this.max_x, this.posG1[0], this.posG1[1]);
        y = map(0, 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
        vertex(x, y);
        endShape(CLOSE);

        fill(255);
        stroke(255);
        line(this.posG1[0], this.posG1[2], this.posG1[1], this.posG1[2])
        textSize(10);
        textAlign(CENTER);
        text(0, this.posG1[0], this.posG1[2] + 10);
        line(this.posG1[0], this.posG1[2], this.posG1[0], this.posG1[3]);
        for (var i = 1; i <= floor(this.max_x / 10); i++) {
            var posX = map(i, 0, this.max_x / 10, this.posG1[0], this.posG1[1]);
            fill(255);
            stroke(255)
            text(i * 10, posX, this.posG1[2] + 10);
            fill(255, 50);
            stroke(255, 50);
            line(posX, this.posG1[2], posX, this.posG1[3]);
        }
        textAlign(RIGHT);

        for (var i = 0; i <= floor(Math.log10(this.max_y1)); i++) {
            var val = pow(10, i);
            var posY = map(Math.log10(val), 0, Math.log10(this.max_y1), this.posG1[2], this.posG1[3]);
            fill(255);
            stroke(255)
            text(val, this.posG1[0] - 5, posY + 5);
            fill(255, 50);
            stroke(255, 50);
            line(this.posG1[0], posY, this.posG1[1], posY);
        }
    }

    this.display_G2 = function () {
        // Visualisation du graphique d'hospitalisation
        noStroke();
        fill(colors.H);
        beginShape();
        x = map(0, 0, this.max_x, this.posG2[0], this.posG2[1]);
        y = map(0, 0, this.max_y2, this.posG2[2], this.posG2[3]);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, this.posG2[0], this.posG2[1]);
            y = map(this.pts[i].h, 0, this.max_y2, this.posG2[2], this.posG2[3]);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, this.posG2[0], this.posG2[1]);
        y = map(0, 0, this.max_y2, this.posG2[2], this.posG2[3]);
        vertex(x, y);
        x = map(0, 0, this.max_x, this.posG2[0], this.posG2[1]);
        y = map(0, 0, this.max_y2, this.posG2[2], this.posG2[3]);
        vertex(x, y);
        endShape(CLOSE);

        fill(255);
        stroke(255);
        line(this.posG2[0], this.posG2[2], this.posG2[1], this.posG2[2])
        textSize(10);
        textAlign(CENTER);
        text(0, this.posG2[0], this.posG2[2] + 10);
        line(this.posG2[0], this.posG2[2], this.posG2[0], this.posG2[3]);
        for (var i = 1; i <= floor(this.max_x / 10); i++) {
            var posX = map(i, 0, this.max_x / 10, this.posG2[0], this.posG2[1]);
            fill(255);
            stroke(255)
            text(i * 10, posX, this.posG2[2] + 10);
            fill(255, 50);
            stroke(255, 50);
            line(posX, this.posG2[2], posX, this.posG2[3]);
        }
        textAlign(RIGHT);
        for (var i = 1; i <= floor(this.max_y2 / 5); i++) {
            var posY = map(i, 0, this.max_y2 / 5, this.posG2[2], this.posG2[3]);
            fill(255);
            stroke(255)
            text(i * 5, this.posG2[0] - 5, posY + 5);
            fill(255, 50);
            stroke(255, 50);
            line(this.posG2[0], posY, this.posG2[1], posY);
        }
    }


    this.display_SD_QT = function () {
        // Visualisation sur les graphiques des périodes de social distancing / quarantaine
        if (sd_date_off > sd_date_on) {
            noStroke();
            fill(255, 50);
            var rectX1 = map(sd_date_on, 0, this.max_x, this.posG2[0], this.posG2[1]);
            var rectX2 = map(sd_date_off, 0, this.max_x, this.posG2[0], this.posG2[1]);
            rect(rectX1, this.posG1[3], rectX2 - rectX1, this.posG1[2] - this.posG1[3]);
            rect(rectX1, this.posG2[3], rectX2 - rectX1, this.posG2[2] - this.posG2[3]);
        }

        if (sd2_date_off > sd2_date_on) {
            noStroke();
            fill(255, 50);
            var rectX1 = map(sd2_date_on, 0, this.max_x, this.posG2[0], this.posG2[1]);
            var rectX2 = map(sd2_date_off, 0, this.max_x, this.posG2[0], this.posG2[1]);
            rect(rectX1, this.posG1[3], rectX2 - rectX1, this.posG1[2] - this.posG1[3]);
            rect(rectX1, this.posG2[3], rectX2 - rectX1, this.posG2[2] - this.posG2[3]);
        }

        if (qt_sf_date_off > qt_sf_date_on) {
            noStroke();
            fill(colors.Q_SF_gr);
            var rectX1 = map(qt_sf_date_on, 0, this.max_x, this.posG2[0], this.posG2[1]);
            var rectX2 = map(qt_sf_date_off, 0, this.max_x, this.posG2[0], this.posG2[1]);
            rect(rectX1, this.posG1[3], rectX2 - rectX1, this.posG1[2] - this.posG1[3]);
            rect(rectX1, this.posG2[3], rectX2 - rectX1, this.posG2[2] - this.posG2[3]);
        }

        if (qt_sl_date_off > qt_sl_date_on) {
            noStroke();
            fill(colors.Q_SL_gr);
            var rectX1 = map(qt_sl_date_on, 0, this.max_x, this.posG2[0], this.posG2[1]);
            var rectX2 = map(qt_sl_date_off, 0, this.max_x, this.posG2[0], this.posG2[1]);
            rect(rectX1, this.posG1[3], rectX2 - rectX1, this.posG1[2] - this.posG1[3]);
            rect(rectX1, this.posG2[3], rectX2 - rectX1, this.posG2[2] - this.posG2[3]);
        }
    }

}
