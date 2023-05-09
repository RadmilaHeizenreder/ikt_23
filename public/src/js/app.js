if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
            console.log('Service worker registered!');
        })
        .catch(err => {
            console.log(err);
        });
}

let  x = () => {
    console.log('x ausführen');
}
let y = () => {
    console.log('y ausführen');
}
// als callback als eine Funktion übergeben
/* let z = (callback) => {
    console.log('z davor');
    callback();
    console.log('z danach');
}
z(x);
z(y);
z(() => {
    console.log('anonyme function ausführen');
}) */

fetch('http://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log('response',response);
        return response.json();
    })
    .then(data => {
        console.log('data',data);
    })
