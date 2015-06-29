<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>assunto</title>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

	<script type="text/javascript">
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
	</script>
</head>
<body>
	<form action="" id="form">
		<select name="" id="assunto">
			<option value="" id="form1">Form 1</option>
			<option value="" id="form2">Form 2</option>
			<option value="" id="form3">Form 3</option>
		</select>
	</form>
	<div id="container"></div>
</body>
</html>