import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

export default function Product() {
  const id = useParams().id;

  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(
    `/products?filters[id][$eq]=${id}&populate=*`
  );

  const product = data?.[0];

  const dispatch = useDispatch();
  return (
    <div className="product">
      {loading ? (
        "Loading..."
      ) : error ? (
        "Error loading product."
      ) : product ? ( // Check if product exists
        <>
          <div className="left">
            <div className="images">
              <img
                src={`${process.env.REACT_APP_UPLOAD_URL}${product.img?.url}`} // Construct image URL
                alt={product.img?.name}
                onClick={() => setSelectedImg(0)}
              />
              <img
                src={`${process.env.REACT_APP_UPLOAD_URL}${product.img2?.url}`} // Construct second image URL
                alt={product.img2?.name}
                onClick={() => setSelectedImg(1)}
              />
            </div>
            <div className="mainImg">
              <img
                src={`${process.env.REACT_APP_UPLOAD_URL}${
                  selectedImg === 0 ? product.img?.url : product.img2?.url
                }`}
                alt="Selected Product"
              />
            </div>
          </div>
          <div className="right">
            <h1>{product.title}</h1> {/* Display product title */}
            <span className="price">${product.price}</span>{" "}
            {/* Display product price */}
            <p>{product.desc}</p> {/* Display product description */}
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    title: product.title,
                    desc: product.desc,
                    price: product.price,
                    img: product?.img?.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
              <hr />
            </div>
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}
