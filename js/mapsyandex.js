var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        //center: [44.234006, 43.094491], // Анджиевский
        center: [44.2170006, 43.114491], // Анджиевский
        zoom: 13
    });
  // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [44.233006, 43.094491]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Главный офис'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon'
        });
        SalesOffice = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [44.202686, 43.135959]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Дополнительный офис'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon'
        });

    myMap.geoObjects
        .add(myGeoObject)
        .add(SalesOffice)

    document.getElementById('destroyButton').onclick = function () {
        // Для уничтожения используется метод destroy.
        myMap.destroy();
    };

}
