<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<title>Learning Platform Assignment</title>
	</head>
	<body>
		<h1>Fortran!</h1>
		<div class="links">
			<a href="/m/38/0553/0733">Set up</a> | <a href="/m/38/0483/0345">Forms</a> | <a href="/m/38/0553/0342">Cards</a> | <a href="/m/26/0553/0348">Advanced</a> | <a href="/m/26/0483/2342">Binary</a>
		</div>
		<div class="content">
			<input type="checkbox"/> Assignment Complete<br>
			<c:out value="${assignment}"/>
		</div>
	</body>
</html>