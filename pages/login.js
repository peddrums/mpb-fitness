import axios from "axios";

import { useReducer } from "react";

const initialState = { email: "", password: "" };

const loginReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export default function Login() {
  const [formState, dispatch] = useReducer(loginReducer, initialState);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formState);
    const { email, password } = formState
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      console.log(data)
    } catch (err) {
      alert(err.response.data ? err.response.data.message : err.message);
    }
    //const { data } = await axios.post("/api/users/login", { email, password });
  };
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => dispatch({ type: "EMAIL", payload: e.target.value })}
      />
      <input
        type="password"
        name="email"
        id="email"
        onChange={(e) =>
          dispatch({ type: "PASSWORD", payload: e.target.value })
        }
      />
      <button type="submit">Click Me!</button>
    </form>
  );
}
