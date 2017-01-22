document.querySelector('#btnadd').addEventListener('click', adicionarNome);

function removerNome(e){

	var pNode = e.parentNode;
	
	if (pNode){
		pNode.parentNode.removeChild(pNode);
	}

}

function adicionarNome() {
	
	var nome = document.querySelector('#nome').value;

	var listWrapper = document.querySelector('#list-wrapper');

	if(nome){

		listWrapper.innerHTML = listWrapper.innerHTML+'<div class="list-group"><button type="button" class="list-group-item">'+nome+'</button><a onclick="return removerNome(this);" id="btnRmv" href="#">Remover</a></div>';

	}
}