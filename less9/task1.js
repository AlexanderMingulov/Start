function workingDay() {
    console.log('Начало работы', new Date());
    setTimeout(() => {
        console.log('Обед', new Date());
        setTimeout(() => console.log('Конец работы', new Date()), 5000);
}, 4000)

    }
    
    workingDay();


