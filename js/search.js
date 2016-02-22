 $('#search').keyup(function(){
var searchField = $('#search').val();
var myExp = new RegExp(searchField, 'i');
$.getJSON('post.json', function(data){
var output = '<ul class="post-list results">';
$.each(data, function(key, val){
if((val.title.search(myExp) != -1) || (val.author.search(myExp) != -1)) {
output +='<li><a href="' + val.href + '" class="search-res">';
output +='<p><span class="indent">►</span>' + val.title + '</p></a>';
output +='</li>';
}
});
output += '</ul>';
$('#update').html(output);
});
});