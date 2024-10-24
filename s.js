const validation = new JustValidate('#form')

validation.addField('#name', [
{
rule: 'required',
errorMessage: 'This is a required field',
},
{
rule: 'minLength',
value: 2,
errorMessage: 'Name must be at least 2 characters long',
},
])

validation.addField('#tel', [
{
rule: 'required',
errorMessage: 'This is a required field',
},
{
rule: 'pattern',
value: /^\+[0-9]{1,3}[-.\s]?[0-9]{1,15}$/,
errorMessage: 'Invalid phone number format',
},
{
rule: 'minLength',
errorMessage: 'min 10 symbols',
value: 10,
},
])
const showPass = document.getElementById('#ShowPassword')
showPass.addEventListener('click', ()=> {
    const passwordInput = document.querySelector('#password') {
        if (passwordInput.type === 'password') {
            passwordInput.type = text
        } else {
            passwordInput.type = 'password'
        }
    }
})