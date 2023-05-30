import { produce } from "immer";

const state = {
  name: 'Tom',
  hobbies: ['tennis','soccer']
}

const newState = produce( state ,draft => {
  draft.name = 'Jhon';
  console.log(draft);
})

console.log(state,newState);