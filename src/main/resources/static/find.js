var API_KEY = GOOGLE_KEY

$('#search').click(
    function loadClient() {
        $('#results').append('<h1>' + 'Searching now...' + '</h1>');
        gapi.client.setApiKey(API_KEY);

        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(
            function() {
                console.log("GAPI client loaded for API");
                execute();
            })
        .catch(
            function(err) {
                console.error("Error loading GAPI client for API", err);
            }
        )}
)

function execute() {
    return gapi.client.youtube.search.list({
        q: $('#query').val(),
        part: 'snippet',
        maxResults: 20
    })
    .then(function(response) {
        // Handle the results here (response.result has the parsed body).
        $('#results').empty();
        var allResultVideos = response.result.items;

        // The call was successful but no videos matched query
        if (allResultVideos.length <= 0) {
            console.log('No search results')
            return
        }

        // There are actual results!
        $.each(allResultVideos, function(index, video){
            var title = video.snippet.title;
            var description = video.snippet.description;
            var thumbnail =  video.snippet.thumbnails.default.url;

            var videoTitle = '<strong class="video-title text-truncate">' + title + '</strong>';
            var videoDescription = '<small class="text-truncate">' + description + '</small>';
            var videoImage = '<pre>' + '<img class="thumbnail"' +
                                'src="' + thumbnail + '"' +
                                'alt="Youtube video thumbnail."' +
                                'class="img-fluid">' + '</pre>';

            $('#results').append('<div class="video-display">' +
                                    '<div>' + videoImage + '</div>' +
                                    '<div>' + videoTitle + ' ' + videoDescription + '</div>' +
                                '</div>' + '<hr/>');
        })

        $('.thumbnail').click(
            function changeVideo() {
                console.log('click')
                // e.preventDefault();
                // console.log(e.target)
                // var queuedVideo = e.target.prop("src");
                // console.log('changing video now to...' + queuedVideo)
            }
        )
    })
    .catch(
        function(err) {
            console.error("Execute error", err);
        }
    )};