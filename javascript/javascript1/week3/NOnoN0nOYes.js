const notes = [];
function saveNote(content, id) {
    return notes.push({content:content, id:id})
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);
function getNote(id) {
  if (isNaN(id) || id === "") {
    return "Please put a valid id"
  }
  for (let i = 0; i<notes.length; i++) {
    if (notes[i].id == id) {
      return notes[i]
    }  
  }
}
const firstNote = getNote(1);
const secondNote = getNote(2);
const otherNote = getNote( );
console.log(firstNote); // {content: 'Pick up groceries', id: 1}
console.log(secondNote);
console.log(otherNote);

function logOutNotesFormatted() {
  for (let i = 0; i<notes.length; i++) {
      console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`)
    }  
}
logOutNotesFormatted(); // should log out the text below
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry