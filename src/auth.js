export function getAuthForm() {
   const authForm = `<form class="mui-form" id="auth-form">
         <div class="mui-textfield mui-textfield--float-label">
             <input type="email" id="email-input">
             <label for="email-input">Email</label>
         </div>
          <div class="mui-textfield mui-textfield--float-label">
             <input type="text" id="password-input">
             <label for="password-input">Пароль</label>
         </div>
        <button type="submit"
                class="mui-btn mui-btn--raised mui-btn--primary"
                id="form-button">отправить</button>
    </form>`

    return authForm
}