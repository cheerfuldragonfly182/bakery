# README

Link to your deployed web application running online

- https://cheerfuldragonfly182.github.io/bakery/

Describe the goal of the application and value to a user

- The goal of the application is to allow users to view a bakery menu in an interactive manner with the ability to sort and filer results, as well as add and remove items from the menu to the user's cart. The total price of these items is aggregated in the cart.
- This application provides value to users by allowing them to filter for allergens or food/drink preferences; allowing them to sort by different values to view more relevant options sooner; allowing them to easily add/remove items from their cart so they can consider different options; and helping them keep track of spending by keeping a running sum of the price to purchase their cart.

Explain the organization of your Components, and the props and state related to them

- The App component is the top level component and controls the overall webpage layout. It creates the sorting/filtering menu, creates a mapping of BakeryMenuItems, and creates the Cart component. State hooks are used to keep track of filters, the sorting option, the current menu, the items in the cart, and to make the cart manually re-render as needed. The items in the cart are kept track of here instead of inside the cart so that it's easy to add/remove items from each BakeryMenuItem.

- The BakeryMenuItem component displays a menu item with options to add/remove from cart. It has props to display the menu item's information (name, price, allergens, etc.) and functions to add/remove the item from the cart. No state hooks were necessary, since menu item information is constant.

- The Cart component displays the items in the cart and their total price. Each item in the cart is displayed with a CartItem component. Cart has props to keep track of the items in the cart, to set the quantity for an item in the cart, and a variable to manually make the cart re-render as needed, since the cart doesn't automatically re-render in certain cases due to the way the CartItems are rendered. Use state hooks were used to keep track of the total price of the cart and to make the cart manually re-render as needed.

- The CartItem component displays an item in the cart and its quantity, as well as the price for that quantity of the item and options to increase/decrease the quantity in the cart. CartItem has props to display the cart item's information (name, price, quantity) and a function to set the quantity for an item in the cart. A use state hook was used to control the value displayed for the TextField to set the quantity of the item in the cart. The item is deleted from the cart entirely if an invalid character is input as the quantity or the quantity is null/0; this allows for a graceful exit for unexpected behavior.

Note the usability principles considered for layout and hierarchy

- Ease of Use
  - Any combination of filters can be combined with any sort option.
  - There is a reset filters button which reverts to the default state of including all types of ingredients with any allergens.
  - Items can be added/removed at the item card or in the cart.
- Learnability
  - Labels (sort by, types, ingredients) and common interface elements like dropdown menus and checkboxes are used to allow for easy learnability.
  - Buttons with the plus and minus symbols are used to add/remove a menu item from the cart. The affordances of these symbols (adding and removing respectively) aid in easy learnability. The alert appearing in the bottom left corner when the user clicks one also provides users with immediate feedback on how to interact with the site, noting if an item was added to the cart, removed from the cart, or if there was no item to remove from the cart.
- Navigability
  - Filtering and sorting options are presented for easy navigation.
  - A three column design is used, with filtering on the left, items in the center, and the cart on the right. This design is common for online shopping sites such as Amazon, and would thus be familiar and approachable for users. Whitespace is used to separate the columns, and is also used between menu items.
- Accessibility
  - High contrast colors are used for easier readability.
- Hierarchy
  - Hierarchy is used to encourage user exploration of the menu items. Bright pictures and the prominent location in the center of the screen are used to originally drawn users' attention to the menu. Users are then drawn to the title of the webpage due to its size and finally the filtering and sorting options on the left due to the natural reading order of left to right (for English). As users add items to their cart, attention becomes drawn to the cart as well due to the 'movement' as items are added, but it isn't the main focus of the application, which is overall more focused on exploration. This is similar to online shopping sites today, which want to encourage exploration and often 'hide' the cart in the upper right corner or another screen entirely.

Sources

- Project bootstrapped using create-react-app
- Images are from Adobe Stock, licensed under Education License
  - Macarons cropped from https://stock.adobe.com/images/colorful-french-macarons-on-white-background/194605401?prev_url=detail
  - Vanilla profiterole - https://stock.adobe.com/images/homemade-profiteroles-stuffed-with-whipping-cream-isolated-on-white/320646939?asset_id=320646939
  - Profiterole with nuts- https://stock.adobe.com/images/homemade-profiteroles-covered-with-chocolate-and-chopped-nuts-isolated-on-white/321119444?asset_id=321119444
  - Chocolate profiterole - https://stock.adobe.com/images/homemade-profiteroles-covered-with-chocolate-isolated-on-white/412830066?prev_url=detail&asset_id=412830066
  - Chocolate croissant - https://stock.adobe.com/images/croissants-on-a-white-background-croissants-with-chocolate-filling-on-a-white-background-croissants-with-chocolate-on-a-white-background/86959263?prev_url=detail
  - Plain croissant - https://stock.adobe.com/images/fresh-croissant-on-a-white-background-isolated/366135713?prev_url=detail
  - Apricot croissant - https://stock.adobe.com/images/croissants-on-a-white-background-apricot-jam-croissants-on-a-white-background/86959217?prev_url=detail
  - Strawberry croissant - https://stock.adobe.com/images/croissants-on-a-white-background-strawberry-jam-croissants-on-a-white-background/86959157?prev_url=detail
  - Custard croissant - https://stock.adobe.com/images/croissants-on-a-white-background-vanilla-filling-croissants-on-a-white-background/86959128?prev_url=detail
  - Dark caramel truffle - https://stock.adobe.com/images/dark-chocolate-truffles-filled-with-caramel-on-a-white-backgroun/279214020?prev_url=detail
  - Milk caramel truffle - https://stock.adobe.com/images/salted-caramel-filled-dark-chocolate-truffles-on-a-white-background/279214057?prev_url=detail
  - Strawberry truffle - https://stock.adobe.com/images/strawberry-and-rhubarb-truffles-on-a-white-background/279214015?prev_url=detail
  - Vanilla truffle - https://stock.adobe.com/images/milk-chocolate-truffles-filled-with-vanilla-on-a-white-backgroun/279213994?prev_url=detail
  - Dark truffle - https://stock.adobe.com/images/dark-chocolate-truffles-on-a-white-backgroun/279214049?prev_url=detail
  - Coconut truffle - https://stock.adobe.com/images/white-chocolate-candy-with-coconut-topping-on-white-background/121564688?prev_url=detail
  - Nuts truffle - https://stock.adobe.com/images/candy-with-chocolate-cream/133215383?prev_url=detail
  - Canele - https://stock.adobe.com/images/caneles-french-pastry-on-white-background/432073706?prev_url=detail
  - Madeleine - https://stock.adobe.com/images/closeup-of-madeleines-cake-on-white-background/259710451?prev_url=detail
  - Chocolate fondant - https://stock.adobe.com/images/hot-chocolate-pudding-with-fondant-centre-isolated-on-white/75720745?prev_url=detail
  - Palmier - https://stock.adobe.com/images/palmier-cookies-or-puff-pastry-ears-isolated-on-white-background/285603929?prev_url=detail
  - Hot chocolate - https://stock.adobe.com/images/hot-chocolate-close-up-isolated-on-a-white-background/97935058?prev_url=detail
  - Coffee - https://stock.adobe.com/images/black-coffee-in-cup-isolated-on-white-background/262540610?prev_url=detail
- Material UI used for text fields in shopping cart
- Followed instructions here to deploy https://reactjsexample.com/a-guide-for-hosting-a-react-app-on-github-pages/#:~:text=A%20guide%20for%20hosting%20a%20react%20app%20on,to%20the%20repository%20settings%20page%2C%20then%20select%20Pages
