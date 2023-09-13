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