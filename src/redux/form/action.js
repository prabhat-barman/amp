export const SET_FORM_DATA = "SET_FORM_DATA";
export const SAVE_EDIT_FORM = "SAVE_EDIT_FORM";

export const setFormData = (data) => {
  return {
    type: SET_FORM_DATA,
    data,
  };
};
export const saveEditForm = (data, key) => {
  return {
    type: SAVE_EDIT_FORM,
    data,
    key,
  };
};
