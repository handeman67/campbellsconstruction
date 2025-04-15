class loadText {
    constructor(file, elm) {

        let xhr = new XMLHttpRequest();
let count=0;
        xhr.open('GET', file, true);
        xhr.onprogress = function() {
            
            console.log("working", count);
            count++;
        };

        xhr.onload = function() {
            if (this.status == 200) {
                console.log("working inside");
                let el=document.getElementById(`${elm}`);
                let p=`<p>${this.responseText}</p>`;
                el.innerHTML+=p;
            }
        };

        xhr.onerror = function() {
            console.log('Request Error');
        };
        xhr.send();
        }
}
