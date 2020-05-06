const store = new Vuex.Store({
    state: {
        estado: 'Usando el Estado',
        Clientes: []
    },
    mutations:{
        fListarCliente: (state, todo) => state.Clientes,
        fAgregarCliente:(state, payload) => {
            state.Clientes.push(payload);
        },
        fModificarCliente:(state, payload) => {
            state.Clientes[payload.index].nombre = payload.nombre;
            state.Clientes[payload.index].apellido = payload.apellido;
            state.Clientes[payload.index].genero = payload.genero;
            state.Clientes[payload.index].edad = payload.edad; 
        },
        fEliminarCliente:(state, payload) => {
            state.Clientes.splice(payload, 1);
        },
        fEliminarTodo:(state) => {
            state.Clientes.splice(0, state.Clientes.length)
        }
    },
    actions:{
        fBorrarTodo:() =>{

        }
    },
    getters:{
        fMostrarClientes: (state) => state.Clientes,
        fCantidadCliente: (state) => state.Clientes.length
    }
});