const dragArea = document.querySelector('.drag-area');
const dargText = document.querySelector('.header');


//When file is inside the drag area
dragArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dargText.textContent = 'Release to Upload';
    //console.log('File is inside the drag area');
});

//When file leaves the drag area
dragArea.addEventListener('dragleave', () => {
    dargText.textContent = 'Drag & Drop';
    // console.log('File left the drag area');
});

//when the file is dropped in the drag area 
dragArea.addEventListener('drop', (event) =>{
    event.preventDefault();
});

