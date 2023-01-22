import axios from "axios";
import { useContext, createContext, useReducer } from "react";
import reducer from "./reducer";
import * as ACTIONS from "./actions";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");

export const initialState = {
  user: user || null,
  token: token || null,
  allCandidates: null,
  allPositions: null,
  allStudents: null,
  numOfPages: 1,
  page: 1,
  stats: [],
  search: "",
  sort: "latest",
  sortOptions: [
    { _id: "latest" },
    { _id: "oldest" },
    { _id: "a-z" },
    { _id: "z-a" },
  ],
  errorMessage: "",
  successMessage: "",
  isLoading: false,
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Instance Setup
  const authFetch = axios.create({
    baseURL: "/api/",
  });

  //request Interceptor
  authFetch.interceptors.request.use(
    (config) => {
      dispatch({ type: ACTIONS.FETCH_START });
      config.headers.Authorization = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      dispatch({ type: ACTIONS.FETCH_STOP });
      return Promise.reject(error);
    }
  );

  authFetch.interceptors.response.use(
    (response) => {
      dispatch({ type: ACTIONS.FETCH_STOP });
      return response;
    },
    (error) => {
      dispatch({ type: ACTIONS.FETCH_STOP });
      const err = error.response;
      // console.log(err);

      if (err.status === 401 || err.status === 500) {
        logout();
        dispatch({ type: ACTIONS.INIT_STATE });
      }
      return Promise.reject(error);
    }
  );

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const getStudents = async () => {
    try {
      const res = await authFetch.get("/students/");
      dispatch({ type: ACTIONS.SET_STUDENTS, payload: { students: res.data } });

      return res.data;
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const getCandidates = async () => {
    try {
      const res = await authFetch.get("/candidates/");
      dispatch({
        type: ACTIONS.SET_CANDIDATES,
        payload: { allCandidates: res.data },
      });

      return res.data;
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const getPositions = async () => {
    try {
      const res = await authFetch.get("/positions");
      dispatch({
        type: ACTIONS.SET_POSITIONS,
        payload: { allPositions: res.data },
      });
      return res.data;
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const login = async (data) => {
    try {
      dispatch({ type: ACTIONS.FETCH_START });
      const res = await axios.post("/api/auth/login", data);
      const { advisor: user, token } = res.data;

      dispatch({
        type: ACTIONS.LOGIN,
        payload: {
          user,
          token,
        },
      });

      addUserToLocalStorage({ user, token });
      dispatch({ type: ACTIONS.FETCH_STOP });
      return user;
    } catch (error) {
      dispatch({ type: ACTIONS.FETCH_STOP });
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const addPosition = async (position) => {
    try {
      const res = await authFetch.post("/position", position);
      return res.data.position;
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };
  const addCandidates = async (candidateInfo) => {
    try {
      const res = await authFetch.post("/candidate", candidateInfo);
      await getCandidates();
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };
  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
    removeUserFromLocalStorage();
  };

  const handleInputChange = (name, value) => {
    dispatch({ type: ACTIONS.HANDLE_CHANGE, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: ACTIONS.CLEAR_FILTERS });
  };

  const clearMessage = () => {
    dispatch({ type: ACTIONS.CLEAR_MESSAGE });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        login,
        getPositions,
        logout,
        clearMessage,
        getStudents,
        getCandidates,
        addCandidates,
        clearFilters,
        handleInputChange,
        addPosition,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
