Assignment 1
___
Test-suite “Front-door page verification”
___
Positive test-cases
___
Test-case 1 (better suited for usual TA scripts):

Users should get the front-door page displayed, when visiting web-app’s address https://brenntag.com

GIVEN the web-app’s address is https://brenntag.com

WHEN users visit that address

THEN the web-app should display a default front-door page according to design

Or 

Test-case 1 (better suited for BDD with step definitions):

Users should get the front-door page displayed, when visiting web-app’s address https://brenntag.com

GIVEN the web-app’s address is https://brenntag.com 

WHEN users visit that address 

THEN the web-app should display a background image X

AND the web-app should display a modal header X with a text instruction X

AND the web-app should display a country select dropdown field with a placeholder text X

AND the web-app should display a language select dropdown field with a placeholder text X

AND the web-app should display an inactive (no HREF) link “button” with text X

AND the web-app should display a default more-details link to the 
corporate web address X

_______
Test-case 2:

Users should be redirected to the local Brenntag website, when selecting a country and language of their preference and clicking the “Go to…” button

GIVEN users landed on the default front-door page of the web-app

WHEN users select an X country

AND users select a Y language

AND click the “Go to…” button

THEN the web-app should construct a correct XY link

AND redirect users to this address
___
Test-case 3:

Users should be redirected to the corporate website, when clicking the corporate link address on the default front-door page

GIVEN users landed on the default front-door page of the web-app

WHEN users click on the corporate link address

THEN the web-app should redirect users to the corporate web address X
___
Negative test-cases
___
Test-case 4:

Users should not be able to go to a local Brenntag website version without selecting a country of their preference

GIVEN users landed on the default front-door page of the web-app

WHEN users do not select a country of their preference from the country dropdown field

THEN the “Go to…” link should stay inactive

AND the web-app should not add any HREF property to the “Go to…” link
___
Test-case 5:

Users should not be able to select a language of their preference without prior selecting a country of their preference

GIVEN users landed on the default front-door page of the web-app

WHEN users have not selected a country of their preference

THEN the web-app should not include any languages in the language dropdown field except for the default “Select your language option”
___
Corner-/Edge-case (It looks like a bug though…)
___
Test-case 6:

The web-app should redirect users from the front-door page to 404 Not found page, when users select a language, then deselect it back to a placeholder default value and clicking the “Go to…” link

GIVEN users landed on the default front-door page of the web-app

AND users selected a country of their preference

AND users selected a language of their preference

WHEN users deselect the language of their preference back to the default dropdown option

AND click the “Go to…” link

THEN the web app should redirect users to the 404 Not found page
