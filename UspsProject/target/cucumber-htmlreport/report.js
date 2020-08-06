$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01.UspsLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Users ability to login",
  "description": "",
  "id": "users-ability-to-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@usps"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should able to login using Sign-On Feature",
  "description": "",
  "id": "users-ability-to-login;user-should-able-to-login-using-sign-on-feature",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Navigate to USPS home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to usps login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Fill with valid \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Hover over the username from home page and varify the login by username",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "users-ability-to-login;user-should-able-to-login-using-sign-on-feature;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 13,
      "id": "users-ability-to-login;user-should-able-to-login-using-sign-on-feature;;1"
    },
    {
      "cells": [
        "urbaneagles123",
        "Eagles@123"
      ],
      "line": 14,
      "id": "users-ability-to-login;user-should-able-to-login-using-sign-on-feature;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7163449200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should able to login using Sign-On Feature",
  "description": "",
  "id": "users-ability-to-login;user-should-able-to-login-using-sign-on-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@usps"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Navigate to USPS home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to usps login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Fill with valid \"urbaneagles123\" and \"Eagles@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Hover over the username from home page and varify the login by username",
  "keyword": "Then "
});
formatter.match({
  "location": "UspsLoginSteps.navigate_to_USPS_com_home_page()"
});
formatter.result({
  "duration": 8031354800,
  "status": "passed"
});
formatter.match({
  "location": "UspsLoginSteps.navigate_to_usps_login_page()"
});
formatter.result({
  "duration": 842365900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "urbaneagles123",
      "offset": 17
    },
    {
      "val": "Eagles@123",
      "offset": 38
    }
  ],
  "location": "UspsLoginSteps.fill_with_valid_and(String,String)"
});
formatter.result({
  "duration": 9405219500,
  "status": "passed"
});
formatter.match({
  "location": "UspsLoginSteps.click_on_sign_in_button()"
});
formatter.result({
  "duration": 3916738400,
  "status": "passed"
});
formatter.match({
  "location": "UspsLoginSteps.hover_over_the_username_from_home_page_and_varify_the_login_by_username()"
});
formatter.result({
  "duration": 13200,
  "status": "passed"
});
formatter.after({
  "duration": 72500,
  "status": "passed"
});
formatter.uri("02.UspsLookupZipCode.feature");
formatter.feature({
  "line": 2,
  "name": "Users ability to lookup city using zipcode",
  "description": "",
  "id": "users-ability-to-lookup-city-using-zipcode",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@usps"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should able to get city information using lookup zipcode feature",
  "description": "",
  "id": "users-ability-to-lookup-city-using-zipcode;user-should-able-to-get-city-information-using-lookup-zipcode-feature",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Navigate to USPS home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Hover over mail \u0026 ship and click on lookup a zipcode",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click on cities by zipcode",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Insert a valid \"\u003cZipcode\u003e\" and submit",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Varify it return valid cityname against the zipcode",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "users-ability-to-lookup-city-using-zipcode;user-should-able-to-get-city-information-using-lookup-zipcode-feature;",
  "rows": [
    {
      "cells": [
        "Zipcode"
      ],
      "line": 13,
      "id": "users-ability-to-lookup-city-using-zipcode;user-should-able-to-get-city-information-using-lookup-zipcode-feature;;1"
    },
    {
      "cells": [
        "11218"
      ],
      "line": 14,
      "id": "users-ability-to-lookup-city-using-zipcode;user-should-able-to-get-city-information-using-lookup-zipcode-feature;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4365760200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should able to get city information using lookup zipcode feature",
  "description": "",
  "id": "users-ability-to-lookup-city-using-zipcode;user-should-able-to-get-city-information-using-lookup-zipcode-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@usps"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Navigate to USPS home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Hover over mail \u0026 ship and click on lookup a zipcode",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click on cities by zipcode",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Insert a valid \"11218\" and submit",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Varify it return valid cityname against the zipcode",
  "keyword": "Then "
});
formatter.match({
  "location": "UspsLoginSteps.navigate_to_USPS_com_home_page()"
});
formatter.result({
  "duration": 10921591800,
  "status": "passed"
});
formatter.match({
  "location": "UspsLookupZipCodeSteps.hover_over_mail_ship_and_click_on_lookup_a_zipcode()"
});
formatter.result({
  "duration": 6236634200,
  "status": "passed"
});
formatter.match({
  "location": "UspsLookupZipCodeSteps.click_on_cities_by_zipcode()"
});
formatter.result({
  "duration": 4099355100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11218",
      "offset": 16
    }
  ],
  "location": "UspsLookupZipCodeSteps.insert_a_valid_and_submit(String)"
});
formatter.result({
  "duration": 2253552300,
  "status": "passed"
});
formatter.match({
  "location": "UspsLookupZipCodeSteps.varify_it_return_valid_cityname_against_the_zipcode()"
});
formatter.result({
  "duration": 1273079600,
  "status": "passed"
});
formatter.after({
  "duration": 48500,
  "status": "passed"
});
formatter.uri("03.UspsCalculateAPrice.feature");
formatter.feature({
  "line": 2,
  "name": "Users ability to calculate a shiping price",
  "description": "",
  "id": "users-ability-to-calculate-a-shiping-price",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@usps"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should able to calculate using calculate a price feature",
  "description": "",
  "id": "users-ability-to-calculate-a-shiping-price;user-should-able-to-calculate-using-calculate-a-price-feature",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to USPS.com home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Hover over mail \u0026 ship and click on Calculate a price",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on calculate postcard price",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Fill with \"\u003cSmall\u003e\" and \"\u003cLarge\u003e\" quantities and click on calculate",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Varify the total price is correct",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "users-ability-to-calculate-a-shiping-price;user-should-able-to-calculate-using-calculate-a-price-feature;",
  "rows": [
    {
      "cells": [
        "Small",
        "Large"
      ],
      "line": 12,
      "id": "users-ability-to-calculate-a-shiping-price;user-should-able-to-calculate-using-calculate-a-price-feature;;1"
    },
    {
      "cells": [
        "2",
        "2"
      ],
      "line": 13,
      "id": "users-ability-to-calculate-a-shiping-price;user-should-able-to-calculate-using-calculate-a-price-feature;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5488140100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should able to calculate using calculate a price feature",
  "description": "",
  "id": "users-ability-to-calculate-a-shiping-price;user-should-able-to-calculate-using-calculate-a-price-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@usps"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Navigate to USPS.com home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Hover over mail \u0026 ship and click on Calculate a price",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on calculate postcard price",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Fill with \"2\" and \"2\" quantities and click on calculate",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Varify the total price is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "UspsCalculatePriceSteps.navigate_to_USPS_com_home_page()"
});
formatter.result({
  "duration": 7790386100,
  "status": "passed"
});
formatter.match({
  "location": "UspsCalculatePriceSteps.hover_over_mail_ship_and_click_on_Calculate_a_price()"
});
formatter.result({
  "duration": 3072600000,
  "status": "passed"
});
formatter.match({
  "location": "UspsCalculatePriceSteps.click_on_calculate_postcard_price()"
});
formatter.result({
  "duration": 3384871300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    },
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "UspsCalculatePriceSteps.fill_with_and_quantities_and_click_on_calculate(String,String)"
});
formatter.result({
  "duration": 221933100,
  "status": "passed"
});
formatter.match({
  "location": "UspsCalculatePriceSteps.varify_the_total_price_is_correct()"
});
formatter.result({
  "duration": 29069100,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c$[0.0]0\u003e but was:\u003c$[1.8]0\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:85)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:91)\r\n\tat bdd.usps.PageActions.UspsCalculatePriceActions.verifyTotalPrice(UspsCalculatePriceActions.java:49)\r\n\tat bdd.usps.stepDef.UspsCalculatePriceSteps.varify_the_total_price_is_correct(UspsCalculatePriceSteps.java:33)\r\n\tat ✽.Then Varify the total price is correct(03.UspsCalculateAPrice.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 50000,
  "status": "passed"
});
});