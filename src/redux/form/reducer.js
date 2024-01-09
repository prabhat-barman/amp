import { SET_FORM_DATA, SAVE_EDIT_FORM } from "./action";
const initialUserState = {
  formData: [],
};

const formReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_FORM_DATA: {
      return { ...state, formData: [...state.formData, action.data] };
    }
    case SAVE_EDIT_FORM: {
      let updateForm = state.formData.map((data, key) => {
        return action.key == key ? action.data : data;
      });

      console.log("updateForm", updateForm);
      return { ...state, formData: updateForm };
    }

    default: {
      return { ...state };
    }
  }
};
export default formReducer;
