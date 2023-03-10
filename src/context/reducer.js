import * as ACTIONS from "./actions";
import { initialState } from "./AppContext";

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        errorMessage: action.payload.msg,
      };
    case ACTIONS.SUCCESS_MSG:
      return {
        ...state,
        successMessage: action.payload.msg,
      };
    case ACTIONS.FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.FETCH_STOP:
      return {
        ...state,
        isLoading: false,
      };
    case ACTIONS.INIT_STATE:
      return {
        ...initialState,
      };

    case ACTIONS.SEARCH_DEFAULTS:
      return {
        ...state,
        searchRegNum: "all",
        search: "",
        searchEntryYear: "all",
      };
    case ACTIONS.CLEAR_MESSAGE:
      return {
        ...state,
        errorMessage: null,
        successMessage: null,
      };
   

    case ACTIONS.SET_STATS:
      return {
        ...state,
        stats: action.payload.stats,
      };
    case ACTIONS.HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case ACTIONS.SET_STUDENTS:
      return {
        ...state,
        allStudents: action.payload.allStudents,
      };
    case ACTIONS.SET_CANDIDATES:
      return {
        ...state,
        allCandidates: action.payload.allCandidates,
      };
    case ACTIONS.SET_POSITIONS:
      return {
        ...state,
        allPositions: action.payload.allPositions,
      };

    default:
      return state;
  }
}
