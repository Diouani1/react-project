import 'react-confirm-alert/src/react-confirm-alert.css';
import "./shopping.css"
import  { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button, ButtonGroup, Table } from "reactstrap";
import { DataCenter } from "../../../DataFile";
import { confirmAlert } from 'react-confirm-alert';
import { NavLink } from 'react-router-dom';

const Shoping = () => {
  const {sum, setSum , products}=useContext(DataCenter)
  function handelSum(num) {
    setSum([...sum, num]);
  
  }
  function handelDelete(e){
   const delet= sum.splice( e.target.parentNode.getAttribute("name"),1,)
    const newSum=sum.filter(item=>item.name !==delet.name)
    setSum(newSum)
 

  }
  function DeleteAll(){
    setSum([])
  }
  const handelAllDelete = () => {

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
          <h1>Are you sure ?</h1>
          <p>You want to delete All ?</p>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            onClick={() => {
              DeleteAll();
              onClose();
            }}
            >
            Yes, Delete them !
          </Button>
        </div>
      );
    }
  });
}
  
  
  return (
    <Container style={{ padding:"1rem"}} fluid>
      <Row>
        <Col xs={12} sm={10}>
          <div className='shoppingList'>

            {products && products.map((item, index) => (
            
                <Button className='shoppingButton'
                  color="primary"
                  onClick={() => handelSum(item)}
                  >
                
                  <h6>{item.name}</h6><span>{item.size}</span>  <br /><span>{item.price}  Euros</span>
                </Button>
              
            ))}
        
            </div>
        </Col>
        <Col xs={4} sm={2}>
        {/* <Col> */}
          <div className="priceList">
            <div className="table">
              <Table dark striped >
                <thead>
                  <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {sum.map((item, index) => (
                    <tr key={index}  onClick={handelDelete} style={{ cursor:"pointer" }} name={index}>
                      <th scope="row">{index + 1}</th>
    
                      <td >{item.name}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className="sum">
              <span>Sum</span>
              <span>
                {sum.reduce((prev, curr) => prev + +curr.price, 0).toFixed(2)}
              </span>
            </div>
            <ButtonGroup vertical style={{width:"100%",display: "block"}}>
              <Button color="danger" onClick={handelAllDelete}>Delete All Products</Button>
              <NavLink to="paid" > 
        <Button color="success">Done</Button>
      </NavLink>
            </ButtonGroup>
          </div>
        </Col>
      </Row>

    </Container>
  );
};

export default Shoping;
