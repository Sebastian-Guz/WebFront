const DEVICE_NAME = 'h2'
const DEVICE_PRICE = 'h3'
const ADD_TO_CART_BUTTON = 'Add to cart'

class ProductDetailpage {
	static validateProductDetails(name, price) {
		cy.get(DEVICE_NAME).should('contain', name)
		cy.get(DEVICE_PRICE).should('contain', price)
	}

	static addtoCart() {
		cy.contains(ADD_TO_CART_BUTTON).click()
	}
}

export default ProductDetailpage
