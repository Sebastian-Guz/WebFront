const DEVICES_DETAILS_TABLE_ROW = 'tr'
const DEVICES_DETAILS_TABLE_DATA = 'td'
const PLACE_ORDER_BUTTON = 'Place Order'
const PLACE_ORDER_FORM_NAME = '#name'
const PLACE_ORDER_FORM_COUNTRY = '#country'
const PLACE_ORDER_FORM_CITY = '#city'
const PLACE_ORDER_FORM_CREDIT_CARD = '#card'
const PLACE_ORDER_FORM_MONTH = '#month'
const PLACE_ORDER_FORM_YEAR = '#year'
const PURCHASE_BUTTON = 'Purchase'
const CONFIRMATION_PURCHASE_OK_BUTTON = 'OK'

class CartPage {
	static deleteDeviceonCart(device) {
		cy.contains(device)
			.parent(DEVICES_DETAILS_TABLE_ROW)
			.within(() => {
				cy.get(DEVICES_DETAILS_TABLE_DATA)
					.eq(3)
					.contains('a', 'Delete')
					.click()
			})

		cy.wait(2000)
	}

	static placeOrder() {
		cy.contains(PLACE_ORDER_BUTTON).click()
	}

	static purchaseOrder(name, country, city, card, month, year) {
		cy.get(PLACE_ORDER_FORM_NAME).type(name)
		cy.get(PLACE_ORDER_FORM_COUNTRY).type(country)
		cy.get(PLACE_ORDER_FORM_CITY).type(city)
		cy.get(PLACE_ORDER_FORM_CREDIT_CARD).type(card)
		cy.get(PLACE_ORDER_FORM_MONTH).type(month)
		cy.get(PLACE_ORDER_FORM_YEAR).type(year)
		cy.contains(PURCHASE_BUTTON).click()
	}

	static confirmatonPurchaseAmount(amount) {
		cy.contains(amount).should('be.visible')
		cy.contains(CONFIRMATION_PURCHASE_OK_BUTTON).click()
	}
}

export default CartPage
