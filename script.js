const fileDataDiv = document.getElementById('file-data');

setInterval(() => {
    fetch('/get_file_data')
       .then(response => response.json())
       .then(data => {
            fileDataDiv.innerText = data.file_data;
        });
}, 1000); 
