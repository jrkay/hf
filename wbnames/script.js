$(document).ready(function(){
    $("#def").show();
    $("#breedClick").hide();
    $("#breedClick div").hide();
    $("#def").show();
	
        $('#breed a[id]').click(function(){
        
        var vsubmen = this.id +"info";  
        
        if( $("#breedClick").is(":visible") == false ) {
            $("#" + vsubmen).show('fast',function() {
			    $("#def").hide();
                $("#breedClick").slideDown();
            });
        } else if ( $("#" + vsubmen).is(":visible") == false ) {
        $("#breedClick").slideUp('slow',function(){
            $("#breedClick div").hide();
            $("#" + vsubmen).show();
            $("#breedClick").slideDown('slow');    
            });
        } else {
        $("#breedClick").slideUp('slow',function(){
            $("#breedClick div").hide();
        });
        }
        return false;
    });

});
