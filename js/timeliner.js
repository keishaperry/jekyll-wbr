    function generateTimelinePosts()
    {
        $.getJSON("/timeline.json", function(data) {
            var postsCount = data.length;
            var posts = data;

            var randomIndexUsed = [];
            var counter = 0;
            var numberOfPosts = 15;

            var divTimelinePosts = $("#timeline_posts");

            while (counter < numberOfPosts)
            {
                var randomIndex = Math.floor(Math.random() * postsCount);

                if (randomIndexUsed.indexOf(randomIndex) == "-1")
                {
                    var postHREF = posts[randomIndex].href;
                    var postTitle = posts[randomIndex].title;
                    var postAuthor = posts[randomIndex].author;

                    if (counter == (numberOfPosts - 1))
                    {
                        divTimelinePosts.append('<li><a class="postlink" href="' + postHREF + '"><p class="indent">►' + postTitle + '</p><p class="byline">'+ postAuthor + '</p></a></li>');
                    }
                    else
                    {
                        divTimelinePosts.append('<li><a class="postlink" href="' + postHREF + '"><p class="indent">►' + postTitle + '</p><p class="byline">'+ postAuthor + '</p></a></li>');
                    }

                    randomIndexUsed.push(randomIndex);

                    counter++;
                }
            }
        });
    }

    $(document).ready(function() {
        generateTimelinePosts();
    });