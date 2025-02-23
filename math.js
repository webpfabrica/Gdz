        document.ondragstart = prohibit;//запрещаем перетаскивание
		document.onselectstart = prohibit;//запрещаем выделение
		document.oncontextmenu = prohibit;//запрещаем клик правой кнопкой
async function findAnswer() {
    const inputNumber = document.getElementById('numberInput').value;
    const answerElement = document.getElementById('answer');

    try {
        const response = await fetch('math.json'); // Загружаем JSON-файл
        const data = await response.json();
        
        if (data[inputNumber]) {
            // Заменяем \n на <br> для переноса строк
            answerElement.innerHTML = `${data[inputNumber].replace(/\n/g, '<br>')}`;
        } else {
            answerElement.textContent = "Номер не найден.";
        }
    } catch (error) {
        answerElement.textContent = "Ошибка загрузки данных.";
    }
}