const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
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

			AddNewFavorite: (item, objType) => {
				const store = getStore();
				let found = store.favorites.find(element => element.stringToDisplay == item.name);

				// Al agregar este bloque de código empieza a dar error el código con el condicional y las variables objeto
				//if (found == undefined) {
				//	let listEntry = {
				//		stringToPush: `/${objType}/${item.name}`,
				//		stringToDisplay: item.name
				//	};
				//	setStore({ favorites: [...store.favorites] });
				//}
			},

			DeleteFavorite: item => {
				const store = getStore();
				let filteredList = store.favorites.filter(current => name != current.stringToDisplay);
				setStore({ favorites: filteredList });
			}
		}
	};
};

export default getState;
