import './style.css'
import {Question} from './question'
import {isValid} from './utils'
import {createModal} from './utils'
import {getAuthForm} from  './auth'


const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#form-button')
const modalBtn = document.getElementById('modal-btn')

window.addEventListener('load',Question.renderList)
form.addEventListener('submit',submitFormHandler)
input.addEventListener('input',()=>{
    submitBtn.disabled = !isValid((input.value))
})
modalBtn.addEventListener('click',openModal)

function submitFormHandler(event){
    event.preventDefault()

    if(isValid(input.value)){
        const questions = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }

        submitBtn.disabled = true

        Question.create(questions).then( ()=>{
            input.value = ''
            input.className = ''
            submitBtn.disabled = false
        })

    }

}

function openModal(){
    createModal('title',getAuthForm())
    document
        .getElementById('auth-form')
        .addEventListener('submit',authFormHandler, {once: true})
}

function authFormHandler(){
    event.preventDefault()

    const email = event.target.querySelector('#email-input').value
    const password = event.target.querySelector('#password-input').value

    console.log(email,password)
}