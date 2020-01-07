<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Details</title>

</head>
<body>
<a href="/dashboard">Dashboard</a>

	<table>
		<tr>
			<td>Title</td>
			<td><c:out value="${song.title}"/></td>
		</tr>
		<tr>
			<td>Artist</td>
			<td><c:out value="${song.artist}"/></td>
		</tr>
		<tr>
			<td>Rating</td>
			<td><c:out value="${song.rating}"/></td>
		</tr>
	</table>
	<a href="/songs/delete/${song.id}">Delete</a>
</body>
</html>