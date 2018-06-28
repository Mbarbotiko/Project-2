### Requirements
STEPHEN:
API's

KATE:
FRONT END
JQUERY
DONT FORGET POWERFUL PEOPLE FOOTER & MODAL!

AL:
JQUERY
HALP WHEN NEEDED

MARGARITA:
API ROUTING
DB
MODEL




Your project must:

FRONT END NEEDS:
FORM:
Name
Phone Number(unique ID) (for NEXMO API)
Item Name
Upload Item Image - API (imigur)
Item Description
Choose predetermined Category

ON SUBMIT APPEND NEW ITEM TO HOME PAGE

Show TOASTS( using materialize) on submit of new item that user entered. Auto dissapear after 5 seconds(whatever)

PREDETERMINED CATEGORY DROPDOWN:
Apparel
Home & Office
Tech/Electronics
Lunch
Spouse
Shwuh!?
ALL


On homepage load all under submit form:


BACK END
API ROUTES
/user
/item

HTML ROUTES 
INDEX
/(home/all) (.catch to auto reroute home)
/apparel
/homeoffice
/tech
/lunch
/spouse
/Shwutever
/confirm


MODELS
user
item will need a foreign key



DB
Create swaps_db
tables:
1. users
2. items

use PRIMARY KEY(ID/?)


Swap user names not items to prevent too many object properties from changing.

API's

NEXMO

IMGUR



* Use a Node and Express Web Server;


* Have both GET and POST routes for retrieving and adding new data;(INROUTES)

* Be deployed using Heroku (with Data);

* Utilize at least one new library, package, or technology that we haven’t discussed;(Materialze, API's: NEXMO, IMGUR )

* Have a polished frontend / UI;

* Have folder structure that meets MVC Paradigm;(DONE)

* Meet good quality coding standards (indentation, scoping, naming).

* Must not expose sensitive API key information on the server, see [Protecting-API-Keys-In-Node.md](../../../10-nodejs/03-Supplemental/Protecting-API-Keys-In-Node.md)
