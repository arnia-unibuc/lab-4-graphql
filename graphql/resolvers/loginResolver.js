const db = require('../db');

const loginResolver = (_, args, context) => {
    console.log(_);
    console.log(args);
    console.log(context);

    const { email, password } = args;
    
    const user = db.users.find((user) => user.email === email && user.password === password);

    if(user) {
        return {
            token: `1234567890:${user.id}`,
        }
    }

    return {
        token: null,
    }
}

module.exports = loginResolver