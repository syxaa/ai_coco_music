package servlet;

import  com.alibaba.fastjson.JSONObject;
import dao.UserDao;
import entity.User;
import page.Operator;
import page.Page;
import page.SearchProperty;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class LoginServlet extends HttpServlet {

	/**
	 *
	 */
	private static final long serialVersionUID = -5870852067427524781L;

	private UserDao userDao = new UserDao();

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		Object attribute = request.getParameter("method");
		String method = "";
		if(attribute != null){
			method = attribute.toString();
		}
//		if("login".equals(method)){
//			request.getRequestDispatcher("/index.html").forward(request, response);
//			return;
//		}
//		if("registe".equals(method)){
//			request.getRequestDispatcher("/WEB-INF/views/registe.jsp").forward(request, response);
//			return;
//		}
		if("registeAct".equals(method)){
			resister(request,response);
			return;
		}
		if("loginAct".equals(method)){
			login(request,response);
			return;
		}
//		if("LoginOut".equals(method)){
//			String sql = "truncate recommand";
//			PreparedStatement prepareStatement;
//			try {
//				prepareStatement = UserDao.getDbUtil().connection.prepareStatement(sql);
//				ResultSet executeQuery = prepareStatement.executeQuery();
//			} catch (SQLException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//			request.getSession().setAttribute("user", null);
//			response.sendRedirect("LoginServlet?method=login");
//			return;
//		}
	}

	private void login(HttpServletRequest request, HttpServletResponse response) throws IOException {
		// TODO Auto-generated method stub
		Map<String, String> ret = new HashMap<String, String>();
		response.setCharacterEncoding("UTF-8");
		String username = request.getParameter("username");
		String password = request.getParameter("pass");
//		System.out.println(username+"   "+password);

		Page<User> page = new Page<User>(1, 10);
		page.getSearchProporties().add(new SearchProperty("user_id", username, Operator.EQ));
		page = userDao.findList(page);
		if(page.getContent().size() == 0){
			ret.put("type", "error");
			ret.put("msg", "账号不存在！");
			response.getWriter().write(JSONObject.toJSONString(ret));
			return;
		}
		User user = page.getContent().get(0);
//		System.out.println(user.getName());
		if(!password.equals(user.getPassword())){
			ret.put("type", "error");
			ret.put("msg", "密码错误！");
			response.getWriter().write(JSONObject.toJSONString(ret));
			return;
		}
		ret.put("type", "success");
		ret.put("msg", "登录成功！");
		ret.put("name", user.getName());
		response.getWriter().write(JSONObject.toJSONString(ret));
//		String hh = JSONObject.toJSONString(ret);
//		System.out.println(hh);
//		response.getWriter().write("{\"msg\":\"登录成功！\",\"type\":\"success\"}");
	}

	private void resister(HttpServletRequest request,
						  HttpServletResponse response) throws IOException {
		// TODO Auto-generated method stub
		Map<String, String> ret = new HashMap<String, String>();
		response.setCharacterEncoding("UTF-8");
		String name = request.getParameter("name");
		String password = request.getParameter("password");
		String user_id = request.getParameter("user_id");
		System.out.println(name+"   "+user_id+"   "+password);
		if(isExistUserName(name)){
			ret.put("type", "error");
			ret.put("msg", "该用户名已经存在，请重新输入！");
			response.getWriter().write(JSONObject.toJSONString(ret));
			return;
		}
		if(isExistUserId(user_id)){
			ret.put("type", "error");
			ret.put("msg", "该账号已经存在，请重新输入！");
			response.getWriter().write(JSONObject.toJSONString(ret));
			return;
		}
		User user = new User();
		user.setName(name);
		user.setPassword(password);
		user.setUser_id(user_id);
		if(!userDao.add(user)){
			ret.put("type", "error");
			ret.put("msg", "注册失败，请联系管理员！");
			response.getWriter().write(JSONObject.toJSONString(ret));
			return;
		}
		ret.put("type", "success");
		ret.put("msg", "注册成功！");
		response.getWriter().write(JSONObject.toJSONString(ret));
	}
	//查询这个用户名是否已存在
	private boolean isExistUserName(String name){
		Page<User> page = new Page<User>(1, 10);
		page.getSearchProporties().add(new SearchProperty("name", name, Operator.EQ));
		page = userDao.findList(page);
		if(page.getContent().size() > 0)return true;
		return false;
	}
	//查询这个账号是否已存在
	private boolean isExistUserId(String user_id){
		Page<User> page = new Page<User>(1, 10);
		page.getSearchProporties().add(new SearchProperty("user_id", user_id, Operator.EQ));
		page = userDao.findList(page);
		if(page.getContent().size() > 0)return true;
		return false;
	}
}
