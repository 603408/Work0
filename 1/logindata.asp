<% Session.CodePage=65001 
Response.Charset="UTF-8" %>

<%
username=ucase(request.querystring("u"))
password=ucase(request.querystring("pwd"))  '获得网页参数'

	set cnn1 = Server.CreateObject("ADODB.Connection")
	cnn1.Open "provider=sqloledb;data source=.\SQLEXPRESS2008;initial catalog=TestDB;user id=sa;password=zhang123;" 
	
	sql = "select * from login where username='"+username+"' and password= '"+password+"'"
	set rs= Server.CreateObject("ADODB.RecordSet")
	rs.Open sql,cnn1 ,1,3   '1表示读取，3表示增删改'


	do While not rs.eof
		if IsNull(rs(1)) then
		response.Write("")
		else
		response.Write("information:{user:"+rs(1)+",Registration_time:"+rs(3)+"};state:ok")
		end if
	 	rs.MoveNext
	Loop
	rs.close()
	cnn1.close()

%>
<!-- https://wenku.baidu.com/view/bfe215e9856a561252d36fc3.html   数据库操作属性和方法-->
<!-- http://bjtime.cn/info/view.asp?id=192  数组 -->