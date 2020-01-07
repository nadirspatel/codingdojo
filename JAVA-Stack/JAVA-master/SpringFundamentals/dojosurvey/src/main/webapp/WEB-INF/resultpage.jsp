<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<title>Dojo Survey</title>
	<style>
	#main{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	</style>
</head>
<body>
<div id='main'>
<fieldset>
	<legend>Submitted Info</legend>
	<table>
		<tr>
		<td>Name:</td>
		<td><c:out value="${name}"/></td>
		</tr>
		
		<tr>
		<td>Location:</td>
		<td><c:out value="${location}"/></td>
		</tr>
		
		<tr>
		<td>Favorite Language:</td>
		<td><c:out value="${language}"/></td>
		</tr>
		
		<tr>
		<td>Comment:</td>
		<td><c:out value="${comment}"/></td>
		</tr>
	</table>
</fieldset>
</div>
</body>
</html>