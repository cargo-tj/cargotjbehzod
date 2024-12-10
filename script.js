
    // Массив с примерными трек-номерами
    const validTrackNumbers = ['1234567890', 'TRACK12345', 'ABCDE98765'];

    // Добавляем обработчик на кнопку
    document.getElementById('check-button').addEventListener('click', function () {
      const trackNumber = document.getElementById('track-number').value.trim(); // Получаем введённый номер
      const result = document.getElementById('result'); // Элемент для вывода результата

      if (!trackNumber) { // Если поле пустое
        result.textContent = 'Введите трек-номер!';
        result.style.color = 'red';
        return;
      }

      // Проверяем, есть ли трек-номер в списке
      if (validTrackNumbers.includes(trackNumber)) {
        result.textContent = `Трек-номер ${trackNumber} найден!`; // Используем обратные кавычки
        result.style.color = 'orange';
      } else {
        result.textContent = 'Трек-номер не найден!';
        result.style.color = 'orange';
      }
    });
  