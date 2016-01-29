---
---
var index = lunr(function () {
  this.field('title',{boost: 10})
  this.field('content')
  this.field('category',{boost: 10})
  this.field('tags',{boost: 10})
  this.field('author',{boost: 10})
  this.ref('id')
});

{% assign count = 0 %}
{% for post in site.posts %}
index.add({
  title: {{post.title | jsonify}},
  content: {{post.content | strip_html | jsonify}},
  category: {{post.category | jsonify}},
  tags: {{post.tags | jsonify}},
  id: {{count}}
});
{% assign count = count | plus: 1 %}
{% endfor %}

var store = [{% for post in site.posts %}{
  'title': {{post.title | jsonify}},
  'link': {{ post.url | jsonify }},
  'author': {{ post.author | jsonify }},
  'category': {{ post.category | jsonify }},
  'excerpt': {{ post.content | strip_html | truncatewords: 20 | jsonify }}
 }{% unless forloop.last %},{% endunless %}{% endfor %}
]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdiv.empty();
    resultdiv.show();
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<li><a class="search-res" href="'+store[ref].link+'"><p><span class="indent">►</span>'+store[ref].title+'</p></a></li> ';
      resultdiv.append(searchitem);
    }
    resultdiv.append("<hr/>");
  });

});