var APP = APP || {};

$(document).ready(function(){

    $('.get-info-btn').on('click', function(){
        //console.log(data, "works");


        $.get('location.html', function(data){
           //$('.more-stuff').append(data);
            console.log(data, "works");
        });

        $.get('data.json', function(data){
            console.log("works",data);
           var firstCity = data.locations[0].location;
            $('.more-stuff').children('.location-name').append('<p>' + firstCity + "</p>");
        });

    });

});
