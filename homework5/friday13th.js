const countFriday13th = () => {
    let count = [];
    const curentDate = new Date()
    for (let year = 2000; year <= curentDate.getFullYear(); year++) {
        for (let month = 0; month < 12; month++) {
            const day = new Date(year, month, 14);
            if(day.getDay() == 6){
             count.push(`${day.getDate() - 1} ${day.getMonth() + 1} ${day.getFullYear()}`)
           }
        }
    }
   
    return count;                            
}

console.log(`Кол-во пятниц 13-го c 2000 года: ${countFriday13th().length}`);
console.log(countFriday13th());
