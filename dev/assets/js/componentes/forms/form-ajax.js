window.addEventListener("load", function(){
		var assunto = document.getElementById("assunto");
		var op1     = document.getElementById("form1");
		var op2     = document.getElementById("form2");
		var op3     = document.getElementById("form3");
		var div     = document.getElementById("container");
		var btn     = document.getElementById("seleciona");
		

		$.ajax({
			url: 'form-1.php',
			type: 'GET',
			dataType: 'html',
			success: function (data) {
				$(div).html("");
				$(div).append(data);
			}
		});
	
		assunto.addEventListener("click", function(){

		if(op1.selected){
		
		$.ajax({
			url: 'form-1.php',
			type: 'GET',
			dataType: 'html',
			success: function (data) {
				$(div).html("");
				$(div).append(data);
			}
		});
			
		} else if(op2.selected){

		$.ajax({
			url: 'form-2.php',
			type: 'GET',
			dataType: 'html',
			success: function (data) {
				$(div).html("");
				$(div).append(data)
			}
		});

		} else if(op3.selected){
	
		$.ajax({
			url: 'form-3.php',
			type: 'GET',
			dataType: 'html',
			success: function (data) {
				$(div).html("");
				$(div).append(data);
			}
		});
	
		}
		}, true);
	}, true);