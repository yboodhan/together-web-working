// On loading of the page, execute the following:

$(function() {
    'use strict';

    // Initially, the client is null
    var client;

    // Add message to display
    function showMessage(msg) {
        $('#messages').append(
            '<div>' +
            '<p>' +
            '<span style="color:darkgray">' +
            msg.time +
            '</span>' + ' ' + msg.author + ': ' + msg.content +
            '</p>' +
            '</div>'
        );
    }

    // Check connection and determine what should be displayed
    function setConnected(connected) {
        $("#connect").prop("disabled", connected);
        $("#disconnect").prop("disabled", !connected);
        $('#author').prop('disabled', connected);
        $('#content').prop('disabled', !connected);

        // If connected, show chat, video and other options
        if (connected) {
            $("#all-disconnect").show();
            $("#viewer").show();
            $("#searcher").show();
            $('#viewer').focus();
            $('#login').hide();
        }

        // If not connected, hide all features
        else {
            $("#viewer").hide();
            $('#search-results').hide();
            $("#searcher").hide();
            $("#all-disconnect").hide();
            $('#login').show();
            $("#messages").html("");
        }
    }

    // On form submission, prevent page refresh
    $("form").on('submit', function (e) {
        e.preventDefault();
    });

    // If a name is entered with valid key, allow user to connect
    $('#author').on('blur change keyup', function(ev) {
        $('#secret').prop('disabled', $(this).val().length == 0 );
    });
    $('#secret').on('blur change keyup', function(ev) {
        $('#connect').prop('disabled', $(this).val() != 'secret' );
    });

    // Initially, fields are set to disabled/unconnected
    $('#connect,#disconnect,#content').prop('disabled', true);

    // On clicking connect, connect and subscribe to get messages
    $('#connect').click(function(e) {
        e.preventDefault();
        client = Stomp.over(new SockJS('/websocket'));
        client.connect({}, function (frame) {
            setConnected(true);
            client.subscribe('/chat/messages', function (message) {
                showMessage(JSON.parse(message.body));
            });
        });
    });

    // On clicking disconnect, disconnect and remove views
    $('#disconnect').click(function(e) {
        e.preventDefault();
        if (client != null) {
            client.disconnect();
            setConnected(false);
        }

        client = null;
    });

    // On send, set values
    $('#send').click(function(e) {
        e.preventDefault();
        client.send("/app/chat", {},
            JSON.stringify({
                author: $("#author").val(),
                content: $('#content').val()
            })
        );

        // Reset content field to blank
        $('#content').val("");
    });


});