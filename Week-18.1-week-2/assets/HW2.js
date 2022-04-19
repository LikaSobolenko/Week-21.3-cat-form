postButton.onclick = function (e) {
    e.preventDefault();

    fetch("https://httpbin.org/post", {
            method: 'POST',
            headers: {
                'Content-Type': 'form/multipart;charset=utf-8'
            },
            body: new FormData(formElem)
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));
}