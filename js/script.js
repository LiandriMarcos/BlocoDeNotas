let addNote = document.querySelector('#add-note');//Botão de para adicionar nota
let btnCloseModal = document.querySelector('#btn-close-modal'); //fechar janela modal com os detalhes da nota.
let modal = document.querySelector('#modal'); //Modal para edição das notas
let modalView = document.querySelector('#modal-view'); //Modal para exibição dos detalhes da nota
let notes = document.querySelector('#notes');//Lista divs com dados das notas
let btnSaveNote = document.querySelector("#btn-save-note"); //icone para salvar nota
//let btnCloseNote = document.querySelector("#btn-close-note");//icone para fechar modal de edição de nota.

addNote.addEventListener("click", (evt) => {
    evt.preventDefault(); //para o link nao ser encaminhado
    modal.style.display = "block";
    addNote.style.display = "none";
    notes.style.display = "none";
});

btnCloseModal.addEventListener("click", (evt) => {
    evt.preventDefault();
    modal.style.display = "none";
    addNote.style.display = "block";
    notes.style.display = "flex";
});

btnSaveNote.addEventListener("click", (evt) => {
    evt.preventDefault();
    data = { 
    id: document.querySelector("#input-id").value, 
    title: document.querySelector("#input-title").value, 
    content: document.querySelector("#input-content").value
}

saveNote(data);

});

/**
 * ================= FUNÇÕES ===================
 */

const saveNote = (note) => {
    
    let notes = localStorage.getItem('notes'); 
    if(!notes){ //perguntando se não tem nenhum item no local storage
        notes = []; // criar um array vazio

    }else{
        notes = JSON.parse(notes); //transformando o notes em objeto
    } 

    if(note.id.lenght < 1){
        note.id = new Date().getTime(); //passando o timestemp pro id do note

    }else{

    }

    note.lastTime = new Date().getTime();

    console.log(note);

    notes.push(note); //puxando o notes pro local storage

    notes = JSON.stringify(notes);

    localStorage.setItem('notes', notes); //set para jogar no local storage e get para pegar
}