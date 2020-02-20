// The chat controller listens and responds with a message to all subscribers

package com.togetherwebfull.server;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
    @MessageMapping("/chat")
    @SendTo("/chat/messages")
    public BroadcastMessage send(Message message) throws Exception {
        return new BroadcastMessage(message.getAuthor(), message.getContent());
    }
}
