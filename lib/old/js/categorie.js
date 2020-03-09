// Ajout des catégories ici : possiblité d'ajouter plusieurs catégories à une école (grâce aux classes CSS)
var categories = {
    categories:[ 
		{
			"name":"Tous" // A garder et à donner a chaque nouvelle école
		},
		{
            "name":"Opérations embarquées" //  ajouter classe categorie1 à la <div> de classe 'contenu', pour chacune
        },
		{
			"name":"Administration et soutien de l’Homme" //categorie2
		},
		{
			"name":"Techniques maritimes" //categorie3
		},		
		{
			"name":"Navire/Sécurité/Logistique" //categorie4
		},		
		{
			"name":"Maintenance aéronautique" //categorie5
		},		
		{
			"name":"Opérations maritimes" //categorie6
		},		

    ]
}
var menu = '<div class="col-lg-offset-1 col-md-offset-1 col-xs-offset-0 col-lg-10 col-md-10 col-xs-12 id="menu_filtre_eform" id="colonnage1"><ul id="nav_filtres" class="nav  hidden-print">';

for (i=0; i<categories.categories.length; i++){
    menu += '<li id='+categories.categories[i].name+' class=" onglet" onclick="afficherParCategorie('+i+', this)"><a href="#">'+categories.categories[i].name+'</a></li>';
}
menu += '</ul></div>';
document.getElementById('menuCategorie').innerHTML = menu;