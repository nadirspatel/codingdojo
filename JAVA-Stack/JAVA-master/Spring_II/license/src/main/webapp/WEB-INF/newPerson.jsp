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
	<form:form action="/persons/add/" method="POST" modelAttribute="person">
		<form:label path="firstName">First Name:
		<form:errors path="firstName"/>
		<form:input path="firstName"/>
		</form:label>
		<form:label path="lastName">Last Name:
		<form:errors path="lastName"/>
		<form:input path="lastName"/>
		</form:label>
		
		<input type="submit" value="Add Person">
	</form:form>
</body>
</html>