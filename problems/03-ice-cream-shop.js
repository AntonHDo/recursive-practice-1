/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false

Understand the problem
Input: an arr and a string ==> (['vanilla', 'strawberry'], 'blue moon')
Output: a boolean ==> false
* recursive function

Make a plan:
  1. define a function that takes in a arr and a string
  2. base case (where's this function going to stop)
      - if (!flavors.length) return false;
  3. if (flavors[0] === favorite) return true;
  4. recursive step: return iceCreamShop(falvors, favorite) 
    - slice off the first value ==> flavors.slice(1)
  

***********************************************************************/


function iceCreamShop(flavors, favorite) {

    if (!flavors.length) return false;

    if (flavors[0] === favorite) return true;

    return iceCreamShop(flavors.slice(1), favorite)

}

console.log(iceCreamShop(['vanilla', 'strawberry'], 'blue moon')); // false
console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')); // true
console.log(iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')); // false
console.log(iceCreamShop(['moose tracks'], 'moose tracks')); // true
console.log(iceCreamShop([], 'honey lavender')); // false


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
