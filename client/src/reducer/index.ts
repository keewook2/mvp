
export type InputType = {
  title: string;
  subtitle: string;
  category: string;
};

export type SelectedType = {
  gradient: boolean;
  solid: boolean;
  image: boolean;
  three: boolean;
  two: boolean;
  one: boolean;
  textShadow: boolean;
  colorContrast: boolean;
  smallText: boolean;
}

export type StateType = {
  imgURL: string;
  inputs: InputType;
  selected: SelectedType;
};

export type ActionType = { type: 'CHANGE_IMAGE'; payload?: any; }
  | { type: 'CHANGE_INPUT'; payload?: any; }
  | { type: 'GRADIENT_CLICK'; }
  | { type: 'SOLID_CLICK'; }
  | { type: 'IMAGE_CLICK'; }
  | { type: 'THREE_CLICK'; }
  | { type: 'TWO_CLICK'; }
  | { type: 'ONE_CLICK'; }
  | { type: 'TEXTSHADOW_CLICK'; }
  | { type: 'CONTRAST_CLICK'; }
  | { type: 'SMALLTEXT_CLICK'; };

export const initialState = {
  imgURL: 'https://images.unsplash.com/photo-1548318281-7da3085ce691?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1041&q=80',
  inputs: {
    title: '>Enter title',
    subtitle: '>Enter subtitle',
    category: '>Enter category'
  },
  selected: {
    gradient: false,
    solid: false,
    image: false,
    three: true,
    two: false,
    one: false,
    textShadow: false,
    colorContrast: false,
    smallText: false,
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
    case 'GRADIENT_CLICK':
      return {
        ...state,
        selected: {
          ...state.selected,
          gradient: true,
          solid: false,
          image: false,
        }
      }
    case 'SOLID_CLICK':
      return {
        ...state,
        selected: {
          ...state.selected,
          gradient: false,
          solid: true,
          image: false,
        }
      }
    case 'IMAGE_CLICK':
      return {
        ...state,
        selected: {
          ...state.selected,
          gradient: false,
          solid: false,
          image: true,
        }
      }
    case 'THREE_CLICK':
      return {
        ...state,
        selected: {
          ...state.selected,
          three: true,
          two: false,
          one: false,
        }
      }
    case 'TWO_CLICK':
      return {
        ...state,
        selected: {
          ...state.selected,
          three: false,
          two: true,
          one: false,
        }
      }
    case 'ONE_CLICK':
      return {
        ...state,
        selected: {
          ...state.selected,
          three: false,
          two: false,
          one: true,
        }
      }
    case 'TEXTSHADOW_CLICK':
      return {
        ...state,
        selected: {
          ...state.selected,
          textShadow: true,
        }
      }
    case 'CONTRAST_CLICK':
      return {
        ...state,
        selected: {
          ...state.selected,
          colorContrast: true,
        }
      }
    case 'SMALLTEXT_CLICK':
      return {
        ...state,
        selected: {
          ...state.selected,
          smallText: true,
        }
      }
    default:
      return state;
  }
}

export default reducer;
