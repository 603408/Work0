function showHint(user,pwd)
{
  var xmlhttp;
  if (user.length==0 &&pwd.length==0)
  { 
    document.getElementById("txtHint").innerHTML="";
    return;
  }
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var re_text=xmlhttp.responseText;
      if (re_text=="")
      {
        window.alert("登入失败，请检查账户和密码");
      }
      else
      {
        window.alert("登入成功");
        XX()

      }
    }
  }
  xmlhttp.open("GET","http://192.168.0.127:6001/演示工程/logindata.asp?u="+user+"&pwd="+pwd,true);
  xmlhttp.send();
}

  function XX()
{
  document.getElementById("ss").style.display="block";
   document.getElementById("fx1").style.display="block";
   document.getElementById("fx2").style.display="block";

}

function chaxun()
{
  var user=document.getElementById("usr").value
  var pwd=document.getElementById("pwd").value
  showHint(user,pwd);

}

var count=0;
  function ks()
{
  count+=1;
  if (count==3) {
    document.getElementById("ss").style.display="block";
    document.getElementById("fx1").style.display="block";
    document.getElementById("fx2").style.display="block";
    count=0;
  }
}