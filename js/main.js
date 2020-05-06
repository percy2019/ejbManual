const vue = new Vue({
    el: "#app",
    store,
    data: {
        titulo: 'Crud Usando el Vue js',
        generos: ['M', 'F'],
        bandera: -1,
        nombre: '',
        apellido: '',
        genero: '',
        edad: 0,
        clientes: []
    },
    methods: {
        agregar() {
            if (this.bandera == -1) {
                this.clientes.push({
                    nombre: this.nombre,
                    apellido: this.apellido,
                    edad: this.edad,
                    genero: this.genero
                });
                alert('Cliente Registrado');
            } else {
                this.clientes[this.bandera].nombre = this.nombre;
                this.clientes[this.bandera].apellido = this.apellido;
                this.clientes[this.bandera].genero = this.genero;
                this.clientes[this.bandera].edad = this.edad;
                alert('Modificado con Exito');
                this.bandera = -1;
            }

            this.nombre = '',
                this.apellido = '',
                this.genero = '',
                this.edad = 0
        },
        modificiar(index) {
            this.nombre = this.clientes[index].nombre;
            this.apellido = this.clientes[index].apellido;
            this.genero = this.clientes[index].genero;
            this.edad = this.clientes[index].edad;
            this.bandera = index;
        },
        eliminar(id) {
            this.clientes.splice(id, 1);
        },
        eliminartodo() {
            this.clientes.splice(0, this.clientes.length);
        },

        ...Vuex.mapMutations(['fListarCliente', 'fAgregarCliente', 'fModificarCliente', 'fEliminarCliente', 'fEliminarTodo']),

        AgregarCliente: function () {
            if (this.bandera == -1) {
                this.fAgregarCliente({
                    nombre: this.nombre,
                    apellido: this.apellido,
                    edad: this.edad,
                    genero: this.genero
                });
                this.nombre = '',
                this.apellido = '',
                this.edad = '',
                this.genero = ''
            }
        },
        ModificarCliente: function (id) {
            if (id !== -1) {
                // this.fModificarCliente({
                //     index: this.bandera,
                //     nombre: this.nombre,
                //     apellido: this.apellido,
                //     edad: this.edad,
                //     genero: this.genero
                // });
                // this.bandera = -1;
                alert(id);
            }
        },
        EliminarCliente: function (id) {
            this.fEliminarCliente(id);
        },
        EliminarTodo: function () {
            this.fEliminarTodo();
        }
    },
    filters: {
        fGenero: function (value) {
            return value == 'M' ? "Masculino" : "Femenino"
        }
    },
    created() {

    },
    computed: {
        ...Vuex.mapGetters(['fMostrarClientes','fCantidadCliente']),
        // ...mapMutations(['fAgregarCliente']),
        // ...Vuex.mapMutations(['fAgregarCliente', 'fEliminarCliente', 'fEliminarTodo']),
        // ingresarClientes(){
        //     // return $store.commit('fAgregarCliente')
        // },
        totalCliente() {
            return this.clientes.length;
        }
    }
});