function solve(){
    let tbody = document.getElementsByTagName("tbody")[0];

    Array.from(tbody.children).forEach(tr => {
        tr.addEventListener("click", function () {
            if (!this.hasAttribute("style")){
                Array.from(tbody.children).forEach(ch => {
                    ch.removeAttribute("style");
                });
                tr.style.backgroundColor = "#413f5e";
            }else{
                this.removeAttribute("style");
            }
        })
    })

}
