<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Lookify!</title>

</head>
<body>

<div id="navbar">
	<a href="/songs/add">Add New</a>
	<a href="/songs/top">Top Songs</a>
	
	<form action="/songs/search" method="POST">
		<input type="text" name="searchTerm">
		<input type="submit" value="Search Artists">
	</form>
</div>

<table>
	<tr>
		<th>Name</th>
		<th>Rating</th>
		<th>actions</th>
	</tr>
	<c:forEach items="${songs}" var="song">
		<tr>
			<td><a href="/songs/${song.id}"><c:out value="${song.title}"/></a></td>
			<td><c:out value="${song.rating}"/></td>
			<td><a href="/songs/delete/${song.id}">delete</a></td>
		</tr>
	</c:forEach>
</table>

</body>
</html>