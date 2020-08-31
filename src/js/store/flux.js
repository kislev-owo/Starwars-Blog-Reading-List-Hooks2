const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
			vehicles: [],
			favorites: []
		},
		//cargamos la informacion de getStore y la guardamos en store en cada arreglo vacio de nuestro estado

		actions: {
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }));
				/**
				aqui hacemos get a la api y lo guardamos en data.results q son el array planets de arriba
				*/
			},
			getCharacters: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }));
				/**
				aqui hacemos get a la api y lo guardamos en data.results q son el array characters de arriba
				*/
			},
			getVehicles: () => {
				fetch("https://swapi.dev/api/vehicles/")
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }));
				/**
				aqui hacemos get a la api y lo guardamos en data.results q son el array vehicles de arriba
				*/
			},
			DeleteFavorite: item => {
				const store = getStore();
				let filteredList = store.favorites.filter(current => current != store.favorites[item]);
				setStore({ favorites: filteredList });
				/**
				deleteamos a item haciendo filter de store.favorites luego favorites actualiza a la lista filtrada
				*/
			},

			AddNewFavorite: (item, title) => {
				console.log("getting here");
				setStore({
					favorites: getStore().favorites.concat({
						name: item.name,
						url: `/${title}/${item.id}`

						/**
				en la funcion addNewFavorite concatenamos a el item.name y damos la direccion url del mismo
				*/
					})
				});
			}
		}
	};
};

export default getState;
