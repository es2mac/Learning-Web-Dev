

function echo(message, times) {
    [...Array(times)].forEach(() => console.log(message));
}


echo("hello", 4);
