const HEADER_GO_TO_CARD_LINK = '#cartur'

class GlobalComponents {
	static goToCartSummary() {
		cy.get(HEADER_GO_TO_CARD_LINK).click()
	}

	static goToHomepage() {
		cy.contains('Home').click()
	}
}

export default GlobalComponents
