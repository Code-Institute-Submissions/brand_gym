// For Login
const loginReturnBtn = document.querySelector('.login-back-btn');


function goBack() {  // Go Back one Page
    window.history.back();
}


loginReturnBtn.addEventListener('click', goBack);