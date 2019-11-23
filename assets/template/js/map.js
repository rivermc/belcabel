var Map;
var Placemark;

function initMap(coords, address) {
    cityGeocode(address);
    Map = new ymaps.Map("map", {
        center: coords,
        controls: ['typeSelector', 'fullscreenControl'],
        zoom: 11
    });
}

function addPlacemark(coords, address) {
    Placemark = new ymaps.Placemark(coords, {
        hintContent: address,
        balloonContent: '<p>' + address + '</p>'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '/assets/template/images/icons/map-icon-0.svg',
        iconImageSize: [64, 90],
        iconImageOffset: [-32, -90]
    });

    Map.geoObjects.add(Placemark);
    
}

function cityGeocode(address) {
    ymaps.geocode(address, {
        results: 1
    }).then(function (res) {
        var firstGeoObject = res.geoObjects.get(0);
        var coords = firstGeoObject.geometry.getCoordinates();
        addPlacemark(coords, address);
    });
}


if (typeof ymaps != 'undefined') {
    var adrs = $('.js_contact_map');
    ymaps.ready(function() {
        if ($('#map').length) {
            initMap([55.390051, 37.812067], adrs.data('address'));
        }
    });
}
