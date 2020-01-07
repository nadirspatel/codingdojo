<!DOCTYPE html>
<html>
<head>
		<title>Templates</title>
		<link href="css/style.css" rel="stylesheet" type="text/css">
		
</head>
<body>'
	<fieldset>
		<legend>Templates</legend>
		<h1>Templates index.jsp</h1>
	</fieldset>
	<a href="/about">About</a><br>
	<a href="/projects">Projects</a>
	
	
	
</body>
</html>

		
        	

<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<c:out value="${2+2}"/>
<c:out value="${dojoName}"/>
