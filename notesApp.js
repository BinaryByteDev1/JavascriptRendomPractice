const addBtn = document.querySelector(".addNoteBtn");
const mainContainer = document.querySelector(".container");
let storeData;

 const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");

    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value);  
        }   
    )
    localStorage.setItem("Notes" , JSON.stringify(data));

 }

addBtn.addEventListener("click" , function(){
    addNote();
});

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="note">
             <div class="toolBar">
                    <i class="save bi bi-envelope-paper-fill"></i>
                    <i class="delete bi bi-trash3-fill"></i>
            </div>
                <textarea id="" placeholder="Type a Note :-">${text}</textarea>
        </div>
        `;

        note.querySelector(".delete").addEventListener("click" , function() {
            note.remove();
            saveNotes();
        });

        note.querySelector(".save").addEventListener("click" , function() {
            saveNotes();
        });
        
        mainContainer.appendChild(note);
        saveNotes();

    }
    
    (
        function() {
            const Lsnotes = JSON.parse(localStorage.getItem("Notes"));
            Lsnotes.forEach(
                (storeData) => {
                    addNote(storeData);
                }
            )
        }
)()


        


   

