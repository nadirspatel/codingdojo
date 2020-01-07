<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<h1>Books</h1>
<c:forEach items="${books}" var="book" varStatus="loop">
<ul>    
    <li><c:out value="${book.title}"/></li>
    <li><c:out value="${book.description}"/></li>
    <li><c:out value="${book.language}"/></li>
    <li><c:out value="${book.numberOfPages}"/></li>
    <li><a href="/books/delete/${loop.index}">Delete</a></li>
</ul>
</c:forEach>
