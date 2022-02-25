export function AddTwo(){
    const mystring = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ "
console.log(mystring.length);
}

//const mystring = "Eat a bag of bagels";

export function CoolThingsILearned()
{
    //const myconcat[] = mystring.substr(4,3);

    const mystring = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ "
    console.log(mystring.length);
}


export function exampleURLFetch()
{
    // fetch('https://jsonplaceholder.typicode.com/todos/1', {
    //     headers: {'Access-Control-Allow-Origin': '*'},
    // })
    //     .then(response => response.json())
    //     .then(data =>console.log(data));

    fetch('http://reddit.com', {
            method: 'GET',
            mode: 'cors',
            headers: {}
        })
}

export function tutorialfetch()
{
    fetch('https://reqres.in/api/users', {
        // method: 'POST',
        // headers: {
        //     'Content-Type' : 'application/json'
        // },
        // body: JSON.stringify({
        //     name: 'User 1'
        // })
    })
    .then(res => {
        return res.json()
    })
    .then(data =>console.log(data))
}

export function tutorialpromise()
{
    //really good when u need to do something that will take a long time in the background
    //like downloading image from another server so you can do something else while u wait

    let p = new Promise((resolve, reject) => {
        let a = 1+1
        if(a ==2){
            resolve('Success')
        }else{
            reject('Failed')
        }
    })

    p.then((message)=>{
        console.log('This is in the then ' + message)
    }).catch((message) => {
        console.log('This is in the catch ' + message)
    })
}

export function tutorialAwait()
{
    let makeRequest = (location) => {
        return new Promise((resolve, reject) => {
            console.log(`Making Request to ${location}`)
            if(location === 'Google') {
                resolve('Google says hi')
            } else {
                reject('We can only talk to Google')
            }
        })
    };

    let processRequest = (response) => {
        return new Promise((resolve, reject) => {
            console.log('Processing response')
            resolve(`Extra Information + ${response}`)
        })
    };

    // makeRequest('Google').then(response => {
    //     console.log('Response Recieved')
    //     return processRequest(response)
    // }).then(processedResponse => {
    //     console.log(processedResponse)
    // }).catch(err => {
    //     console.log(err)
    // })

    /*
    asynchronous code must be wrapped in a function with the keyword async
    also make sure you use await keywork before asynchronous calls otherwise it will 
    just return the promise and not actually return the result of that promise
    */

    let doWork = async () => {
        try {
        const response = await makeRequest('Google')
        console.log('Response Received')
        const processedResponse = processRequest(response)
        console.log(processedResponse)
        } catch(err) {
            console.log(err)
        }
    }

    doWork()
}