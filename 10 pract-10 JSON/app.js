const post = {
    id: 1,
    title: 'Post one',
    body: 'This is a body'
}

// convert data to json string
const str = JSON.stringify(post);
console.log(str);

// Parse JSON
const obj = JSON.parse(str);
console.log(obj);