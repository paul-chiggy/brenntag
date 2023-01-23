Assignment 2
___
Test-suite “Login page verification”
___
Positive test-cases
___
Test-sub-suite “Login page availability per locale”
___
Test-case 1:

Users should get the English version of the login page displayed, when visiting web-app’s address https://apac.brenntag.com 

GIVEN the web-app’s login page address is https://apac.brenntag.com 

WHEN users visit that address

THEN the web-app should display the default login page in English according to design

AND the target URL should contain ui_locales=en_TW GET parameter
___
Test-case 2:

Users should get the Vietnamese version of the login page displayed, when visiting web-app’s address https://apac.brenntag.com and selecting Vietnamese version

GIVEN the web-app’s login page address is https://apac.brenntag.com 

WHEN users visit that address

AND users click on the link of the Vietnamese page version

THEN the web-app should display the Vietnamese version of the login page according to design

AND the target URL should contain ui_locales=vi_TW GET parameter
___
Test-case 3:

Users should get the Thai version of the login page displayed, when visiting web-app’s address https://apac.brenntag.com and selecting the Thai version

GIVEN the web-app’s login page address is https://apac.brenntag.com 

WHEN users visit that address

AND users click on the link of the Thai page version

THEN the web-app should display the Thai version of the login page according to design

AND the target URL should contain ui_locales=th_TW GET parameter
___
Test-case 4:

Users should get the Hong Kong version of the login page displayed, when visiting web-app’s address https://apac.brenntag.com and selecting the Hong Kong version

GIVEN the web-app’s login page address is https://apac.brenntag.com 

WHEN users visit that address

AND users click on the link of the Hong Kong page version

THEN the web-app should display the Hong Kong version of the login page according to design

AND the target URL should contain ui_locales=zh_TW_TW GET parameter (<= seems like a bug with GET parameter?)
___
Test-case 5:

Users should get the Korean version of the login page displayed, when visiting web-app’s address https://apac.brenntag.com and selecting the Korean version

GIVEN the web-app’s login page address is https://apac.brenntag.com 

WHEN users visit that address

AND users click on the link of the Korean page version

THEN the web-app should display the Korean version of the login page according to design

AND the target URL should contain ui_locales=ko_TW_TW GET parameter (<= seems like a bug with GET parameter?)
___
Test-sub-suite “Login functionality”
___
Test-case 6:

Users should be able to login to the portal when providing correct login credentials

GIVEN users landed on the web-app’s login page

WHEN users provide correct username

AND users provide correct password

AND users click on the Login button

THEN the web-app should log users to the portal
___
Test-case 7:

The web-app should redirect users to the Reset password page, when users click the password recovery link

GIVEN users landed on the web-app’s login page

WHEN users click on the Password recovery link

THEN the web app should redirect users to the Reset password page

AND the target URL should contain “/u/reset-password/request/Username-Password-Authentication”
___
Negative test-cases
___
Test-case 8 (nice candidate for a data-driven test):

The web app should not login users, when users provide incorrect credentials

GIVEN users landed on the web-app’s login page

WHEN users provide incorrect username or/and incorrect password

THEN the web app should not login users

AND display the error message “Incorrect login or password”
___
Test-case 9:

The web app should not login users, when users provide no credentials

GIVEN users landed on the web-app’s login page

WHEN users provide no username or/and incorrect password

THEN the web app should not login users

AND display the info message “Please fill in this field” next to the field in question