function even() {
    return new Promise(function(resolve, reject){
        let n = Math.floor((Math.random() * 10) + 1);
        if (n % 2 == 0) {
            alert("Found a even number: " + n);
            resolve(n);
        }
        else {
            reject(new Error("Not a even number!"));
        }        
    });
} 

function odd() {
    return new Promise(function(resolve, reject){
        let n = Math.floor((Math.random() * 10) + 1);
        if (n % 2 != 0) {
            alert("Found a odd number: " + n);
            resolve(n);
        }
        else {
            reject(new Error("Not a odd number!"));
        }        
    });
}

function promiseChain1() {
    let allValues = {};

    even().then(e => {
        allValues.E = e;
        return odd();
    }).then(o => {
        allValues.O = o;
        return allValues;
    }).then(eo => {
        alert("Sum of the even and odd is: " + (eo.E + eo.O));
    }).catch(alert);
}

function promiseAll() {
    Promise.all([even(), odd()]).then(([e, o]) => {alert("Sum of the even and odd is: "+ (e + o))}).catch(alert);
}

function promiseChain2() {
    even().catch(alert).then(() => odd()).catch(alert);
}

