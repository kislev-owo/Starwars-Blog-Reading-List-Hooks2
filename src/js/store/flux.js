const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
			vehicles: [],
			favorites: []
		},

		actions: {
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }));
				/**
					fetch(url).then(response).then(data => setStore({ "foo": data.bar }))
				*/
			},
			getCharacters: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getVehicles: () => {
				fetch("https://swapi.dev/api/vehicles/")
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			DeleteFavorite: item => {
				const store = getStore();
				let filteredList = store.favorites.filter(current => current != store.favorites[item]);
				setStore({ favorites: filteredList });
			},

			AddNewFavorite: (item, title) => {
				console.log("getting here");
				setStore({
					favorites: getStore().favorites.concat({
						name: item.name,
						url: `/${title}/${item.id}`
					})
				});
			}
		}
	};
};

export default getState;
