<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Registration Page</title>
<style type="text/css">
* {font-family: Arial,Helvetica,sans-serif; size:14px;}
#container { width: 100%;}
#left {width:50%; align:top; display: block-inline;}
#right {width: 50%; align:top; display: block-inline;}
#error {color:#FF0000; padding: 5px; border: dashed red; border-radius: 3px; }
</style>
</head>
<body>
<div class="container">

	<c:if test="${logoutMessage != null}">
		<c:out value="${logoutMessage}"></c:out>
	</c:if>
	
	<div class="error">
	<c:if test="${created != null && errorMessage == null}">
		<c:out value="${created}" />
	</c:if>
	</div>	


<div class="left">

	<!-- login -->
	<h1>Login</h1>
	<div class="error">
	<c:if test="${errorMessage != null}">
		<c:out value="${errorMessage}"></c:out>
	</c:if>
	</div>	
	<form method="POST" action="/login">
		<p>
			<label for="username">Email:</label> <input type="text" id="username"
				name="username" />
		</p>
		<p>
			<label for="password">Password:</label> <input type="password"
				id="password" name="password" />
		</p>
		<input type="hidden" name="${_csrf.parameterName}"
			value="${_csrf.token}" /> <input type="submit" value="Login!" />
	</form>
	
	</div>
	<div class="right">
	
	<!-- register -->
	<h1>Register!</h1>
	<p>
		<form:errors path="user.*" />
	</p>
	<form:form method="POST" action="/registration" modelAttribute="user">
		<p>
			<form:label path="email">Email:</form:label>
			<form:input path="email" />
		</p>
		<p>
			<form:label path="first_name">First Name:</form:label>
			<form:input path="first_name" />
		</p>
		<p>
			<form:label path="last_name">Last Name:</form:label>
			<form:input path="last_name" />
		</p>
		<p>
			<form:label path="password">Password:</form:label>
			<form:password path="password" />
		</p>
		<p>
			<form:label path="password_confirm">Password Confirmation:</form:label>
			<form:password path="password_confirm" />
		</p>
		<input type="submit" value="Register!" />
	</form:form>
	</div>
	
</div>
	
</body>
</html>