import { createContext, useEffect, useReducer, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserDate = createContext();

const DateUser = ({ children }) => {
  const userName = useRef("");
  const email = useRef();
  const password = useRef();
  const [hash, setHash] = useState('');

  const navigate = useNavigate();
  const [error, setError] = useState();
  const [state, dispatch] = useReducer(reducer, {});

  function reducer(prev, action) {
    if (action.type === "register") {
      if (JSON.parse(localStorage.getItem(userName.current.value))) {
        setError(
             `The Username is already exist`

        )
        return { prev
        };
      } else {
        return {
          username: userName.current.value,
          email: email.current.value,
          password: hash,
        };
      }
    } else {
      return prev;
    }
  }
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem(userName.current.value))) {
      localStorage.setItem(userName.current.value, JSON.stringify(state));
      setError(null)
      navigate("login");
    }
  }, [state]);

  return (
    <UserDate.Provider
      value={{ userName, email, password, state, dispatch, error, setError, navigate , hash, setHash }}
    >
      {children}
    </UserDate.Provider>
  );
};

export default DateUser;
