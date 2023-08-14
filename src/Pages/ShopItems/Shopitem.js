import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { NavLink, useParams } from "react-router-dom";
import { addItem } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { items } from "../../data/data";
import "./shopitem.css";


const Shopitem = () => {
  let { id } = useParams();

  const dispatch = useDispatch();

  const addproductItem = (item) => {
    dispatch(addItem(item));
    toast("Item added Sucessfully 😄",{position: "top-right",
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    type:"success",
    progress: undefined,
    theme: "dark",})
  
    
  
  };


  const data = items.filter((ele) => {
    return ele._id === id;
  });
  return (
    <>
        <Header />
      {data.map((user) => {
        return (
          <div key={user._id}>

            <span className="link-rec"  >
              <ol
                style={{
                  display: "flex",
                  margin: "1rem",
                  alignItems: "center",
                }}
              >
                <li>
                  <NavLink
                    to="/"
                    style={{
                      textDecoration: "underline",
                      marginRight: ".3rem",
                    }}
                    className="hov"
                  >
                    Home
                  </NavLink>
                  /{" "}
                </li>
                <li style={{ opacity: 0.6, marginLeft: ".3rem" }}>
                  {user.name}
                </li>
              </ol>
            </span>
            <div className="row">
              <div className="cont-left">
                <img
                  src={`/images/${user.image}`}
                  alt={user.name}
                  title={user.name}
                />
              </div>
              <div className="con-right">
                <h1>{user.name}</h1>
                <span>
                  <i className="fa-solid fa-tag"></i>
                  {user.category}
                </span>{" "}
                <div className="instruct">
                  {" "}
                  <h4>
                    <i className="fa-solid fa-pencil"></i>Description
                  </h4>{" "}
                  <p className="desc">{user.description}</p>{" "}
                </div>
            <div className="features">
              <h4>
                <i className="fa-solid fa-check"></i>Features
              </h4>
              <ol className="shop-fetures">
                {user.features ? (
                  user.features.map((itm, index) => {
                    return (
                      <div key={index} className="list">
                        <li className="list">{itm}</li>
                        <hr />
                      </div>
                    );
                  })
                ) : (
                  <h1>No Features</h1>
                )}
              </ol>
            </div>
            <span className="card-prices">
              <p>Price :{user.price}₹ </p>
              {/* <CartAmountToggle
    amount={amount}
    setDecrease={setDecrease}
    setIncrease={setIncrease}
    className="amount"
  /> */}
              {/* <NavLink to = "/cart"> */}

              <button className="btns" title="Add To Cart" onClick={() => addproductItem(user)}>
                Add To Cart<i className="fa-solid fa-cart-shopping"></i>
              </button>
              {/* </NavLink> */}
            </span>
            </div>
            </div>

            <Footer />
          </div>

        );
      })}
    </>
  );
};

export default Shopitem;
