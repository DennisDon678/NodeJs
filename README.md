# NodeJs
To expand my knowledge and sharpen my skills, I have decided to dive into nodeJs.  This is my buddle of Learning packs.

To Start, I had to install nodejs from the official site.

### SOME LECTURE:
NodeJs is built on google chrome's javascript v8 engine. It is open source , cross platform and is capable of generating real time web applications. It is developed by Ryan Dahl with the team of other developers working at joyent in 2009. It's package ecosystem 'NPM' is the largest ecosystem of open source libraries in the world.

### Running node:
Node is uses javascript and all node files uses the .js extention.
To run node file we simply write `node filename` in any terminal. 


NodeJs allows us to create serve allowing it serve different content types from our machine.
It comes with built in method that allows us to create a server and as well listen to a port. Once listening and all configured correctly expected results are gotten at the console.
While we used `res.end()` to send response, this only sends one response and then we need something like
`res.write()` to be able to send multiple response.

# Day Two - Fs Package
NodeJs comes with a built-in package known as fs which gives us access to the file system or the file I/O. The fs system can perform in synchronous or asynchronous manner.
We import the fs system by `require('fs')`;

### To read from file
To read the content of the file we use the `readFile()` method which can be synchronous or asynchronous.

### Write to file
We make use of the `writeFile()` method which can be synchronous or asynchronous.

### Append to file
Sometimes we need to add new information to an existing file without change the already content in it.
To achieve this we use the `appendFile()` method, can be synchronous or asynchronous as well.

### Rename Files 
The fs system all gives us the ability to rename a file through the `rename()` method. Can be synchronous or asynchronous as well.

### Delete Files
Finally the fs module gives us access to delete file via the `unlink()` method. Like others it can be synchronous or asynchronous.

# Day Three - Regular Expressions in nodejs
Regular expressions are sequence of characters that define a pattern in strings. We can employ in many areas such as validations and checking that give expression matches the desired format. We often refer to this as `regex `.

### To create a regex
In node there are different ways we can create a regex, first can be enclosing the expression in `/`, second can be through the use of the node function `regExp`.

```
var reg = /ab*/;
//It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
//But will not match b, bc, abc,aba , etc.
```

```
var reg = new RegExp('ab*');
//It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
//But will not match b, bc, abc,aba , etc.
```

### Modifiers 
Regular expressions have some flags known as modifers that we can add to the expression to define the scope level.
`g - global scope`
`i - case insensitive`
`m - multiline match`

### Common Examples of Regular Expressions
1 - Finding Specific text using Regular expression
In this we shall be using the `data.txt` file and we shall be looking for the word man.