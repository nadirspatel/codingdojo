<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Welcome Page</title>
</head>
<body>
    <h1>Welcome <c:out value="${currentUser.first_name}"/>!</h1>
    <fieldset>
    		<p>First Name: <c:out value="${currentUser.first_name}"/></p>
    		<p>Last Name: <c:out value="${currentUser.last_name}"/></p>
    		<p>Email: <c:out value="${currentUser.email}"/></p>
    		<p>Sign Up Date: <c:out value="${currentUser.created_at}"/></p>
    		<p>Last Sign In: <c:out value="${currentUser.last_login}"/></p>
    </fieldset>
    <form id="logoutForm" method="POST" action="/logout">
        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
        <input type="submit" value="Logout!" />
    </form>
</body>
</html>