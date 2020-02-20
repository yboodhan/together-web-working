// This is the structure of the message that will be sent to the client

package com.togetherwebfull.server;

import lombok.Getter;
import lombok.Setter;

import java.text.SimpleDateFormat;
import java.util.Date;

@Setter
@Getter
public class BroadcastMessage {

    private String author;
    private String content;

    String pattern = "HH:mm aa";
    SimpleDateFormat simpleDateFormat =
            new SimpleDateFormat(pattern);

    private String time = simpleDateFormat.format(new Date());

    BroadcastMessage() {}

    public BroadcastMessage(String author, String content) {
        this.author = author;
        this.content = content;
    }
}
