/**
Creates a shopping list and displays it on shopping.innerHTML
*/

//
window.onload= function(){
    //You will call the functions you wrote here
    }
    
    
    //Prints the shopping list on the web page by changing the html code
    //list: Array of items
    function printList(list){
        for(let i = 0; i < list.length; i++){
            document.getElementById("shoppingList").innerHTML += "<tr><td>" + list[i].name  + "</td> <td>" + list[i].price  + "</td> <td>" + list[i].count  +'</td></tr>';
        }
    }
    