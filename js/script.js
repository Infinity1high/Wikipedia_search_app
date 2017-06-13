var randomUrl='https://en.wikipedia.org/wiki/Special:Random';



$(document).ready(function(){
$('#go').click(function(){
/**user input */
var search=$('#search').val();
var url='https://en.wikipedia.org/w/api.php?action=opensearch&search='+ search + '&format=json&callback=?';
$.ajax({
    type:'GET',
    url:url,
    async: false,
    dataType:'json',
    success: function(data){
        $('#output').html('');
        for(i=0; i<=data[1].length-1;i++){ 
        $('#output').prepend("<div><div class='results btn-default' ><a href="+data[3][i]+ "h1" + data[1][i]+"/h1" + "<p>"+data[2][i]+"</p></a></div></div>");
        };
        $('#search').val('');
    },
    error: function(error){
        alert('Oops, today is not your day to get new information');
    }
})

})




})