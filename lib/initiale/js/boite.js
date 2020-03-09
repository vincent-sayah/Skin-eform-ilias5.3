function boite(id, nom, article, cadre, search, pied, categorie) {
    this.id = id;
	this.nom = nom;
    this.article = article;
    this.cadre = cadre;
	this.search = search;
	this.pied = pied;
    this.categorie = categorie;
    this.switchTemp = 0;
}

boite.prototype ={
    display:function(x,y){				  // méthode permettant affichage du convertisseur
        var obj=this;


		this.div =_cn("div", {class:"contenu"},{}, _id('page'));

		
		this.div =_cn("div", {id:obj.nom, class:'bloc col-lg-offset-1_5 col-lg-2_5'},{}, this.div);
		this.div = _cn("div", {id:'header'+obj.nom, class:"header"},{}, this.div);
        this.div.innerHTML = obj.article;
		
		this.div = _cn("div", {class:'hr'},{}, _id(obj.nom));
		this.div = _cn("div", {class:'search'},{}, _id(obj.nom));
		this.div.innerHTML = obj.search;
		this.div.onclick = function(){obj.switchBoite()};
		
		this.div = _cn("div", {class:'footer'},{}, _id(obj.nom));
		this.div.innerHTML = obj.pied;
    },
    switchBoite:function() {
        if(this.switchTemp == 0){
            document.getElementById('header'+this.nom).innerHTML = this.cadre;
            this.switchTemp = 1;
        }
        else{
            document.getElementById('header'+this.nom).innerHTML = this.article;
            this.switchTemp = 0;
        }
    },
};