<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
	<head>
		<title>Group Languages</title>
	</head>
	<body>
		<table class="table">
			<tr>
				<th>Name</th>
				<th>Creator</th>
				<th>Version</th>
				<th>Actions</th>
			</tr>
			<c:forEach items="${langs}" var="lang">
    			<tr>    
   				<td><a href="/languages/${lang.thisid}"><c:out value="${lang.name}"/></a></td>
    			<td><c:out value="${lang.creator}"/></td>
    			<td><c:out value="${lang.thisid}"/></td>
    			<td><c:out value="${lang.version}"/></td>
    			<td><a href="/languages/delete/${lang.thisid}">Delete</a> <a href="/languages/edit/${lang.thisid}">Edit</a></td>
    			</tr>
			</c:forEach>
		</table>
		
		<p><h2>Add new language:</h2></p>
		<form:form action="/languages" method="POST" modelAttribute="language">
			<form:label path="name">Name: 
			<form:input type="text" path="name"/><br></form:label>
			<form:label path="creator">Creator: 
			<form:input type="text" path="creator"/><br></form:label>
			<form:label path="version">Version: 
			<form:input type="text" path="version"/><br></form:label>
			<form:label path="thisid">id: 
			<form:input type="number" path="thisid"/><br></form:label>
			<input type="submit" value="Submit">
			<c:forEach items="${errors}" var="error">
				<p><c:out value="${error.getDefaultMessage()}"/></p>
			</c:forEach>
		</form:form>
	</body>
</html>