// argv - properties
console.log(process.argv);
console.log(process.argv[3]);

// process.env
console.log(process.env);
console.log(process.env.HOSTNAME);


// pid
console.log(process.pid);

//cwd - current working directory
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage()

console.log(process.memoryUsage());

// uptime()
console.log(process.uptime());

process.on('exit', code=>{
    console.log(`About to exit with code: ${code}`);
});
//exit()
console.log(process.exit(0));

console.log('Hellow from after exit');