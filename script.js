function calculate() {
    //take bill amount value
    var amount = $('#amount').val();
    //take percentage value
    var percentage = $('#percentage').val();
    //tip amount = bill*(tip% / 100)
    var tip = amount * (percentage / 100);
    //total = bill + % amount
    var total = Number(amount) + tip;

    // convert a number into a string, keeping only two decimals and atach the string into the form
    $('#tip').val(tip.toFixed(2));
    // convert a number into a string, keeping only two decimals and atach the string into the form
    $("#total").val(total.toFixed(2));
    //prevent the page from reloading and loosing all the numbers
    return false;
}
//call the function calculate by attaching the value from the form calculator
$('#calculator').submit(calculate);
