import { Todo } from "../todos/models/todo.models";


const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}


const state = {
    todos:[
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
    ],
    Filter: Filters.All
}

const initStore = () =>{
    console.log(state);
    console.log('InitStore');
}

const loadStore = () =>{
    throw new error('no se ha implementado, es un load store');
    
}


const getTodos = (filter = Filters.All) =>{
    switch (filter) {
        case Filters.All:
            return [...state.todos]

        case Filters.Completed:
            return state.todo.filter(todo => todo.done)

        case Filters.Pending:
            return state.todo.filter(todo => !todo.done)
        default:
            throw new Error('opcion ${ filter } no es valido');
            
    }
}

/**
 * 
 * @param {String} description
 */
const addTodo = (description) => {
    if (!description) 
        throw new Error("la descripcion es requerido");
        
        state.todos .push( new todo(description) )
        
    
}


/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId ) => {
   state.todos = state.todos.map(todo => {
         if(todo.id === todoId ){
            todo.done  = !todo.done;// aca pasa la negacion, si es que esta en true pasa a false y sucesivamente
         }
         return todo;
         })
    
}

const deletetodo = (todoId) =>{
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    
}

const deleteCompleted= () =>{
    state.todos = state.todos.filter(todo => todo.done);
    
}
/**
 * 
 * @param {Filters} newfilter 
 */
const setFilter = (newfilter= Filters.All) => {
    state.filter = newfilter;

    
}

const getCurrentFilter  = () => {
    return state.filter;
    
}



export default{
    addTodo,
    initStore,
    loadStore,
    toggleTodo,
    deletetodo,
    deleteCompleted,
    setFilter,
    getTodos,
    getCurrentFilter,
}