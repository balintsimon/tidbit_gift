import React from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import styled from "styled-components";

const NewProduct = () => {
    let product = {"id":"0","userId": `${localStorage.getItem("id")}`,"name": "", "description": "", "price": "", "picture": ""};
    const history = useHistory()

    const addNewProduct = () => {
        product.name = document.querySelector("#name").value;
        product.description = document.querySelector("#description").value;
        product.price = document.querySelector("#price").value;
        product.picture = document.querySelector("#picture").value;

        console.log(product)

        axios({
            method: 'post',
            url: 'http://localhost:8762/productservice/product',
            data: {
                id: product.id,
                userId: product.userId,
                name: product.name,
                description: product.description,
                price: product.price,
                picture: product.picture
            }
        })
            .then((response) => {
                history.push("/my-products")
                    console.log(response)
            }
            );
    }

return(
        <React.Fragment>
            <div>
                <form style={centerForm} className="form">
                    <h3>New Product</h3>
                        <label>Name:</label><br/>
                    <input class="input-group-text"
                           type="text"
                            name="name"
                            id="name"
                            placeholder="name"
                        />
                        <br/>
                        <label>Description:</label>
                        <input class="input-group-text"
                            type="text"
                            name="description"
                            id="description"
                               placeholder="description"
                        />
                        <br/>
                        <label>Price:</label>
                        <input class="input-group-text"
                            type="number"
                            name="price"
                            id="price"
                        />
                        <br/>
                        <label>Picture:</label>
                        <input class="input-group-text"
                            type="text"
                            name="picture"
                            id="picture"
                               placeholder="insert a valid url"
                        />
                        <br/>
                        <p/>
                        <input
                            type="button"
                            class="btn btn-dark"
                            name="submit"
                            id="submit"
                            value="Add product"
                            onClick={addNewProduct}
                        />
                </form>
            </div>
        </React.Fragment>
    )
}

const centerForm = {
    position: "absolute",
    left: "50%",
    top: "50%",
    marginTop: "6em",
    transform: "translate(-50%, -50%)"
}

export default NewProduct;