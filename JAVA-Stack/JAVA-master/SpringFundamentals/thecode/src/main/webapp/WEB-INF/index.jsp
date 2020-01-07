<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<title>The Code</title>
	<style>
	#main{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	#errors{
		color: red;
		margin-bottom: 10px;
	}
</style>
</head>
<body>
<div id='main'>
	<h1>What is the code?</h1>
	<p id="errors"><c:out value="${errors}"></c:out></p>
	<form action="guess" method="POST">
	<input type="text" name="aGuess">
	<input type="submit" value="Try Code">
	</form>
</div>
</body>
</html>