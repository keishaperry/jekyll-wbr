    function generateRandomPosts()
    {
        $.getJSON("/random.json", function(data) {
            var postsCount = data.length;
            var posts = data;
            var randomIndexUsed = [];
            var counter = 0;
            var numberOfPosts = 1;
            var divRandomPosts = $(".random-posts");

            while (counter < numberOfPosts)
            {
                var randomIndex = Math.floor(Math.random() * postsCount);

                if (randomIndexUsed.indexOf(randomIndex) == "-1")
                {
                    var postHREF = posts[randomIndex].href;
                    var postTitle = posts[randomIndex].title;
                    var postAuthor = posts[randomIndex].author;
                    var postContent = posts[randomIndex].content;
                   
                        divRandomPosts.append('<div class="article-header"><h2>' + postTitle + '</h2><h3>by: ' + postAuthor + '</h3></div>');
                        divRandomPosts.append('<div class="article-content">' + postContent + '</div>');
                    randomIndexUsed.push(randomIndex);

                    counter++;
                }
            }
            divRandomPosts.append('</div>');
        });
    }

    $(document).ready(function() {
        generateRandomPosts();
    });