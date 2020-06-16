export function onError(error) {
    let message = error.toString();
    // Auth errors
    if (!(error instanceof Error) && error.message) {
        console.log("error3");
        message = error.message;
        }
        alert(message);
    }