$(document).ready(function() {
    // The ready function is there to say give me your code that you want execute once the document is ready.
$(function() {
    $('.searchButton').click(function() {
        var result = $('#searchPhrase').val();
        if(result.length > 0){
            alert('searched for ' +  result)
        }
    })
});


});
