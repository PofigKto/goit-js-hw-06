
const formRef = document.querySelector('.login-form');
const formSubmit = (event) => {
    event.preventDefault();
    if (event.currentTarget.elements.password.value === '' || event.currentTarget.elements.email.value === '') {
        alert('Все поля должны быть заполнены!');
    }
    else {
        const userInfo = {
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value,
        };
        console.log(userInfo);
        event.currentTarget.reset();
    }
} 

formRef.addEventListener('submit', formSubmit);
