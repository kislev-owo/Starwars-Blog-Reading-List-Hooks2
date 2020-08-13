const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
			favorites: [],
			todos: []
		},

		actions: {
			addToFavorites: item => {
				setStore({ favorites: getStore().favorites.concat(item) });
			},
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
			}
		}
	};
};

export default getState;

/*


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

            demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			todos: [],
			personajes: [
				{
					id: 1,
					name: "Pedro",
					last_name: "Perez",
					age: 34
				},
				{
					id: 2,
					name: "Emilio",
					last_name: "Perez",
					age: 57
				},
				{
					id: 3,
					name: "Rodrigo",
					last_name: "Perez",
					age: 16
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchGetTodos: async () => {
				let response = await fetch(url);
				if (reacngns) return todos;
			},
			getTodos: async () => {
				const currentActions = getActions();
				await currentActions.fetchGetTodos();
			},
			addTask: newTask => {
				const currentStore = getStore();
				//llamo a la api, recibo los data, actualizo el store
				setStore({
					todos: [...currentStore.todos, newTask]
				});
			},
			removeTask: index => {
				const currentStore = getStore();
				const filteredList = currentStore.todos.filter((task, i) => index != i);
				setStore({
					todos: filteredList
				});
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				
            },
            
            
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
*/
