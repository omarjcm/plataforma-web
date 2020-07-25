'use strict';

var content = document.getElementById('content');

getData(1);


function getData(id){
	if (id <= 10) {
		fetch('https://rickandmortyapi.com/api/character/'+id, {
			method: 'GET',
		}).then(data => data.json())
		  .then(data => {
		  	let html = `
				<div class="content-data">
					<div>
						Nombre:
					</div>
					<div>
						${ data.name }
					</div>
					<div>
						Especie:
					</div>
					<div>
						${ data.species }
					</div>
					<div>
						Imagen:
					</div>
					<div>
						<img src="${ data.image }" />
					</div>
				</div>
		  	`;
		  	content.innerHTML += html;

		  	id++;
		  	getData(id);
		  });
	}
}