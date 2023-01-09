import "./incoming.css";
import { DataCenter } from "../../../DataFile";
import { useContext } from "react";

const Incoming = () => {
  const { counter, sumOfPaid } = useContext(DataCenter);
  return (
    <div className="incoming">
      {`${sumOfPaid.toFixed(
        2
      )} Euro is The Total incoming in The Cash Box ${counter[1]}`}
    </div>
  );
};

export default Incoming;
