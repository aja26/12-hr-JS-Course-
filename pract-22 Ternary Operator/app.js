const age = 19;

const canVote = age >= 18 
    ? console.log('you can vote') 
    : console.log('you can not vote')
;

/*
---- Mutiple statements ----
*/

const auth = false;
// let redirect;

// if(auth){
//     alert('Welcome to the dashboard');
//     redirect = '/dashboard';
// } else{
//     alert('Access Denied');
//     redirect = '/login'
// }


// const redirect = auth 
//     ? (alert('Welcome to the dashboard'), '/dashboard') 
//     : (alert('Access Denied'), '/login');

// console.log(redirect);


/*
---- single statement without else ---- !USEFUL!
*/

// auth ? console.log('Welcome to the dashboard') : null;

auth && console.log('69 Welcome to the dashboard')