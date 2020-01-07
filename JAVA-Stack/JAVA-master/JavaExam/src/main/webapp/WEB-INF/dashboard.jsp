<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Profile</title>
</head>
<body>
<div class="container">
	<h1>
		Welcome
		<c:out value="${currentUser.first_name}!" />
	</h1>
	<div class="well well-lg" >
		<dl class="dl-horizontal">
			<dt>Current Package:</dt>
			<dd><c:out value="${currentUser.apackage.name}" /></dd>
			<dt>Next Due Date:</dt>
			<dd><fmt:formatDate type = "date" dateStyle="long" value = "${currentUser.due_date}" /></dd>
			<dt>Amount Due:</dt>
			<dd><fmt:formatNumber value = "${currentUser.apackage.cost}" type = "currency"/></dd>
			<dt>User Since:</dt>
			<dd><fmt:formatDate type = "date" dateStyle="long" value = "${currentUser.created_at}" /></dd>
		</dl>
	</div>
	<form id="logoutForm" method="POST" action="/logout">
		<input type="hidden" name="${_csrf.parameterName}"
			value="${_csrf.token}" /> <input type="submit" value="Logout" class="btn btn-default"/>
	</form>
</div>
</body>
</html>