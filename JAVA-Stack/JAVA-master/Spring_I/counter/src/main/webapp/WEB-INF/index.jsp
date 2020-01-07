<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<title>Welcome!</title>
	<style>
	#main{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	</style>
</head>
<body>
<div id='main'>
<p>Welcome back, User!</p>
<br>
<a href="/counter">View counter results</a>
<a href="/increment">Increment the counter by two</a>
<a href="/reset">Reset the counter</a>
</div>
</body>
</html>