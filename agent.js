var mr = 0.01;

function Agent(x, y, santé, dna) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.position = createVector(x, y);
    this.r = 1.5;
    this.maxspeed = 5;
    this.maxforce = 0.5;

    this.santé = santé; // Sain = "S" - Infecté = "I" - Mort = "M" / Remis = "R"
    this.symptome = "RAS"; // Asyptomatique = "A" - Symptomes légers = "SL" - Symptomes forts = "SF" - Symptomes extrême = "SE"
    this.virus_distance = 0;
    this.virus_transmission = 0;

    this.status_depl = "L"; // Libre = "L" - Hospitalisé = "H" - Mort = "M" - Quarantaine = "Q"
    this.hopital_si_malade = true;
    this.qt_si_malade = true;

    this.nb_conta = 0;

    this.dna = [];
    // dna[0] : Evolution maladie :
    // 0 : Asymptomatique
    // 1 : Symptomes légers
    // 2 : Symptomes forts
    // 3 : Symptomes extrêmes

    // dna[1] : Mortalité :
    // 0 : Va survivre
    // 1 : Va mourir

    // dna[2] : Respect du social distancing
    // Force max entre 0 et 1
    if (dna === undefined) {
        var rand1 = random(0, 100);
        var rand2 = random(0, 100);
        var rand3 = random(0, 100);
        if (rand1 <= 30) {
            this.dna[0] = 0;
            this.dna[1] = 0;
        } else if ((rand1 > 30) & (rand1 <= 80)) {
            this.dna[0] = 1;
            this.dna[1] = 0;
        } else if ((rand1 > 80) & (rand1 <= 90)) {
            this.dna[0] = 2;
            this.dna[1] = 0;
        } else {
            this.dna[0] = 3;
            if (rand2 < 5) {
                this.dna[1] = 0;
            } else {
                this.dna[1] = 1;
            }
        }
        if (rand3 <= resp_sd) {
            this.dna[2] = true;
        } else {
            this.dna[2] = false;
        }
    } else {
        this.dna = dna;
    }

    this.tictac = 0;
    this.jours_maladie = 0;
    this.jours_remis = 0;


    this.update = function () {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxspeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0); // Reset acceleration to 0 each cycle
    }


    this.applyForce = function (force) {
        this.acceleration.add(force);
    }


    // Ancienne fonction avant mise en place des zones
    //    this.transmission = function () {
    //        if (this.santé == "I") {
    //            for (var i = agents.length - 1; i >= 0; i--) {
    //                var distance = this.position.dist(agents[i].position)
    //                if ((distance < this.virus_distance) & (agents[i].santé == "S") & (random(0, 100) < this.virus_transmission)) {
    //                    agents[i].santé = "I"
    //                    this.nb_conta += 1;
    //                }
    //            }
    //        }
    //    }


    this.evol_maladie = function () {
        if (this.santé == "I") {
            this.tictac += 1;
            if (this.tictac == frames_jour) {
                this.tictac = 0;
                this.jours_maladie += 1;
            }
            this.symptome = "A"
            this.virus_distance = virus.A_D_T;
            this.virus_transmission = virus.A_P_T;
            switch (this.dna[0]) {
                case 0:
                    if (this.jours_maladie > 5) {
                        this.santé = "R";
                        this.jours_maladie = 0;
                        this.symptome = "RAS";
                        this.virus_distance = 0;
                        this.virus_transmission = 0;
                    }
                    break;
                case 1:
                    if ((this.jours_maladie > 5) & (this.jours_maladie <= 10)) {
                        this.symptome = "SL";
                        this.virus_distance = virus.SL_D_T;
                        this.virus_transmission = virus.SL_P_T;
                    } else if (this.jours_maladie > 10) {
                        this.santé = "R";
                        this.jours_maladie = 0;
                        this.symptome = "RAS";
                        this.virus_distance = 0;
                        this.virus_transmission = 0;
                    }
                    break;
                case 2:
                    if ((this.jours_maladie > 5) & (this.jours_maladie <= 10)) {
                        this.symptome = "SF";
                        this.virus_distance = virus.SF_D_T;
                        this.virus_transmission = virus.SF_P_T;
                    } else if ((this.jours_maladie > 10) & (this.jours_maladie <= 20)) {
                        this.symptome = "SE";
                        this.virus_distance = virus.SE_D_T;
                        this.virus_transmission = virus.SE_P_T;
                    } else if (this.jours_maladie > 20) {
                        this.santé = "R";
                        this.jours_maladie = 0;
                        this.symptome = "RAS";
                        this.virus_distance = 0;
                        this.virus_transmission = 0;
                    }
                    break;
                case 3:
                    if ((this.jours_maladie > 5) & (this.jours_maladie <= 10)) {
                        this.symptome = "SF";
                        this.virus_distance = virus.SF_D_T;
                        this.virus_transmission = virus.SF_P_T;
                    } else if ((this.jours_maladie > 10) & (this.jours_maladie <= 25)) {
                        this.symptome = "SE";
                        this.virus_distance = virus.SE_D_T;
                        this.virus_transmission = virus.SE_P_T;
                    } else if ((this.jours_maladie > 25) & (this.status_depl != "H") & (this.santé != "M")) {
                        if (this.dna[1] = 1) {
                            this.santé = "M";
                            this.symptome = "M"
                            this.virus_distance = 0;
                            this.virus_transmission = 0;
                        } else if (this.santé != "M") {
                            this.santé = "R";
                            this.jours_maladie = 0;
                            this.symptome = "RAS";
                            this.virus_distance = 0;
                            this.virus_transmission = 0;
                        }
                    } else if ((this.jours_maladie > 25) & (this.status_depl == "H")) {
                        if (random(0, 100) < 30) {
                            this.santé = "M";
                            this.symptome = "M"
                            this.virus_distance = 0;
                            this.virus_transmission = 0;
                        } else if (this.status_depl != "M") {
                            this.santé = "R";
                            this.jours_maladie = 0;
                            this.symptome = "RAS";
                            this.virus_distance = 0;
                            this.virus_transmission = 0;
                        }
                    }
                    break;
            }
        }
        if (this.santé == "R") {
            this.tictac += 1;
            if (this.tictac == frames_jour) {
                this.tictac = 0;
                this.jours_remis += 1;
            }
            if (this.jours_remis > delai_immun) {
                this.santé = "S";
                this.jours_remis = 0;
            }
        }
    }


    this.ho_qt = function (num) {
        // Hospitalisation
        if ((this.symptome == "SE") & (hopital.count < hopital.capa) & (this.status_depl != "H") & (this.status_depl != "Q")) {
            this.status_depl = "H";
            hopital.count += 1;
            ville.count -= 1;
        }
        if ((this.symptome == "SE") & (hopital.count < hopital.capa) & (this.status_depl != "H") & (this.status_depl == "Q")) {
            this.status_depl = "H";
            hopital.count += 1;
            quarantaine.count -= 1;
        }

        // Sortie hopital
        if ((this.santé == "R") & (this.status_depl == "H")) {
            this.status_depl = "L";
            hopital.count -= 1;
            ville.count += 1;
        }
        if ((this.santé == "M") & (this.status_depl == "H")) {
            this.status_depl = "M";
            hopital.count -= 1;
        }

        // Mise en quarantaine
        if (qt_sf_value) {
            if (((this.symptome == "SF") | (this.symptome == "SE")) & (quarantaine.count < quarantaine.capa) & (this.status_depl != "Q") & (this.status_depl != "H")) {
                this.status_depl = "Q";
                quarantaine.count += 1;
                //console.log("Q - Ent. agent ", num, "Tot. Q : ", quarantaine.count);
                ville.count -= 1;
            }
        }
        if (qt_sl_value) {
            if ((this.symptome == "SL") & (quarantaine.count < quarantaine.capa) & (this.status_depl != "Q") & (this.status_depl != "H")) {
                this.status_depl = "Q";
                quarantaine.count += 1;
                //console.log("Q - Ent. agent ", num, "Tot. Q : ", quarantaine.count);
                ville.count -= 1;
            }
        }
        // Sortie quarantaine
        if ((this.santé == "R") & (this.status_depl == "Q")) {
            this.status_depl = "L";
            quarantaine.count -= 1;
            //console.log("Q - Sor. - Rem. agent ", num, "Tot. Q : ", quarantaine.count);
            ville.count += 1;
        }
        if ((this.santé == "M") & (this.status_depl == "Q")) {
            this.status_depl = "M";
            quarantaine.count -= 1;
            //console.log("Q - Sor. - Mor. agent ", num, "Tot. Q : ", quarantaine.count);
        }

        // Pour morts en ville
        if ((this.santé == "M") & (this.status_depl != "Q") & (this.status_depl != "H")) {
            this.status_depl = "M";
        }
    }

    this.behaviour = function () {

        // Lieu de résidence et mort
        if (this.status_depl == "M") {
            this.maxspeed = 0;
            this.velocity = this.velocity.mult(0);
            this.acceleration = this.acceleration.mult(0);
        } else if (this.status_depl == "H") {
            this.maxspeed = 1;
            if (this.hopital_si_malade == true) {
                this.position = createVector(random(hopital.x1, hopital.x2), random(hopital.y1, hopital.y2));
                this.hopital_si_malade = false;
            }
        } else if (this.status_depl == "Q") {
            this.maxspeed = 1;
            if (this.qt_si_malade == true) {
                this.position = createVector(random(quarantaine.x1, quarantaine.x2), random(quarantaine.y1, quarantaine.y2));
                this.qt_si_malade = false;
            }
        } else {
            this.maxspeed = 2;
            this.applyForce(createVector(random(-0.5, 0.5), random(-0.5, 0.5)));
        }
    }


    // Ancienne fonction avant mise en place des zones
    //    this.social_distancing = function (social_distance) {
    //        if (this.dna[2]) {
    //            var desired = null;
    //            for (var i = agents.length - 1; i >= 0; i--) {
    //                var distance = this.position.dist(agents[i].position)
    //                if ((distance < social_distance) & (distance != 0)) {
    //                    desired = p5.Vector.sub(this.position, agents[i].position)
    //                    desired.normalize();
    //                    desired.mult(this.maxspeed);
    //                    var steer = p5.Vector.sub(desired, this.velocity);
    //                    this.applyForce(steer);
    //                }
    //            }
    //        }
    //    }


    this.boundaries = function () {

        if (this.status_depl == "H") {
            var d = hopital.bords;
            var xmin = hopital.x1;
            var xmax = hopital.x2;
            var ymin = hopital.y1;
            var ymax = hopital.y2;

        } else if (this.status_depl == "Q") {
            var d = quarantaine.bords;
            var xmin = quarantaine.x1;
            var xmax = quarantaine.x2;
            var ymin = quarantaine.y1;
            var ymax = quarantaine.y2;

        } else {
            var d = ville.bords;
            var xmin = ville.x1;
            var xmax = ville.x2;
            var ymin = ville.y1;
            var ymax = ville.y2;
        }

        var desired = null;

        if (this.position.x < d + xmin) {
            desired = createVector(this.maxspeed, this.velocity.y);
        } else if (this.position.x > xmax - d) {
            desired = createVector(-this.maxspeed, this.velocity.y);
        }

        if (this.position.y < d + ymin) {
            desired = createVector(this.velocity.x, this.maxspeed);
        } else if (this.position.y > ymax - d) {
            desired = createVector(this.velocity.x, -this.maxspeed);
        }

        if (desired !== null) {
            desired.normalize();
            desired.mult(this.maxspeed);
            var steer = p5.Vector.sub(desired, this.velocity);
            steer.limit(this.maxforce);
            this.applyForce(steer);
        }
    }


    this.display_depl = function () {
        // Draw a triangle rotated in the direction of velocity
        var angle = this.velocity.heading() + PI / 2;

        push();
        translate(this.position.x, this.position.y);
        rotate(angle);

        if (this.santé == "S") {
            var col = colors.S;
        }
        if (this.santé == "I") {
            if (this.symptome == "A") {
                var col = colors.A;
            } else if (this.symptome == "SL") {
                var col = colors.SL;
            } else if (this.symptome == "SF") {
                var col = colors.SF;
            } else if (this.symptome == "SE") {
                var col = colors.SE;
            }
        }
        if (this.santé == "M") {
            var col = colors.M;
        }
        if (this.santé == "R") {
            var col = colors.R;
        }

        fill(col);
        stroke(col);

        strokeWeight(3);
        point(0, 0);

        //strokeWeight(1);
        //beginShape();
        //vertex(0, -this.r * 2);
        //vertex(-this.r, this.r * 2);
        //vertex(this.r, this.r * 2);
        //endShape(CLOSE);

        if (this.santé == "I") {
            noFill()
            strokeWeight(1);
            ellipse(0, 0, this.virus_distance * 2);
        }
        pop();
    }


    this.display_status = function (num) {

        if (this.santé == "S") {
            var col_txt = colors.S;
        }
        if (this.santé == "I") {
            if (this.symptome == "A") {
                var col_txt = colors.A;
            } else if (this.symptome == "SL") {
                var col_txt = colors.SL;
            } else if (this.symptome == "SF") {
                var col_txt = colors.SF;
            } else if (this.symptome == "SE") {
                var col_txt = colors.SE;
            }
        }
        if (this.santé == "M") {
            var col_txt = colors.M;
        }
        if (this.santé == "R") {
            var col_txt = colors.R;
        }

        textSize(10);
        strokeWeight(1);
        fill(col_txt);
        stroke(col_txt);
        textAlign(CENTER);

        var nb_col = 20;
        var posX = map(num % nb_col, 0, nb_col - 1, ville.x1 + ville.bords, ville.x2 - ville.bords);
        var posY = map(floor(num / nb_col), 0, floor(nb_agents / nb_col), ville.y1 + ville.bords + 20, ville.y2 - ville.bords);
        text(num, posX, posY)


        if (this.status_depl == "H") {
            var col_rect = colors.H;
        } else if (this.status_depl == "Q") {
            var col_rect = colors.Q;
        } else {
            var col_rect = color(0, 0, 0);
        }

        strokeWeight(2);
        noFill();
        stroke(col_rect);
        textAlign(CENTER);

        rect(posX - 12, posY - 12, 24, 14);
    }

}
