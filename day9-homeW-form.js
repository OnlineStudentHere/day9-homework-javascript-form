


document.addEventListener("DOMContentLoaded", () => {
    "use strict";
/*created by online student .ie*/



// OPTION 1 START
const input_fields = document.querySelectorAll('input')
const btn = document.querySelector('button')
const form = document.querySelector('form')

const input_1 = document.querySelector('#input-1')
const input_2 = document.querySelector('#input-2')
const input_3 = document.querySelector('#input-3')
const input_4 = document.querySelector('#input-4')


btn.addEventListener('click', (e) => {
      e.preventDefault();

      input_fields.forEach((field) => {

        if(field.value === ''){
              field.classList.add('red');
              console.log('SOME INPUT IS NOT FILLED IN');
              field.nextElementSibling.textContent = "Fill in this field";
        }
        else{
              field.classList.remove('red')
              field.nextElementSibling.textContent = " ";
        }
        if(input_1.value.length > 0 && input_2.value.length > 0 && input_3.value.length > 0 && input_4.value.length > 0 ){
              form.reset();
              field.classList.add('red');
              field.nextElementSibling.textContent = "Fill in this field";  
        }
      })
    });
    
// OPTION 1 END





/*
// OPTION 2 START
btn.addEventListener('click', (e) => {
    e.preventDefault();
  const all_fields = Array.from(input_fields).map((field) => {

    if(field.value === ''){
        field.classList.add('red');
        console.log('SOME INPUT IS NOT FILLED IN');
        field.nextElementSibling.textContent = "Fill in this field";
   }
   else{
        field.classList.remove('red')
        field.nextElementSibling.textContent = " ";
   }
   if(input_1.value.length > 0 && input_2.value.length > 0 && input_3.value.length > 0 && input_4.value.length > 0 ){
        form.reset();
        field.classList.add('red');
        field.nextElementSibling.textContent = "Fill in this field";  
   }
    //return field.value;
  });
  console.log(all_fields)
});
// OPTION 2 END
*/



/*
// ????????? OPTION 3 START
const all_filled = Array.from(input_fields).every((filled) => {
    //console.log(filled.value)
    if(filled.value.length > 1){
      return  console.log('All Filled')
    }
  });
console.log(all_filled)
// ????????? OPTION 3 END
*/

});
