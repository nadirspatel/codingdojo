<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Add Song</title>

</head>
<body>
<div id="navbar">
<a href="/dashboard">Start Looking!</a>
</div>
<form:form action="/songs/add/addnew" method="POST" modelAttribute="song">

<form:label path="title">Name
<form:errors path="title"/>
<form:input path="title"/>
</form:label>

<form:label path="artist">Artist
<form:errors path="artist"/>
<form:input path="artist"/>
</form:label>


<form:label path="rating">Rating
<form:errors path="rating"/>
<form:select path="rating">
	<c:forEach begin="1" end="10" varStatus="loop">
	<form:option value="${loop.index}"/>
	</c:forEach>
</form:select>
</form:label>

<input type="submit" value="Add Song"/>
</form:form>
</body>
</html>