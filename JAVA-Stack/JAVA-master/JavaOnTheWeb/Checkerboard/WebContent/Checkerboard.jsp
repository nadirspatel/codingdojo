<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" type="text/css" href="checkboard.css">
<title>Checkerboard</title>
<% String width = request.getParameter("width"); %>
<% String height = request.getParameter("height"); %>
<%if(width == null){ %>
<%width = "8"; %>
<%} %>
<%if(height == null){ %>
<%height = "8"; %>
<%} %>
<% 
%>
<%! public String[] rowSwitch(int r){
	String first;
	String second;
	if(r % 2 == 0){
		first = "<div class='red'></div>";
		second = "<div class='blue'></div>";
	}
	else{
		first = "<div class='blue'></div>";
		second = "<div class='red'></div>";
	}
	String[] order = {first, second};
	return order;
} %>
</head>
<body>
<h1>Checkerboard: <%= width %>w X <%= height %>h</h1>
<%for (int i=0;i<Integer.parseInt(height);i++){%>
	<div id="row">
	<%String[] row = rowSwitch(i); %>
	<%for (int k=0;k<Integer.parseInt(width);k++){ %>
		<%if(k % 2 == 0){ %>
		<%= row[0] %> 
		<%} %>
		<%if(k % 2 != 0){ %>
		<%= row[1] %>  
		<%} %>
	<%} %>
	</div>
<%} %>
</body>
</html>