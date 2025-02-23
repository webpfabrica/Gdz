async function findAnswer() {
    const page = document.getElementById('pageInput').value.trim();
    const task = document.getElementById('taskInput').value.trim();
    const answerElement = document.getElementById('answer');

    if (!page || !task) {
        answerElement.textContent = "Введіть номер сторінки і завдання.";
        return;
    }

    try {
        const response = await fetch('english.json'); // Загружаем JSON
        const data = await response.json();
        
        if (data[page] && data[page][task]) {
            // Заменяем \n на <br> для переноса строк
            answerElement.innerHTML = `${data[page][task].replace(/\n/g, '<br>')}`;
        } else {
            answerElement.textContent = "Сторінка або завдання не знайдені.";
        }
    } catch (error) {
        answerElement.textContent = "Помилка завантаження даних.";
    }
}