const btnAddNew = document.querySelector('#addnew');
const btnSubmit = document.querySelector('#submit');
const divQuestion = document.querySelector('.question-bar');
const questions = document.querySelector('.questions');
const solution = document.querySelector('.solution');
const headTitle = document.querySelector('h5');


const getAllinputs = () => {
    const allInputs = questions.querySelectorAll('.name-field');
    return Array.from(allInputs);
}

const addNewField = () => {
    let newField = document.createElement('input');
    newField['type'] = 'text';
    // newField.style.opacity = '0'
    newField.classList.add('name-field');
    newField.classList.add('moving-in');
    const allInputs = getAllinputs();
    const lastInput = allInputs[allInputs.length - 1];
    lastInput.after(newField);

    setTimeout(()=>{
        newField.classList.remove('moving-in');
    }, 1000)
}

const embedSolutions = sortedArray =>{
    headTitle.classList.add('flyout');
    headTitle.addEventListener('transitionend',()=>{
        headTitle.textContent = "This is your answer arranged in alpahabetical order."
        headTitle.classList.remove('flyout');
        headTitle.classList.add('flyin');
    })
    
    divQuestion.classList.add('rotated');
    questions.style.display='none';
    solution.style.display='block';
    solution.style.transform='rotateY(180deg)';

    const list = document.createElement('ol');
    solution.appendChild(list);

    sortedArray.map(singleName =>{
        let aName = `<li>${singleName}</li>`;
        list.innerHTML+=aName;
    })

}

const formSubmitted = () => {
    let allValues = [];
    const allInputs = getAllinputs();
    allInputs.map(input => {
        if (input.value.trim() == "") return;
        allValues.push(input.value.trim());
    })

    console.log(allValues);
    if (allValues.length < 5){
        alert ("Please enter at least 5 names");
        return;
    }
    const sortedValues = allValues.sort();


    embedSolutions(sortedValues)
    
}

btnAddNew.addEventListener('click', addNewField);
btnSubmit.addEventListener('click', formSubmitted)