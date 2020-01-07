<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<form:form action="/licenses/new" method="POST" modelAttribute="license">
		
		<form:label path="person">Person
		<form:select path="person">
			<c:forEach items="${persons}" var="person">
				<option value="${person.id}">${person.firstName} ${person.lastName}</option>
			</c:forEach>
		</form:select>
		</form:label>
		
		<form:label path="state">State
		<form:errors path="state"/>
		<form:input path="state"/>
		</form:label>
		
		<form:label path="expiration_date">
		<form:errors path="expiration_date"/>
		<form:input path="expiration_date" type="date"/>
		</form:label>
		
		<input type="submit" value="Create">
	</form:form>
</body>
</html>