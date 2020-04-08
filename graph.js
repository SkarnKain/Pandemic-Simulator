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
        var x = map(0, 0, this.max_x, width - 550, width - 50);
        var y = map(nb_agents, 0, this.max_y1, 400, 50);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, width - 550, width - 50);
            y = map(this.pts[i].s + this.pts[i].r + this.pts[i].a + this.pts[i].sl + this.pts[i].sf + this.pts[i].se + this.pts[i].m, 0, this.max_y1, 400, 50);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.R);
        beginShape();
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, width - 550, width - 50);
            y = map(this.pts[i].r + this.pts[i].a + this.pts[i].sl + this.pts[i].sf + this.pts[i].se + this.pts[i].m, 0, this.max_y1, 400, 50);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.A);
        beginShape();
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, width - 550, width - 50);
            y = map(this.pts[i].a + this.pts[i].sl + this.pts[i].sf + this.pts[i].se + this.pts[i].m, 0, this.max_y1, 400, 50);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.SL);
        beginShape();
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, width - 550, width - 50);
            y = map(this.pts[i].sl + this.pts[i].sf + this.pts[i].se + this.pts[i].m, 0, this.max_y1, 400, 50);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.SF);
        beginShape();
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, width - 550, width - 50);
            y = map(this.pts[i].sf + this.pts[i].se + this.pts[i].m, 0, this.max_y1, 400, 50);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.SE);
        beginShape();
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, width - 550, width - 50);
            y = map(this.pts[i].se + this.pts[i].m, 0, this.max_y1, 400, 50);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.M);
        beginShape();
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, width - 550, width - 50);
            y = map(this.pts[i].m, 0, this.max_y1, 400, 50);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y1, 400, 50);
        vertex(x, y);
        endShape(CLOSE);

        fill(255);
        stroke(255);
        line(width - 550, 400, width - 50, 400)
        textSize(10);
        textAlign(CENTER);
        text(0, width - 550, 410);
        line(width - 550, 400, width - 550, 50);
        for (var i = 1; i <= floor(this.max_x / 10); i++) {
            var posX = map(i, 0, this.max_x / 10, width - 550, width - 50);
            fill(255);
            stroke(255)
            text(i * 10, posX, 410);
            fill(255, 50);
            stroke(255, 50);
            line(posX, 400, posX, 50);
        }
        textAlign(RIGHT);
        for (var i = 1; i <= floor(this.max_y1 / 100); i++) {
            var posY = map(i, 0, this.max_y1 / 100, 400, 50);
            fill(255);
            stroke(255)
            text(i * 100, width - 555, posY + 5);
            fill(255, 50);
            stroke(255, 50);
            line(width - 550, posY, width - 50, posY);
        }
    }

    this.display_G1_log = function () {
        // Visualisation du graphique de contamination en version logarithmique - Base 10
        noStroke();
        fill(colors.S);
        beginShape();
        var x = map(0, 0, this.max_x, width - 550, width - 50);
        var y = map(Math.log10(nb_agents), 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, width - 550, width - 50);
            y = map(Math.log10(this.pts[i].s + this.pts[i].r + this.pts[i].a + this.pts[i].sl + this.pts[i].sf + this.pts[i].se + this.pts[i].m), 0, Math.log10(this.max_y1), 400, 50);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.R);
        beginShape();
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(Math.log10(0), 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, width - 550, width - 50);
            y = map(Math.log10(this.pts[i].r + this.pts[i].a + this.pts[i].sl + this.pts[i].sf + this.pts[i].se + this.pts[i].m), 0, Math.log10(this.max_y1), 400, 50);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.A);
        beginShape();
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(Math.log10(0), 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, width - 550, width - 50);
            y = map(Math.log10(this.pts[i].a + this.pts[i].sl + this.pts[i].sf + this.pts[i].se + this.pts[i].m), 0, Math.log10(this.max_y1), 400, 50);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.SL);
        beginShape();
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(Math.log10(0), 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, width - 550, width - 50);
            y = map(Math.log10(this.pts[i].sl + this.pts[i].sf + this.pts[i].se + this.pts[i].m), 0, Math.log10(this.max_y1), 400, 50);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.SF);
        beginShape();
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(Math.log10(0), 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, width - 550, width - 50);
            y = map(Math.log10(this.pts[i].sf + this.pts[i].se + this.pts[i].m), 0, Math.log10(this.max_y1), 400, 50);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.SE);
        beginShape();
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(Math.log10(0), 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, width - 550, width - 50);
            y = map(Math.log10(this.pts[i].se + this.pts[i].m), 0, Math.log10(this.max_y1), 400, 50);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        endShape(CLOSE);

        fill(colors.M);
        beginShape();
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(Math.log10(0), 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, width - 550, width - 50);
            y = map(Math.log10(this.pts[i].m), 0, Math.log10(this.max_y1), 400, 50);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, Math.log10(this.max_y1), 400, 50);
        vertex(x, y);
        endShape(CLOSE);

        fill(255);
        stroke(255);
        line(width - 550, 400, width - 50, 400)
        textSize(10);
        textAlign(CENTER);
        text(0, width - 550, 410);
        line(width - 550, 400, width - 550, 50);
        for (var i = 1; i <= floor(this.max_x / 10); i++) {
            var posX = map(i, 0, this.max_x / 10, width - 550, width - 50);
            fill(255);
            stroke(255)
            text(i * 10, posX, 410);
            fill(255, 50);
            stroke(255, 50);
            line(posX, 400, posX, 50);
        }
        textAlign(RIGHT);

        for (var i = 0; i <= floor(Math.log10(this.max_y1)); i++) {
            var val = pow(10, i);
            var posY = map(Math.log10(val), 0, Math.log10(this.max_y1), 400, 50);
            fill(255);
            stroke(255)
            text(val, width - 555, posY + 5);
            fill(255, 50);
            stroke(255, 50);
            line(width - 550, posY, width - 50, posY);
        }
    }

    this.display_G2 = function () {
        // Visualisation du graphique d'hospitalisation
        noStroke();
        fill(colors.H);
        beginShape();
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y2, 850, 500);
        vertex(x, y);
        for (var i = 1; i < this.pts.length; i++) {
            x = map(i, 0, this.max_x, width - 550, width - 50);
            y = map(this.pts[i].h, 0, this.max_y2, 850, 500);
            vertex(x, y);
        }
        x = map(max(0, this.pts.length - 1), 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y2, 850, 500);
        vertex(x, y);
        x = map(0, 0, this.max_x, width - 550, width - 50);
        y = map(0, 0, this.max_y2, 850, 500);
        vertex(x, y);
        endShape(CLOSE);

        fill(255);
        stroke(255);
        line(width - 550, 850, width - 50, 850)
        line(width - 550, 850, width - 550, 500)
        textSize(10);
        textAlign(CENTER);
        text(this.max_y2, width - 550, 495);
        textAlign(CENTER);
        text(0, width - 550, 860);
        line(width - 550, 400, width - 550, 50);
        for (var i = 1; i <= floor(this.max_x / 10); i++) {
            var posX = map(i, 0, this.max_x / 10, width - 550, width - 50);
            fill(255);
            stroke(255)
            text(i * 10, posX, 860);
            fill(255, 50);
            stroke(255, 50);
            line(posX, 850, posX, 500);
        }
    }

    this.display_SD_QT = function () {
        // Visualisation sur les graphiques des périodes de social distancing / quarantaine
        if (sd_date_off > sd_date_on) {
            noStroke();
            fill(255, 50);
            var rectX1 = map(sd_date_on, 0, this.max_x, width - 550, width - 50);
            var rectX2 = map(sd_date_off, 0, this.max_x, width - 550, width - 50);
            rect(rectX1, 50, rectX2 - rectX1, 350);
            rect(rectX1, 500, rectX2 - rectX1, 350);
        }

        if (sd2_date_off > sd2_date_on) {
            noStroke();
            fill(255, 50);
            var rectX1 = map(sd2_date_on, 0, this.max_x, width - 550, width - 50);
            var rectX2 = map(sd2_date_off, 0, this.max_x, width - 550, width - 50);
            rect(rectX1, 50, rectX2 - rectX1, 350);
            rect(rectX1, 500, rectX2 - rectX1, 350);
        }

        if (qt_sf_date_off > qt_sf_date_on) {
            noStroke();
            fill(colors.Q_SF_gr);
            var rectX1 = map(qt_sf_date_on, 0, this.max_x, width - 550, width - 50);
            var rectX2 = map(qt_sf_date_off, 0, this.max_x, width - 550, width - 50);
            rect(rectX1, 50, rectX2 - rectX1, 350);
            rect(rectX1, 500, rectX2 - rectX1, 350);
        }

        if (qt_sl_date_off > qt_sl_date_on) {
            noStroke();
            fill(colors.Q_SL_gr);
            var rectX1 = map(qt_sl_date_on, 0, this.max_x, width - 550, width - 50);
            var rectX2 = map(qt_sl_date_off, 0, this.max_x, width - 550, width - 50);
            rect(rectX1, 50, rectX2 - rectX1, 350);
            rect(rectX1, 500, rectX2 - rectX1, 350);
        }
    }

}
