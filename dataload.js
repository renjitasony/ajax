$(document).ready(function(){
    $("#loadSdata").click(function(){
        $.ajax({
            type: "GET",
            url:"mydata.json",
            success:function(data){
                var outpt = "<table class='table' <thead> <tr> <th>Name</th> <th>Age</th> <th>College</th> <th>Contact</th> </tr></thead>";
                for(var i in data){
                    outpt+="<tr> <td>"+ data[i].name +"</td>";
                    outpt+=" <td>"+ data[i].age +"</td>";
                    outpt+="<td>"+ data[i].college +"</td>";
                    outpt+="<td>"+ data[i].mob +"</td> </tr>";
                }
                outpt+="</table>";
                $(".result").html(outpt);
            },
            // error:function(){

            // }
        });
    });
});