fetch('http://localhost:3000/slides')
    .then(response => {
        return response.json();
    })
    .then(data => {
        buildPage(data);
    })
    .catch(err => {
        console.log("error accessing api:\n", err);
    });
