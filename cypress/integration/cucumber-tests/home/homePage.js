const URL = 'https://www.demoblaze.com/index.html'

class HomePage {
	// Visit webpage
	static visit() {
		cy.visit(URL)
	}

	// Visit phones categories
	static selectDeviceCategory(category) {
		cy.contains(category).click()
	}

	// Visit device
	static visitDevice(device) {
		cy.wait(2000)
		cy.contains(device).click()
	}
}

export default HomePage
