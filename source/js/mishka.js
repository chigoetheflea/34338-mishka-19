document.querySelector("body").classList.remove("no-js");

/* Карта */

var map = document.querySelector("#js-map");

if(map) {
  ymaps.ready(function () {
    var centerCoords = [59.938635, 30.323118], mZoom = 17;
    var myMap = new ymaps.Map("js-map",
      {
        center: centerCoords,
        zoom: mZoom
      },
      {
        searchControlProvider: "yandex#search"
      }
    ),
    marker = new ymaps.Placemark([59.938635, 30.323118],
      {
        hintContent: "Магазин «Мишка»",
        balloonContent: ""
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/map-marker.svg",
        iconImageSize: [50, 77],
        iconImageOffset: [-25, -77]
      }
    );
    myMap.behaviors.disable("scrollZoom");
    myMap.geoObjects.add(marker);
  });
}

/* Карта */

/* Модальное окно */

var modalWindow = document.querySelector(".modal")
    modalButton = document.querySelectorAll(".js-modal-buy");

if(modalWindow) {
  for (var mBut in modalButton) {
    modalButton[mBut].onclick = function (e) {
      e.preventDefault();
      modalWindow.classList.add("modal--open");
    };
  }

  modalWindow.addEventListener("click", function (e) {
    if(e.target.classList.contains("modal")) modalWindow.classList.remove("modal--open");
  });

}

/* Модальное окно */

/* Меню */

var menuButton = document.querySelector(".main-nav__control"),
    navWraper = document.querySelector(".main-nav");

navWraper.classList.add("main-nav--closed");

menuButton.addEventListener("click", function () {
  navWraper.classList.toggle("main-nav--closed");
});

/* Меню */
