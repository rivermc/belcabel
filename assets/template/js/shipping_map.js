
var myShip;

function initShip() {
    myShip = new ymaps.Map("shipmap", {
        center: [55.390051, 37.812067],
        controls: ['typeSelector',  'fullscreenControl'],
        zoom: 8
    });


    myPlacemark = new ymaps.Placemark([55.390051, 37.812067], {
      hintContent: 'address',
      balloonContent: '<p>' + 'address' + '</p>'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/assets/template/images/icons/map-icon-0.svg',
      iconImageSize: [64, 90],
      iconImageOffset: [-32, -90]
    });

    myShip.geoObjects.add(myPlacemark);

    function routeCreate(coords){
      myRoute = ymaps.route([[55.390051, 37.812067],coords], {
        mapStateAutoApply: true
      }).then(function (route) {
        myShip.geoObjects.add(route);
        var points = route.getWayPoints();
        points.options.set({
          iconLayout: 'default#image',
          iconImageHref: '/assets/template/images/icons/map-icon-0.svg',
          iconImageSize: [64, 90],
          iconImageOffset: [-32, -90]
        });
        route.getPaths().options.set('strokeColor', '#383878');
        route.getPaths().options.set('strokeWidth', '5');
        //$('.js_distance').text('Расстояние ' + parseInt( route.getLength() / 1000) + ' км');
      });
    }

    function geocoding(kind, coords) {
      var _coords = coords;
      ymaps.geocode(coords, {
        kind: kind,
        results: 1
      }).then(function(res) {
        var typesCount = res.geoObjects.events.typesCount;
        if (typesCount === 0) {
          geocoding('locality', _coords);
        }
        else {
          var full_address  = res.geoObjects.get(0).properties.get('text');
          $('#addressShipping').val(full_address);
        }
      });
    }

    function cityGeocode(coords) {
      $('#addressShipping').val('');
      var address = 'test';
      myPlacemark = new ymaps.Placemark(coords, {
       hintContent: address,
       balloonContent: '<p>' + address + '</p>'
      }, {
       iconLayout: 'default#image',
       iconImageHref: '/assets/template/images/icons/map-icon-0.svg',
        iconImageSize: [64, 90],
        iconImageOffset: [-32, -90]
      });

      myShip.geoObjects.add(myPlacemark);
      geocoding('house', coords);
    }

    myShip.events.add(["click"], function (e) {
      myShip.geoObjects.removeAll();
      var coords = e.get('coords');
        routeCreate(coords);
        cityGeocode(coords);
    });
 
    $('#addressShipping').change( function() {
      myShip.geoObjects.removeAll();
      var address = $(this).val();
      ymaps.geocode(address, {
            results: 1
        }).then(function (res) {
                var firstGeoObject = res.geoObjects.get(0);
                var coords = firstGeoObject.geometry.getCoordinates();
            routeCreate(coords);
            cityGeocode(coords);
          });
    });

}

if (typeof ymaps != 'undefined') {
  ymaps.ready(function() {
    if ($('#shipmap').length) {
      initShip();
    }
  });
}