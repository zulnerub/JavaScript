function solve() {
    const app = {
        handleEvent : function (e) {
            if (typeof this[e.target.id] === "function"){
                this[e.target.id]();
            }


            if (e.target.classList.value.match("deep")){
                this.setBoxColor(e.target.textContent);
            }
        },

        dropdown: function () {
            const ul = document.getElementById("dropdown-ul");

            if (ul.style.display === "block"){
                ul.style.display = "none";
                this.setBoxColor("")
            }else{
                ul.style.display = "block";
            }
        },

        setBoxColor: function(color){
            const box = document.getElementById("box");
            box.style.backgroundColor = color;
        }
    };




    document.addEventListener("DOMContentLoaded", function () {
        document.addEventListener("click", app)
        
        
    })
}

