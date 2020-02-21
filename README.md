# 💻 Together Web


## Description:

Together Web is a mobile-first application that allows approved users to search and watch youtube videos together and chat about it in live time.

#### Features/Technologies:

This application uses a Java Spring Boot server with STOMP and SockJs to allow live time messaging. The client side of the application was built using jQuery and formatted using CSS and Bootstrap. The app is fully responsive and adjusts accordingly for all screen sizes.

#### Accessing the application:
**Link:** https://togetherwebshare.herokuapp.com/

> Note: This app was initially contained in another Github repository and was restarted due to technical difficulties. To view the original repository and see initial commits, go to https://github.com/yboodhan/together-web.

## Approach:

* First, docs and tutorials on Spring Boot were reviewed and followed respectively. The same was done for Angular (not implemented).
> Note: View here: https://github.com/yboodhan/angular-server-spring, https://github.com/yboodhan/angular_test_with_spring, https://github.com/yboodhan/java_spring_REST_API.

* Next, I created a Java Spring server with STOMP and SockJs. All classes, components, and applications were built out.

* The front-end was stubbed out with placeholders for content (for layout/planning purposes) and slowly substituted with valid content.

* As front-end features were added, tests were run to ensure that a client can make a socket connection and send messages. During this process, styling was also implemented.

* Each feature on the font-end was tackled fully one by one -- first the connect feature was built completely, then the chat feature was built completely, and so on.

* Changes were committed throughout the process.

* The `readme.md` file was edited to summarize the app.

## Further Goals:
The entire purpose of this app was to allow video sharing and syncing and chatting. While chatting has been established and users are able to search and select videos that render in the "Watch" section, I am currently unable to track events on the embedded iframe as well as send those events to each client connected on the socket. I found a resource that I want to incorporate in order to track events within an embedded iframe (https://developers.google.com/youtube/iframe_api_reference). However, I am still unsure of how to have those events trigger broadcast for all connected clients as Spring Boot only has 1 package (STOMP) for websockets which only supports messages and not custom events. I need to spend some more time to fully understand Spring Boot with websockets and I think that with more time, I could full fill the app's purpose.
