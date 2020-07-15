# Welcome to the Developer Documetnation

Thank you for deciding to contribute to PhantomBot, or simply learn more about it. We are please to have you. The bot, 
like the guides are always being improved. If you are looking to contribute to the guides more info can be found 
[here](https://phantombot.tv/guides/#guide=content/developerdocs/guides/guides). This page will server as a short 
introduction to the structure of PhantomBot.

First off, here is a link to the [PhantomBot GitHub](https://github.com/PhantomBot/PhantomBot). To contibute to the code
please ensure that you have read [Code Style](https://phantombot.tv/guides/#guide=content/developerdocs/codestyle).


Now lets dive a bit deeper into the code.

### Basic Code Introduction

The source code for PhantomBot is in two main parts. The first is found in the "source" directory. It is written in java
and handles the backend of PhantomBot such as API connections for Twitch, Twitter etc. As is inherant to Java changes to 
this section of the bot require it to be recompliled. The second part is found in the "javascrip-source" directory and 
is as you may have guessed, written in JavaScript. This handles the functions that you interact with when you use the bot 
and does not require compilation to be run. This directory is duplicated as part of the build process so is also found in
the distribution that you download in the "scripts" directory. All you need to start adding to this part of PhantomBot is 
a basic text editor! Although this introduction will focus mainly on the JavaScript portion of the code if you do wish 
to work on the Java section a sepirate guide can be found [here](https://phantombot.tv/guides/#guide=content/developerdocs/devsetup) 
for how to setup a development environment.

### scripts / javascript-source

In javascript-source there are eight folders with the following functions.
- **core**: Core modules that are _always_ enabled and should not have any dependencies outside the core folder. Other modules may depend on any of the modules in this folder, regardless.
- **lang**: The Language files. Each language gets its own directory named by language. inside this language directory should be at least a main.js. Other files are loaded recursively.
- **commands**: Modules that generally do not act as API for other modules, like games or the random command.
- **games**: Modules that generally provide chat games (like Tamagotchis or !kill).
- **handlers**: Modules that handle automation like follow alerts or point payouts on hosts
- **systems**: Modules that may act like API for other modules, but are not necessary for the bot to work properly.
- **discord**: Modules used in Discord.
- **custom**: Modules added by individual users.

### Example Module

The best way to explain the basics of a modules is to look at an example. The script that we are going to look at can be 
found in the [development-recources](https://github.com/PhantomBot/PhantomBot/tree/master/development-resources) folder 
on GitHub. 

Before getting into the code itself it is important to start with a brief description of what it will do. In our example 
script this is as follows:
```$xslt
/**
 * moduleExample.js
 *
 * This module will generate a random string of letters when we type the command in chat.
 */
```

In PhantomBot, every module is encapsulated as a function as follows:
```$xslt
(function() {
    **your code**
})()
```

Inside the function you can start implementing what you wish the bot to do. In the example we want the bot to respond to 
the command "!randomstring" with a random string of letters. To do this we need three main things: a way of generating a random 
string of letters; a way to know when the user has typed "!randomsting"; and a method to respond in chat.

Lets start with generating the random string. This is done using this section of code:
```$xslt
    // Function to generate a random string of letters.
    function getRandomString(size) {
        // Local variables just for this function.
        var letters = 'abcdefghijklmnopqrstuvwxyz',
            data = '',
            i;

        for (i = 0; i < size; i++) {
            data += letters.charAt(Math.floor(Math.random() * letters.length));
        }

        return data;
    }
```
Let's break it down into parts.

The first line:`// Function to generate a random string of letters.` is a comment that describes what this function will 
do and will be ignored by the computer because of the `//`.

The next line: `function getRandomString(size) {` creates a function called "getRandomString" that required a numeric 
input of "size". It is important to ensure that your functions have a sensible name in case they are used by others in 
the future. It also helps with understanding the code. 

The first part of the function is to create some local variables that can only be used in this function. These are "letters", 
"data" and "i". You may have noticed that some global variables are defined earlier but we will come back to that. 

There is then a for loop. This selects the required number of letters at random from the variable "letters" and saves them 
one by one to the variable "data".

Finally, the function will return the variable "data" to where it was called.

