const addNoteBtn = document.querySelector("#addBtn");
const main = document.querySelector(".container");


const saveNotes = () => {
    const noteData = document.querySelectorAll(".note textarea");
    const data = []; 
    noteData.forEach( (elm) => {
        data.push(elm.value);
    });
    localStorage.setItem("Data" , JSON.stringify(data));
}
addNoteBtn.addEventListener("click" , () =>{
    addNote();
});


    const addNote = (text = "") => {
        const addNote = document.createElement("div");
        addNote.classList.add("note");
        addNote.innerHTML = `
            <div class="note">
                <div class="toolBar">
                    <i class="save bi bi-envelope-paper-fill"></i>
                    <i class="delete bi bi-trash3-fill"></i>
                </div>
                <textarea id="" placeholder="Type a Note :-">${text}</textarea>
            </div>
        `;
        addNote.querySelector(".delete").addEventListener("click" , function(){
                addNote.remove();
                saveNotes();
        });
        addNote.querySelector(".save").addEventListener("click" , function(){
                saveNotes();
        });
        main.appendChild(addNote);
        saveNotes();

    }
    (
        function() {
            const lsData = JSON.parse(localStorage.getItem("Data"));
    
            lsData.forEach((storeData) => {
                addNote(storeData);
            })
        }
    )()



