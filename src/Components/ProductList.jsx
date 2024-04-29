import ProductImage from "./subComponents/ProductImage"
import ProductItems from "./subComponents/ProductItems"

const ProductList = () => {
    return (
        <div className="product-list">
            <h2>This is product list page</h2>
            <ProductImage />
            <ProductItems />
        </div>
    )
}

export default ProductList