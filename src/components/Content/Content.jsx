import { Route, Routes } from "react-router-dom";
import Shoping from "./Shopping/Shopping";
import Erned from "./Earnd/Erned";
import Incoming from "./Incoming/Incoming";
import Outcoming from "./Outcoming/Outcoming";
import AddProducts from "./AddProducts/AddProducts";
import DeleteProducts from "./DeleteProducts/DeleteProducts";
import Paid from "./Shopping/Paid/Paid";
import Change from "./Shopping/Change/Change";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Shoping />} />
          <Route path="erned" element={<Erned />} />
          <Route path="incoming" element={<Incoming />} />
          <Route path="outcoming" element={<Outcoming />} />
          <Route path="totalcashbox" element={<DeleteProducts />} />
          <Route path="addproducts" element={<AddProducts />} />
          <Route path="paid">
            <Route index element={<Paid />} />
            <Route path="change" element={<Change />} />
          </Route>
          <Route path="*" element={<Shoping />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Content;
