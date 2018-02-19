const initialState = {
  token: ""
};
// noinspection JSAnnotator
export default function(state: any = initialState, action: Function) {
  switch (action.type) {
    case "USER_LOGIN_ERROR":
      return { ...state, hasLoginError: true, isLoginProcessing: action.error };
    case "USER_LOGIN_START":
      return { ...state, hasLoginError: false, isLoginProcessing: [] };
    case "USER_LOGIN_SUCCESS":
      return { ...state, token: action.token, user: action.user, isLoginProcessing: [] };
    default:
      return state;
  }
}
