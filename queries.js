// Warm up
db.restaurants.distinct("cuisine") // Trying to figure out how to use $sort
db.restaurants.distinct("cuisine", {"address.street":"Cross Bay Boulevard"}, {"address.zipcode": "11414"})
db.restaurants.find( {name: { $regex: /Willie/ } } ) // Display list of restaurants with Willie in it, look for the match's ID
db.restaurants.find( { "restaurant_id" : "41239497" } ) // Display standalone information of Willie's restaurant
// Pizza
db.restaurants.find( {"cuisine": { $regex: /Pizza/ } }, {name: 0} ) || db.restaurants.find( {cuisine:"Pizza"} , {name: 0} )
db.restaurants.find( {"grades.grade": "A"} ) // To filter out first layer of A, and I'm stuck.
// Hamburgers
db.restaurants.count ( {"cuisine": "Hamburgers"} ) // 433 restaurants serving Hamburgers
db.restaurants.count ( {"cuisine": "Hamburgers", "borough": "Manhattan"} ) // 124 restaurants in Manhattan serving Hamburgers
db.restaurants.count ( {"cuisine": "Hamburgers", "borough": "Manhattan", name: { $nin: ["McDonald"]} } ) // 124 restaurants
db.restaurants.count ( {"cuisine": "Hamburgers", "borough": "Manhattan", name: { $nin: ["McDonald", "Burger King"]} } ) // 110 restaurants
db.restaurants.distinct ("address.street", { "cuisine": "Hamburgers", "borough": "Manhattan", "name": { $nin: ["McDonald", "Burger King"]} } )
db.restaurants.find( {"cuisine": "Hamburgers", "address.street": "Pearl Street"}, {name:1} )
// Bonus
