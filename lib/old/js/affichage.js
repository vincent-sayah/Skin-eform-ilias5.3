var id=1;
var nom = 'ENSM';
var article = '<img src="Customizing/global/skin/eformarine/images/style_edition/logo_ensm.png"/>'
			+'<h1>'
			+'ENSM'
			+'</h1>'
			+'<h2>'
			+'École de Navigation Sous-Marine de Brest.'
			+'</h2>'
			+'<p class="description">'
			+'L/’Ecole de Navigation Sous-Marine de Brest, dont l’action est coordonnée par l’adjoint au directeur, est organisée autour de trois divisions, d’un secrétariat général et d’une cellule pilotage.'
			+'</p>';
var cadre = '<table><tr><td><td class="item"><td></tr><tr><td class="item"><td><td class="item"></tr><tr><td><td class="item"><td></tr></table>';
var search = '<a href="#"><img src="Customizing/global/skin/eformarine/images/style_edition/bleugris/loupe.png"/></a>';
var pied = '<div class="acces_formation">'
				+'<a href="#"><img src="Customizing/global/skin/eformarine/images/style_edition/button_acces_formation.png"/></a>'
			+'</div>'
			+'<div class="facebook">'
				+'<a href="#"><img src="Customizing/global/skin/eformarine/images/style_edition/bleugris/facebook.png"/></a>'
			+'</div>'
			+'<div class="www">'
				+'<a href="#"><img src="Customizing/global/skin/eformarine/images/style_edition/bleugris/www.png"/></a>'
			+'</div>'
ensm = new boite(id, nom, article, cadre, search, pied, 'ensm');


boites = Array(ensm);


    
function afficherParCategorie(categorie){
	//ici
}