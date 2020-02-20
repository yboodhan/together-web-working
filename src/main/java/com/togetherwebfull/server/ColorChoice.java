package com.togetherwebfull.server;

import java.util.Random;

public class ColorChoice {
    public String[] Colors = {
        "#3079ab", // dark blue
        "#c25975", // mauve
        "#e15258", // red
        "#f9845b", // orange
        "#838cc7", // lavender
        "#7d669e", // purple
        "#53bbb4", // aqua
        "#51b46d", // green
        "#e0ab18", // mustard
        "#637a91", // dark gray
        "#f092b0", // pink
    };

    public String getColor() {

        Random randomGenerator = new Random();
        int randomNumber = randomGenerator.nextInt(Colors.length);

        return Colors[randomNumber];
    }
}
