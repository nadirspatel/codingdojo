<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<title>Fortran Dashboard</title>
	<style>
	#main{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	ul{
		list-style-type: none;
		display: flex;
		flex-direction: row;
	}
	
	li{
		padding: 3px;
	}
	#header{
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}
	</style>
</head>
<body>
<div id='main'>
<div id="header">
<h1>Fortran!</h1>
<ul>
<li><a href="/m/38/0553/0733">Setup</a></li>
<li> | </li>
<li><a href="/m/38/0483/0345">Forms</a></li>
<li> | </li>
<li><a href="/m/38/0553/0342">Cards</a></li>
<li> | </li>
<li><a href="/m/26/0553/0348">Advanced</a></li>
<li> | </li>
<li><a href="/m/26/0483/2342">Binary</a></li>
<li> | </li>
</ul>
</div>
<textarea cols=50 rows=5 readonly><c:out value="${ thisPage[2]}"/></textarea>
</div>
</body>
</html>