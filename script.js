var cityData = null, cityHtml = null;

$(document).ready(function(){

    $('.get-info-btn').on('click', function(){
        if(cityHtml === null){
            $.get('location.html', function(data){
                cityHtml = data.slice();
                $('.more-stuff').append(data);
            });
        } else {
            console.log("You already got the HTML");
        }

        if(cityData === null){
            $.get('data.json', function(data){
                cityData = data;
                var firstCity = data.locations[0].location;
                console.log(firstCity);
                $('.location-name').append("<p>" + firstCity + "</p>");
            });
        } else {
            console.log(cityData.locations[0].population);
        }

    });

    $("more-stuff").on('click', 'button', function(){
        $(this).parent().append(cityData.locations[0].population);
    });

});
