export const logError = (err, placeFun) => {
    console.log("*******************************************");
    console.log("----------------Start Error----------------");
    console.log("");
    if (err.response) {
        console.log("+++++ start err.response +++++");
        console.log(err.response);
        console.log("+++++ end err.response +++++");
        console.log("");
        if (err.response.data) {
            console.log("+++++ start err.response.data +++++");
            console.log(err.response.data);
            console.log("+++++ end err.response.data +++++");
        }
    }
    console.log("");
    if (err.data) {
        console.log("+++++ start err.data +++++");
        console.log(err.data);
        console.log("+++++ end err.data +++++");
        console.log("");
        if (err.data.data) {
            console.log("+++++ start err.data.data +++++");
            console.log(err.data.data);
            console.log("+++++ end err.data.data +++++");
        }
    }
    console.log("");
    if (err.message) {
        console.log("+++++ start err.message +++++");
        console.log("Error Message: " + err.message);
        console.log("+++++ end err.message +++++");
    }
    console.log("");
    console.log("Error File: " + placeFun);
    console.log("----------------End Error----------------");
    console.log("*******************************************");

};
