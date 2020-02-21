var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('watching', {
        videoId: 'M7lc1UVf-VE',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    console.log('video is set')
}

function onPlayerReady(event) {
    console.log('video is ready to be played')

}

function onPlayerStateChange(event) {
    console.log('video state is changing')
}
function stopVideo() {
    player.stopVideo();
}