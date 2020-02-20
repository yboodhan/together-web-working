// This is the structure of the message that will be sent to the client

package com.togetherwebfull.server;

import lombok.Getter;
import lombok.Setter;

import java.awt.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

@Setter
@Getter
public class BroadcastMessage {

    private String author;
    private String content;

    String pattern = "HH:mm aa";
    SimpleDateFormat simpleDateFormat =
            new SimpleDateFormat(pattern);

    private String time = simpleDateFormat.format(new Date());

    Random rand = new Random();

    float r = rand.nextFloat();
    float g = rand.nextFloat();
    float b = rand.nextFloat();

    private Color color = new Color(r, g, b);

    BroadcastMessage() {}

    public BroadcastMessage(String author, String content) {
        this.author = author;
        this.content = content;
    }
}
