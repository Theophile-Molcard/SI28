# SI28
Site web SI28

<html>

<head>

    <meta charset="utf-8" />
    
    <link rel="stylesheet" href="accueil.css" />

</head>

<body>


    <div class="bord" id="bord_gauche" onmouseover="defilement(-1);" onmouseout="stop(); out_borders()">
        <img id="fleche_gauche" class="fleche" src="ressources/fleche_gauche.png" />
    </div>

    <div class="bord" id="bord_droit" onmouseover="defilement(1);" onmouseout="stop(); out_borders();">
        <img id="fleche_droite" class="fleche" src="ressources/fleche_droite.png" />
    </div>

    <div id="navbar">
        <img id="pellicule" src="ressources/pelicule_titre_12.png" />
        <img id="selecteur" src="Ressources/selecteur_pel.png" />
    </div>

    <div id="navbar_bas">
        <img id="pellicule_bas" src="ressources/pelicule_titre_12.png" />
    </div>

    <div id="container">
        

        <div class="contours" onmouseover="zoom0(1)">
            <div class="cases" onmouseover="zoom0(0)">
                
            </div>
        </div>

        <div class="section" id="section1" onmouseover="section_id = this.id; zoom0(0);" onwheel="zoomer(event);" onclick="zoom_total(event);"><br><br><br>
            Montage
        </div>
        
        <div class="section_1_imgs" id="section1_img" onwheel="zoomer(event);" onclick="zoom_total(event);">
            
            <a href="Montage/regle_des_tiers.html"><img class="section_1_img" src="Ressources/section_1_1.png"></a>
            
            <a href="Montage/sens_lecture.html"><img class="section_1_img" src="Ressources/section_1_2.png"></a>
            
            <a href="Montage/lignes_directrices.html"><img class="section_1_img" src="Ressources/section_1_3.png"></a>
            
            <a href="Montage/formes.html"><img class="section_1_img" src="Ressources/section_1_4.png"></a>
            
            
            
        </div>

        

        <div class="section" id="section2" onmouseover="section_id = this.id" onwheel="zoomer(event);" onclick="zoom_total(event);" onmouseout="zoom0(event);"><br><br><br>
            
            Cadrage
            
        </div>

        <div class="section" id="section3" onmouseover="section_id = this.id" onwheel="zoomer(event);" onclick="zoom_total(event);" onmouseout="zoom0(event);"><br><br><br>
            
            Lumières
            
        </div>
        
        <div class="section" id="section4" onmouseover="section_id = this.id" onwheel="zoomer(event);" onclick="zoom_total(event);" onmouseout="zoom0(event);"><br><br><br>
            
            Mouvements de caméra
            
        </div>

    </div>




</body>

</html>

<script type="text/javascript" src="accueil.js"></script>
