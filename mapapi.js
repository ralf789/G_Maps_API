function initMap(){
	var option = {
		zoom:8,
		center:{lat: 45.4215, lng: -75.6972}
	};
	var map = new google.maps.Map(document.getElementById('map'), option);
				//click
			google.maps.event.addListener(map, 'click', function(event){
        // Add marker
        addMarker({coords:event.latLng});
      });
				
				//  markers
      var markers = [
        {
          coords:{lat:45.4236,lng:-75.7009},
          iconImage:'',
          content:'<h1>Parliament Hill</h1>'+
			'The Parliament of Canada is the federal legislature of Canada, seated at Parliament Hill in Ottawa, the national capital.'
        },
        {
          coords:{lat:45.454556,lng:-75.503387},
		  iconImage:'',
          content:'<h1>Indigo</h1>'+
			''
        },
        {
          coords:{lat:45.299149,lng:-75.939346},
		iconImage:'',
		content:'<h1>Tanger Outlets Ottawa</h1>'
        }

      ];

      // add marks with loop
      for(var i = 0;i < markers.length;i++){
		  
        addMarker(markers[i]);
      }

      // Add Marker Function
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          //icon:props.iconImage
        });

        // Check for customicon
        if(props.iconImage){
          // Set icon image
          marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }
      }
    }