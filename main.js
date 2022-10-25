
var participants = [];


const getWinner = (data) => {

    const aleat = Math.floor(Math.random() * data.length);
  
    $("#selected").html("<b>Ha gando: </b>"+data[aleat].name);


}

const showParticipants = (data) => {

    let arrayAux=[];

    data.forEach(element => {
        arrayAux.push(element.name);
    });

    //$("#users").text("Participants: "+ arrayAux);
    //$("#users").html("<strong>Participants: </strong> "+arrayAux);
    $("#users").text("Users: " + arrayAux);

}


$(document).ready(function(){

    $.ajax({

        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        contentType: "application/json",
        success:
            function(response){

                participants=response;

                showParticipants(participants);

            },
        error: function(error){
            console.log(error);
            alert(error);

        }

    });


    $(".btn").click(function () {


        getWinner(participants);
        var text;
        text=$("#texto").val();
        $("#texto").val("");
        
        alert(text);
    
    });


});


