// code your solution here
function saturdayFun(activity){
    switch(activity){
        default:
            return "This Saturday, I want to roller-skate!"
        case "bathe my dog":
            return   "This Saturday, I want to bathe my dog!" 
    }
}



function mondayWork(activity){
    switch(activity){
        default:
            return "This Monday, I will go to the office."
        case "work from home":
            return   "This Monday, I will work from home." 
    }

}

function wrapAdjective(adjective){
 return function(string){
    return `You are ${adjective}${string}${adjective}!`
 }
}
