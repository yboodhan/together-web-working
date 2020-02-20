$(function() {

    var API_KEY = GOOGLE_KEY

    $('#searcher').click(
        // function searchByKeyword() {
        //     var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
        //     console.log(results)
        // }
        function loadClient() {
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
            q: 'dogs',
            part: 'snippet',
            maxResults: 10
        })
        .then(function(response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
        })
        .catch(
            function(err) {
                console.error("Execute error", err);
            }
        )}
});