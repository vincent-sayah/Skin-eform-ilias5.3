cpt=0;
		
		function afficheGrillage(nom){
		// à chaque nouvelle école, ajouter les classes 'header_bloc' et  'header_blocNOMECOLE'
		// et sur le lien de la loupe -> onclick="afficheGrillage('NOMECOLE')"
		// pour le damier, ajouter les classes 'grillage' et 'grillageNOMECOLE'
			$('.header_bloc'+nom).slideToggle(300); 
			$('.grillage'+nom).slideToggle(300);
		}
		
		function chargement(categorie, active){
			afficherParCategorie(categorie, active);
			afficheCours();
			
		}
		
		function afficheCours(){
			if($('.ligneGalerie').length==1){
				$('.arrow').css({'display':'none'});
				
			}
			$('.lignegalerie1').show();
		}
		
		function afficherParCategorie(categorie, active){
		
		
		
			var nb = $('.bloc').length; // donne le nombre d'écoles pour gérer l'affichage et les marges			
			$('.active').removeClass('active');
			var activeVar = $(active).children()[0];
			$(activeVar).addClass('active'); // ajout de la classe 'active' sur le lien sur lequel on vient de cliquer pour le colorer
			for(var i=1; i<=nb; i++){
				$('div').removeClass('largeur'+i);
			}
			
			// début fonction de gestion de placement des blocs pour gérer l'affichage et les marges
			var nb = $('.categorie'+categorie).length;
			var l = 0;
			for(var i=0;i<=nb;i++){
				if(nb>5){
					nb=nb-5;
					var test = $('.categorie'+categorie).children()[l];
					$(test).addClass('largeur'+5);
				}
				else{
					var test = $('.categorie'+categorie).children()[l];
					$(test).addClass('largeur'+nb);
				}
				var l = l+5;
			}
			//fin 
			
			if(cpt==0){
				$('.contenu').fadeOut(0);
				$('.categorie'+categorie).delay(0).fadeIn(0);
				cpt=cpt+1;
			}
			else{
				$('.contenu').fadeOut(0);
				$('.categorie'+categorie).delay(300).fadeIn(300);
			}
		}
		
		function afficherTous(){
			$('.contenu').fadeOut(300);
			var nb = $('.bloc').length;
			for(var i=1; i<=nb; i++){
				$('div').removeClass('largeur'+i);
			}
			$('.contenu').fadeIn(300);
		}
		
		function galerieSuivante(numero){
			var suivant = numero+1;
			if($('.lignegalerie'+suivant).length){
				$('.lignegalerie'+numero).fadeOut(0);
				$('.lignegalerie'+suivant).fadeIn(300);
			}

		}		
		
		function galeriePrecedente(numero){
			var suivant = numero-1;
			if($('.lignegalerie'+suivant).length){
				$('.lignegalerie'+numero).fadeOut(0);
				$('.lignegalerie'+suivant).fadeIn(300);
			}
		}