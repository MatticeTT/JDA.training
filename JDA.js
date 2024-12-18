let lists = document.querySelectorAll(".list");
let containers = document.querySelectorAll(".container > div");

let selected = null;

lists.forEach(list => {
    list.addEventListener("dragstart", function(e){
        e.dataTransfer.setData("text/plain", null);
        selected = e.target;
        setTimeout(function() {
            e.target.style.display = "none";
        }, 0);
    });

    list.addEventListener("dragend", function(e) {
        setTimeout(function() {
            selected.style.display = "block";
            selected = null;
        }, 0);
    });
});

containers.forEach(container => {
    container.addEventListener("dragover", function(e) {
        e.preventDefault();
    });

    container.addEventListener("drop", function(e) {
        e.preventDefault();
        if (selected) {
            container.appendChild(selected);
        }
    });
});

function checkLists() {
    // Add your check logic here
    alert("Finished!");
}
