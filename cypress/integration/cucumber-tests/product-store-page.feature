Feature: Product Store Page navigation

    As a customer
    I can navigate the product store page and apply different actions




    Scenario Outline: Customer Navigation

        Given I navigate the Product Store Home page

        When I select a "<device_name>" device under "<categories_field>" category

        Then I see "<device_name>" and "<device_price>" product details in the product detail page

        Examples:
            | categories_field | device_name       | device_price |
            | Phones           | Samsung galaxy s6 | $360         |
            | Laptops          | Sony vaio i7      | $790         |
            | Monitors         | Apple monitor 24  | $400         |


    Scenario Outline: Add Device to cart

        Given I navigate the Product Store Home page

        And I add "<device_name_1>" and "<device_name_2>" devices under "<categories_field>" category

        And I remove "<device_name_2>" from the shopping cart

        When I place the order and purchase it with the following information: "<client_name>", "<client_country>", "<client_city>", "<client_credit_card>", "<month>", "<year>"

        Then I should see "Amount: 790 USD" in the purchase confirmation details

        Examples:
            | categories_field | device_name_1 | device_name_2 | client_name | client_country | client_city | client_credit_card | month   | year |
            | Laptops          | Sony vaio i5  | Dell i7 8gb   | Test user   | Spain          | Madrid      | 8976564            | January | 2022 |
