import {createStore} from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type){
    case 'btn-plus':
      return state + 1;
    case 'btn-minus':
      return state - 1;
    case 'btn-nullify':
      return state*0;
    default:
      return state;
  }
}

const plus = () => ({type:'btn-plus'});
const minus = () => ({type:'btn-minus'});
const nullify = () => ({type:'btn-nullify'});

const store = createStore(reducer);

document.getElementById('btn-plus').addEventListener('click', () => {
  store.dispatch(plus());
});

document.getElementById('btn-minus').addEventListener('click', () => {
  store.dispatch(minus());
});

document.getElementById('btn-nullify').addEventListener('click', () => {
  store.dispatch(nullify());
});

const update = () =>{
  document.getElementById('count').textContent = store.getState();
}

store.subscribe(update);
