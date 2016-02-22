---
layout: fullwidth
title: Homme
permalink: /homme/
issue: "homme"
---
<div class="page">
<h2 class="center">{{page.title}}</h2>
{% assign the_issue = site.posts | where: 'issue', {{page.issue}} | reverse %} 
<div class="col-half">
{% for post in the_issue limit:23 %} 
<h4><a href=' {{post.url}} '>{{post.title}}</a></h4>
{% endfor %}
</div>
<div class="col-half">
{% for post in the_issue offset:23 %} 
<h4><a href=' {{post.url}} '>{{post.title}}</a></h4>
{% endfor %}
</div>
<div class="clearfix"></div>
</div>