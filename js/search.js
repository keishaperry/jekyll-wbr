 $('#search').keyup(function(){
var searchField = $('#search').val();
var myExp = new RegExp(searchField, 'i');
$.getJSON('post.json', function(data){
var output = '<ul class="searchresult">';
$.each(data, function(key, val){
if((val.title.search(myExp) != -1) || (val.author.search(myExp) != -1)) {
output +='<li>';
output +='<h2>' + val.title + '</h2>';
output +='<p>' + val.author + '</p>';
output +='</li>';
}
});
output += '</ul>';
$('#update').html(output);
});
});