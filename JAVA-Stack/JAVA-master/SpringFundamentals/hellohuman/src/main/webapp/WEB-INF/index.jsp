<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<title>Hello Human</title>
	</head>
	<body>
		Hello <c:out value="${firstname}${lastname}"/>!
	</body>
</html>