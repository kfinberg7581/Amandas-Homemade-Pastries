'use strict';

// === API ===

const fetchRecipes = async () => {
	const rBody = document.querySelector('.rBody');
	console.log(rBody);
	rBody.classList.remove('hide');
	try{
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'd568df20d4msh00e9d5ae2229121p1e53f6jsn0320e2bc74cb',
				'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
			}
		};
		
		const response = await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
			.then(response => {
				return response.json();
			})
			.then(data => {
				console.log(data);
				data.results.forEach(recipe=> {
					const insert = `<li>&hearts; ${recipe.name}</li>`;
					document.querySelector('.recipe-text ul').insertAdjacentHTML('beforeend', insert);
				});
			})
			.catch(err => console.error(err, 'Could not fetch the recipes from the API.'));

    }catch(error){
        console.log(error);
    }
};

const apiBtn = document.querySelector('.apiBtn');
console.log(apiBtn);

apiBtn.addEventListener('click', fetchRecipes);