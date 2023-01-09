import { createContext, useState, useEffect } from "react";

const user = JSON.parse(localStorage.getItem("user"));
const oldProduct = JSON.parse(localStorage.getItem("products"));
const erned = JSON.parse(localStorage.getItem("price"));
const incoming = JSON.parse(localStorage.getItem("paid"));
const outcoming = JSON.parse(localStorage.getItem("change"));

export const DataCenter = createContext();

const DataFile = ({ children }) => {
  const [counter, setCounter] = useState(user);
  const [products, setProducts] = useState(oldProduct || []);
  const [sum, setSum] = useState([]);
  const [sumOfPrice, setSumOfPrice] = useState(+erned || 0);
  const [sumOfPaid, setSumOfPaid] = useState(+incoming || 0);
  const [sumOfChange, setSumOfChange] = useState(+outcoming || 0);
  const [outPut, setOutput] = useState("");
  const [paid, setPaid] = useState();
  const [change, setChange]=useState()
  const [goBack, setGoBack]=useState(false)

  useEffect(() => {
    products.sort((a, b) => a.name.localeCompare(b.name));
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(counter));
  }, [counter]);
  useEffect(() => {
    localStorage.setItem("price", JSON.stringify(sumOfPrice));
  }, [sumOfPrice]);
  useEffect(() => {
    localStorage.setItem("paid", JSON.stringify(sumOfPaid));
  }, [sumOfPaid]);
  useEffect(() => {
    localStorage.setItem("change", JSON.stringify(sumOfChange));
  }, [sumOfChange]);
  return (
    <DataCenter.Provider
      value={{
        counter,
        setCounter,
        sum,
        setSum,
        products,
        setProducts,
        sumOfPrice,
        setSumOfPrice,
        sumOfPaid,
        setSumOfPaid,
        sumOfChange,
        setSumOfChange,
        outPut,
        setOutput,
        paid, 
        setPaid,
        change,
         setChange,
         goBack,
         setGoBack
      }}
    >
      {children}
    </DataCenter.Provider>
  );
};

export default DataFile;
