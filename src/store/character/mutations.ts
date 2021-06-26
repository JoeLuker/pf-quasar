import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';

const mutation: MutationTree<ExampleStateInterface> = {
  someMutation(state: ExampleStateInterface) {
    // your code

    state.penelope.level = state.penelope.introduction.class.reduce(
      (accumulator, cur) => accumulator + cur.level, 0,
    );
  },
};

export default mutation;
