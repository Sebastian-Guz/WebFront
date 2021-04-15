import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Homepage from '../home/homePage'
import ProductDetailpage from '../product-detail/productDetailPage'
import CartPage from '../cart/cartPage'
import GlobalComponents from '../global/globalElements'

Given('I navigate the Product Store Home page', () => {
	Homepage.visit()
})

When(
	'I select a {string} device under {string} category',
	(device, category) => {
		Homepage.selectDeviceCategory(category)
		Homepage.visitDevice(device)
	}
)

When(
	'I add {string} and {string} devices under {string} category',
	(device1, device2, category) => {
		Homepage.selectDeviceCategory(category)
		Homepage.visitDevice(device1)
		ProductDetailpage.addtoCart()
		GlobalComponents.goToHomepage()
		Homepage.selectDeviceCategory(category)
		Homepage.visitDevice(device2)
		ProductDetailpage.addtoCart()
	}
)

When('I remove {string} from the shopping cart', (device) => {
	GlobalComponents.goToCartSummary()
	CartPage.deleteDeviceonCart(device)
})

When('I go to the cart summary page', () => {
	GlobalComponents.goToCartSummary()
})

When(
	'I place the order and purchase it with the following information: {string}, {string}, {string}, {string}, {string}, {string}',
	(name, country, city, card, month, year) => {
		CartPage.placeOrder()
		CartPage.purchaseOrder(name, country, city, card, month, year)
	}
)

Then(
	'I see {string} and {string} product details in the product detail page',
	(name, price) => {
		ProductDetailpage.validateProductDetails(name, price)
	}
)

Then('I should see {string} in the purchase confirmation details', (amount) => {
	CartPage.confirmatonPurchaseAmount(amount)
})
