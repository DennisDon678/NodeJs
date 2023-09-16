// Required email to check
const mail = 'dennisdon678@gmail.com';

// Construct expression
const exp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const res = exp.test(mail);

if (res) {
    console.log('Valid');
} else {
    console.log('Invalid');
}