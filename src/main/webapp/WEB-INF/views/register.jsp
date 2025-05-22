<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head><title>회원가입</title></head>
<body>
    <h2>회원가입</h2>

    <form action="${pageContext.request.contextPath}/register" method="post">
        아이디: <input type="text" name="username" required /><br/><br/>
        비밀번호: <input type="password" name="password" required /><br/><br/>
        <button type="submit">가입</button>
    </form>

    <c:if test="${not empty error}">
        <p style="color:red;">${error}</p>
    </c:if>
    <c:if test="${not empty message}">
        <p style="color:green;">${message}</p>
    </c:if>
</body>
</html>
