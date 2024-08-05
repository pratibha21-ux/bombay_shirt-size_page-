import ProductCenter from "../Product center/ProductCenter"
import ProductDescription from "../ProductDesc/ProductDescription"
import Product from "./Product"


function Product_page() {
  return (
    <div>
    <Product/>
    <ProductCenter/> 
    <ProductDescription/>
    </div>
  )
}

export default Product_page