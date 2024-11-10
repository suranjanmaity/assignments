/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length === 0 )
    return [];
  let catwise =[];

  transactions.map(t=>{
    
    // for adding one value if it is empty
    // if(catwise.length===0){
    //   catwise.push({
    //     category:t["category"],
    //     totalSpent:t["price"]
    //   });
    // }
    // else{
      
      let checkIndex = catwise.findIndex(catwise.fin(c=>{
        if(c["category"]==t["category"]){
          return c;
        }
      }));
      
      if (checkIndex!=-1){
        catwise[checkIndex]["totalSpent"]+=t["price"];
      }
      else{
        catwise.push({category:t["category"],totalSpent:t["price"]});
      }
    // }
  });
  return catwise;
}

module.exports = calculateTotalSpentByCategory;
