$(document).ready(function() {
    let donutOne = new Donutty(
        document.getElementById("donut-1"),
        {
            min: 0,
            max: 100,
            value: 70,
            round: "true",
            padding: 0,
            color: "#7fffd4",
            thickness: 25,
            anchor: "top",
            dir: "rtl",
            transition: "all 1.2s cubic-bezier(0.57, 0.13, 0.18, 0.98)"
        }
    );

    let numberElemOne = $("#donut-1 #donut-number");
    let numberElemTwo = $("#donut-2 #donut-number-2");
    let numberElemThree = $("#donut-3 #donut-number-3");
    let numberOne = 70;
    let numberTwo = 38;
    let numberThree = 50;   
    let counter = 0;
    let counterTwo = 0;
    let counterThree = 0;

    setInterval(()=> {
        if(counter == numberOne) {
            clearInterval();
        } else {
            counter += 1;
            numberElemOne.html(counter + '%');
        }
    }, 14);

    setInterval(()=> {
        if(counterTwo == numberTwo) {
            clearInterval();
        } else {
            counterTwo += 1;
            numberElemTwo.html(counterTwo + '%');
        }
    }, 25);

    setInterval(()=> {
        if(counterThree == numberThree) {
            clearInterval();
        } else {
            counterThree += 1;
            numberElemThree.html(counterThree + '%');
        }
    }, 18);

});