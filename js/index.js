document.addEventListener("DOMContentLoaded", (event) => {
    // console.log("DOM fully loaded and parsed");
  fetch('http://localhost:3000/monsters',{
    method:'GET'
  })
 .then(res => res.json())
 .then(data => {
    
    const numberOfObjects = 50;
    const startIndex = 0;
    const pulledObjects = data.slice(startIndex, startIndex + numberOfObjects);
    
pulledObjects.forEach(mnstrObject =>{
let div1 = document.getElementById('monster-container')
const subDiv = document.createElement('div')
const mnstrNameH2 = document.createElement('h2')
    mnstrNameH2.className = 'monster-name'
    mnstrNameH2.innerText = mnstrObject.name
    subDiv.append(mnstrNameH2)
    div1.append(subDiv)

  
    const H4 = document.createElement('h4')
    H4.className = 'age'
     H4.innerText = `Age: ${mnstrObject.age}`
     subDiv.append(H4)
    
   const pTag = document.createElement('p')
    pTag.className = 'Bio'
    pTag.innerText = `Bio: ${mnstrObject.description}`
    subDiv.append(pTag)

})
 .catch(error => console.error(error)) 
})
const createMsntrDiv = document.getElementById('create-monster')
const mnstrForm = document.createElement('form')
mnstrForm.id = 'monster-form'
const nameInput = document.createElement('input')
nameInput.id = 'name'
nameInput.placeholder = 'name...'
mnstrForm.append(nameInput)
createMsntrDiv.append(mnstrForm)
// console.log(mnstrForm)

const ageInput = document.createElement('input')
ageInput.id = 'age'
ageInput.placeholder = 'age...'
mnstrForm.append(ageInput)

const scripInput = document.createElement('input')
scripInput.id = 'description'
scripInput.placeholder = 'description...'
mnstrForm.append(scripInput)

const button = document.createElement('button')
button.innerText = 'create'
mnstrForm.append(button)

document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    let div1 = document.getElementById('monster-container')
    const subDiv = document.createElement('div')
const mnstrNameH2 = document.createElement('h2')
mnstrNameH2.className = 'monster-name'
   div1.append(subDiv)
    subDiv.append(mnstrNameH2)
    mnstrNameH2.append(e.target.name.value)

    const monsterAge = document.createElement('h4')
    monsterAge.className = 'age'
    div1.append(subDiv)
    subDiv.append(monsterAge)
    monsterAge.append(`Age: ${e.target.age.value}`)
    

    const monsterDescrip = document.createElement('p')
    monsterDescrip.className = 'description'
    div1.append(subDiv)
    subDiv.append(monsterDescrip)
    monsterDescrip.append(`Bio:${e.target.description.value}`)
    
})

document.getElementById('forward').addEventListener('click',(e)=>{
    console.log("FORWARD!")

    fetch('http://localhost:3000/monsters',{
        method:'GET'
      })
     .then(res => res.json())
     .then(data => {
        
        const numberOfObjects = 50;
        const startIndex = 51;
        const pulledObjects = data.slice(startIndex, startIndex + numberOfObjects);

        pulledObjects.forEach(mnstrObject2 =>{
            let div2 = document.getElementById('monster-container')
            const subDiv2 = document.createElement('div')
            const mnstrNameH2 = document.createElement('h2')
    mnstrNameH2.className = 'monster-name'
    mnstrNameH2.innerText = mnstrObject2.name
    subDiv2.append(mnstrNameH2)
    div2.append(subDiv2)

  
    const H4 = document.createElement('h4')
    H4.className = 'age'
     H4.innerText = `Age: ${mnstrObject2.age}`
     subDiv2.append(H4)
    
   const pTag = document.createElement('p')
    pTag.className = 'Bio'
    pTag.innerText = `Bio: ${mnstrObject2.description}`
    subDiv2.append(pTag)

})
 .catch(error => console.error(error)) 
   })
  })
 })



