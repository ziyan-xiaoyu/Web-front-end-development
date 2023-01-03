protected void Page_Load(object sender, EventArgs e)  
        {  
            string strUserName = Request.QueryString ["txtUserName"];  
            string strPWD = Request.QueryString["txtPWD"];  
  
            if (strUserName == "张三" && strPWD == "123456")  
            {  
                Response.Write(strUserName + "登录成功！");  
            }  
            else  
            {  
                Response.Redirect("Login.htm");  
            }  
              
              
        }  