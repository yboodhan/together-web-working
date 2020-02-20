var API_KEY = GOOGLE_KEY

$('#search').click(
    function loadClient() {
        $('#results').append('<pre>' + 'Searching now...' + '</pre>');
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
            var vidTitle = video.snippet.title;
            var vidThumburl =  video.snippet.thumbnails.default.url;
            var vidThumbimg = '<pre><img id="thumb" src="'+vidThumburl+'" alt="No  Image  Available." style="width:204px;height:128px"></pre>';

            $('#results').append('<pre>' + vidTitle + vidThumbimg +   '</pre>');
        })
    })
    .catch(
        function(err) {
            console.error("Execute error", err);
        }
    )};