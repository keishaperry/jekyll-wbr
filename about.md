---
layout: fullwidth
title: About
permalink: /about/
---
<h2>We are the anthem</h2>
<p>Whole Beast Rag is a quarterly online publication dedicated to writers, artists, and thinkers on the frontier of pop culture and critical thinking. We dabble in literature, interviews, supplements, translations and other transmissions.</p>
<p>Whole Beast Rag operated from January 2012 to November 2013. The idea will live on.</p>
<hr/>

<h2>Masthead</h2>
<div class="col-half">
  <h3>Grace Littlefield</h3>
  <h4>Executive Director</h4>
  <h3>Jon Chaiim McConnell</h3>
  <h4>Associate Editor</h4>
  <h3>Bernd Sauermann</h3>
  <h4>Poetry Editor</h4>
  <h3>Brian White</h3>
  <h4>Special Projects Fellow</h4>
  </div>
<div class="col-half">
  <h3>Katharine Hargreaves</h3>
  <h4>Creative Director</h4>
  <h3>Justin Stephani</h3>
  <h4>Columns Editor</h4>
  <h3>Adam Segal</h3>
  <h4>Interviewer</h4>
  </div>
  <div class="clearfix"></div>
<hr/>

<h2>Contributors</h2>
<div class="contributors">
{% assign contributors = site.data.people %}

<div class="col-half">
{% for author in contributors limit:67 %}
{% include contributor.html %}
{% endfor %}
</div>
<div class="col-half">
{% for author in contributors offset:67 %}
{% include contributor.html %}
{% endfor %}
</div>
</div>
<div class="clearfix"></div>
<script>
$( ".contributor-head" ).click(function() {
  $('.contributor-body').hide();
  //$(this).addClass
  $(this).next('.contributor-body').show();
});
</script>
<script>
$(document).ready(function() {
   var linkedAuthor = $(location).attr('hash');
  if (!linkedAuthor){
  } else {
  $(linkedAuthor).addClass('byline');
  };
});
</script>