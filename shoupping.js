/**
Creates a shopping list and displays it on shopping.innerHTML
*/
function newItem(){
    var name = prompt("Shopping List", "Product Name");
    var price = prompt("Shopping List","Product Price");
    var amount = prompt("Shopping List", "Amount of Product");
    if (name != null){
        list.name += name;
    }
    if (price != null){
        list.price += price;
    }
    if (amount != null){
        list.count += amount;
    } 
}
//
window.onload= function(){
    //You will call the functions you wrote here
    printList();
    }
    
    
    //Prints the shopping list on the web page by changing the html code
    //list: Array of items
    function printList(list){
        let name = prompt("What would you like to buy?", "E.g. milk, apple.");
        let price = prompt("Price of the item,", "E.g. 4, 5, 6, etc.");
        let count = prompt("Number of items", "E.g. 1, 2, 3, ect.");
        let totalCost = 0;
        if(price != null && count != null){
            totalCost += parseInt(price) * parseInt(count);
        }
        list = [{name:name, price:price, count:count}];
        while(true){
            if(name === null || price == null || count == null){
                console.log(totalCost);
                list.pop();
                break;
            }else{
                name = prompt("What would you like to buy?", "E.g. milk, apple.");
                price = prompt("Price of the item,", "E.g. 4, 5, 6, etc.");
                count = prompt("Number of items", "E.g. 1, 2, 3, ect.");
                if(price != null && count!= null){
                    totalCost += parseInt(price) * parseInt(count);
                } 
                list.push({name:name, price:price, count:count});
                console.log(totalCost);
            }
        }

        for(let i = 0; i < list.length; i++){
            document.getElementById("shoppingList").innerHTML += "<tr><td>" + list[i].name  + "</td> <td>" + list[i].price  + "</td> <td>" + list[i].count  +'</td></tr>';
        }
    }
    