import React, { useState } from "react";
import Product_disgn from "../componets/Product_disgn";
import { Link, json } from "react-router-dom";
const productStorageArray =[];
const ProductPage = (props) => {
   
    
  const [showInputBox, HideInputBox] = useState(false);

  const [details, setDetails] = useState({
    ProductName: "",
    ProductCode: "",
    Description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
    // console.log(e.target);
  };
  const handelSubmit = (e) => {
    e.preventDefault();

    productStorageArray.push(details)
    console.log(productStorageArray);
    // console.log(details, "values");
    // setDetails('')
  };
  
  //    console.log(showInputBox,"test22");
  const showInputTextBox = () => {
    HideInputBox(!showInputBox);
    // console.log(!showInputBox,"test");
  };
  
  return (
    <div>
      <div>
        <div>
          <ul className="navContent">
            <li className="listStyle">
              {" "}
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="listStyle">
              <Link to="/ProductPage" className="link">
                Product
              </Link>
            </li>
            <li className="listStyle">
              <Link to="/AboutPage" className="link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Product_disgn />
      </div>

      <div className="addProductButton">
        <button onClick={showInputTextBox}>Add Product</button>
      </div>

      {showInputBox && (
        <div>
          <form onSubmit={handelSubmit}>
            <h3>Enter Product Details</h3>
            <h3>ProductName: </h3>
            <input
              type="text"
              onChange={handleChange}
              placeholder="EnterProductName"
              name="ProductName"
            />

            <h3>ProductCode:</h3>
            <input
              type="number"
              onChange={handleChange}
              placeholder="EnterProductCode"
              name="ProductCode"
            />

            <h3>Description:</h3>
            <textarea
              onChange={handleChange}
              placeholder="EnterProductDescription"
              name="Description"
            ></textarea>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
           
          </form>
          {/* <h2>{productStorageArray}</h2> */}
        </div>
        
      )}
    </div>
  );
};

export default ProductPage;
