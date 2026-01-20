(function() {
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear")
    let equal = document.querySelector(".btn-equal")
});

buttons.foreEach(function(button){
    button.addeventListener("click",function(e){
        let value = e.target.dataset.num;
        if(value !== undefined){
            screen.value += value;
        }
    });
});

