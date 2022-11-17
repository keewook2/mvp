
export type InputType = {
  title: string;
  subtitle: string;
  category: string;
};

export type StateType = {
  imgURL: string;
  inputs: InputType
};

export type ActionType = { type: 'CHANGE_IMAGE'; payload?: any; }
  | { type: 'CHANGE_INPUT'; payload?: any; };

export const initialState = {
  imgURL: 'https://images.unsplash.com/photo-1548318281-7da3085ce691?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1041&q=80',
  inputs: {
    title: '>Enter title',
    subtitle: '>Enter subtitle',
    category: '>Enter category'
  }
}

const reducer = (state: StateType, action: ActionType) => {
  switch(action.type) {
    case 'CHANGE_IMAGE':
      return {
        ...state,
        imgURL: action.payload
      }
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.payload.name]: action.payload.value
        }
      }
    default:
      return state;
  }
}

export default reducer;
