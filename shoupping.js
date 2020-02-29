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
        let name = prompt("Shopping List", "Name of Product");
        let price = prompt("Shopping List", "Price of Product");
        let count = prompt("Shopping List", "Amount of Product");
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
                name = prompt("Shopping List", "Name of Product");
                price = prompt("Shopping List", "Price of Product");
                count = prompt("Shopping List", "Amount of Product");
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
    