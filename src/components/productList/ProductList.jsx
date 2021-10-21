import "./productList.css"

import { products  } from "../../data"
import Product from "../product/Product"


export default function ProductList() {


          return (
                    <div className="pl">
                              <div className="pl-texts">
                                        <div className="pl-title"> Create & Inspire It's iCode_Rx</div>

                                        <p className="pl-desc">
                                                  iCode_Rx is a creative portfolio thay your work has be waiting for.
                                                  Beautiful homes, stunning portfolio styles & a whole lot mores awaits inside
                                        </p>
                              </div>


                              <div className="pl-list">
                                        {
                                                  products.map(item => (
                                                            <Product 
                                                                      key={item.id}
                                                                      img={item.img}
                                                                      link={item.link}
                                                            />
                                                  ))
                                        }

                                        {/* <Product 
                                        />
                                        <Product 
                                        />
                                        <Product 
                                        />
                                        <Product 
                                        />
                                        <Product 
                                        />
                                        <Product 
                                        /> */}

                              </div>
                    </div>
          )
}
