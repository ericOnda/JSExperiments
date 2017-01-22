var app = angular.module('insertRemoveList', []);

app.controller('ListController', ListController);


/*Controllers*/
function ListController(){

	vm 					= this;
	vm.nomes 			= [];
	vm.nome 			= '';

	vm.adicionarNome	= function(){

		vm.nomes.push(vm.nome);
		vm.nome 		= '';
	};

	vm.removerNome 		= function(n){
		
		vm.nomes.splice( vm.nomes.indexOf(n), 1 );

	};
}