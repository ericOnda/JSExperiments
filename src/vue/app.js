var app 	= new Vue({

	el 	 		: '#root',

	data 		: {

		nomes 	: [], 
		name  	: '',
	},

	methods 	: {

		adicionarNome(){
			
			this.nomes.push(this.name);
			this.name = '';
		},

		removerNome(n){
			this.nomes.splice( this.nomes.indexOf(n), 1 );
		}
	}	

});