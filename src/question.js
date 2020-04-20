export class Question{
    static create(question){
       return fetch('https://app-qustion.firebaseio.com/questions.json',{
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'app;ication/json'
            }
        })
           .then(response => response.json())
           .then(response => {
                question.id = response.name
               return question
            })
           .then(addToLocallStorage)
           .then(Question.renderList)
    }

    static renderList(){
        const questions = getAllQuestionsFromLocalStorage()
        const html = questions.length? questions.map(toCart).join(''):`<div>нет вопросов</div>`

        const list = document.getElementById('list')
        list.innerHTML = html
    }
}

function addToLocallStorage(question){
    const all = getAllQuestionsFromLocalStorage()
    all.push(question)
    localStorage.setItem('questions',JSON.stringify(all))
}

function getAllQuestionsFromLocalStorage(){
   return JSON.parse(localStorage.getItem('questions') || '[]')
}
function toCart(quistions){
    return `<div class="list-item">
                <div class="list-date">${new Date(quistions.date).toLocaleDateString()}
                                       ${new Date(quistions.date).toLocaleTimeString()}</div>
                <div class="list-text">${quistions.text}</div>
            </div>`
}