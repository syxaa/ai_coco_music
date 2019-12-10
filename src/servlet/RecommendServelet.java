package servlet;

import com.alibaba.fastjson.JSONObject;
import dao.RecommendDao;
import dao.SongDao;
import dao.Song_likeDao;
import entity.Recommend;
import entity.Song;
import entity.Song_like;
import page.Operator;
import page.Page;
import page.SearchProperty;
import util.StringUtil;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
//import com.ischoolbar.programmer.dao.MajorInfoDao;
//import com.ischoolbar.programmer.dao.UniversityCategoryDao;
//import com.ischoolbar.programmer.dao.BookDao;
//import com.ischoolbar.programmer.entity.Book;
//import com.ischoolbar.programmer.entity.MajorInfo;
//import com.ischoolbar.programmer.entity.UniversityCategory;
//import com.ischoolbar.programmer.entity.UserInfo;
//import com.ischoolbar.programmer.page.Operator;
//import com.ischoolbar.programmer.page.Page;
//import com.ischoolbar.programmer.page.SearchProperty;
//import com.ischoolbar.programmer.util.StringUtil;

/**
 * 图书管理控制器
 *
 *
 */
public class RecommendServelet extends HttpServlet {

    /**
     *
     */
    private static final long serialVersionUID = 4386109520796986005L;
    private  SongDao songdao = new SongDao();
    private Song_likeDao songlikedao = new Song_likeDao();
    private RecommendDao recommendDao  = new RecommendDao();

//    private MajorInfoDao majorinfoDao = new MajorInfoDao();
//
//    private UniversityCategoryDao universityCategoryDao = new UniversityCategoryDao();

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
        if("toBookListView".equals(method)){
            request.getRequestDispatcher("/WEB-INF/views/book.jsp").forward(request, response);
            return;
        }
//        if("BookList".equals(method)){
//            getBookList(request,response);
//            return;
//        }
//        if("AddBook".equals(method)){
//            addBook(request,response);
//            return;
//        }
//        if("EditBook".equals(method)){
//            editBook(request,response);
//            return;
//        }
//        if("DeleteBook".equals(method)){
//            deleteBook(request,response);
//            return;
//        }
        if("GetRecommendsong".equals(method)){
            recommendsongdata(request,response);
            return;
        }
    }

    private void recommendsongdata(HttpServletRequest request,
                                           HttpServletResponse response) {
        // TODO Auto-generated method stub
        Page<Recommend> page = new Page<Recommend>(1, 999);
        List<Recommend> content = new ArrayList<>();
        List<Song> result= new ArrayList<>();
        page = recommendDao.findList(page);
        content = page.getContent();
        //
        for (int i = 0; i < content.size(); i++) {
            Page<Song> page1 = new Page<Song>(1, 999);
            String song_id = content.get(i).getSong_id();
            page1.getSearchProporties().add(new SearchProperty("song_id", ""+song_id, Operator.EQ));
            page1 = songdao.findList(page1);
            result.add(page1.getContent().get(0));
        }
        Map<String, Object> ret = new HashMap<String, Object>();
//        UniversityCategory bookCategory = new UniversityCategory();
//        bookCategory.setId(0);
//        bookCategory.setName("全部");
//        page.getContent().add(bookCategory);
        ret.put("type", "success");
//        ret.put("values", page.getContent());
        ret.put("values",result);
        StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
    }

//    private void deleteBook(HttpServletRequest request,
//                            HttpServletResponse response) {
//        // TODO Auto-generated method stub
//        String[] ids = request.getParameterValues("ids[]");
//        Map<String, String> ret = new HashMap<String, String>();
//        if(ids == null || ids.length ==0){
//            ret.put("type", "error");
//            ret.put("msg", "请选中要删除的数据!");
//            StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
//            return;
//        }
//        for(int i =0;i<ids.length;i++)
//        {
//            Book book = bookDao.find(ids[i],"id");
//            MajorInfo majorinfo =majorinfoDao.find(book.getName(),"univname");
//            if(majorinfo!=null)
//            {
//                ret.put("type", "error");
//                ret.put("msg", "高校 "+book.getName()+" 存在专业分类信息，无法删除！!");
//                StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
//                return;
//            }
//        }
//        int[] idArr = new int[ids.length];
//        for(int i = 0;i < ids.length; i++){
//            idArr[i] = Integer.parseInt(ids[i]);
//        }
//        if(!bookDao.delete(idArr)){
//            ret.put("type", "error");
//            ret.put("msg", "删除失败，请联系管理员!");
//            StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
//            return;
//        }
//        ret.put("type", "success");
//        ret.put("msg", "删除成功!");
//        StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
//    }
//
//    private void editBook(HttpServletRequest request,
//                          HttpServletResponse response) {
//        // TODO Auto-generated method stub
//        String name = request.getParameter("name");
//        int id = Integer.parseInt(request.getParameter("id"));
//        int bookCategoryId = Integer.parseInt(request.getParameter("universityCategoryId"));
//        String province  = request.getParameter("province");
//        String rank  = request.getParameter("rank");
//        String address  = request.getParameter("address");
////		String province  = request.getParameter("");
//        String info = request.getParameter("info");
//        Map<String, Object> ret = new HashMap<String, Object>();
//        if(StringUtil.isEmpty(name)){
//            ret.put("type", "error");
//            ret.put("msg", "图书名称不能为空!");
//            StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
//            return;
//        }
//        UniversityCategory universityCategory = universityCategoryDao.find(bookCategoryId);
//        if(universityCategory == null){
//            ret.put("type", "error");
//            ret.put("msg", "图书分类不能为空!");
//            StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
//            return;
//        }
//        //检查图书总数是否大于借出的数
//        Book oldBook = bookDao.find(id);
//        //已经借出的数量
////		int borrowedNumber = oldBook.getNumber() - oldBook.getFreeNumber();
////		if(number < borrowedNumber){
////			ret.put("type", "error");
////			ret.put("msg", "数量不能小于已经借出的数量!");
////			StringUtil.writrToPage(response,JSONObject.toJSONString(ret));
////			return;
////		}
//
//        Book book = new Book();
//        book.setId(id);
//        book.setUniversityCategory(universityCategory);
//        book.setName(name);
//        book.setProvince(province);
//        book.setInfo(info);
//        book.setAddress(address);
//        book.setRank(rank);
//
//        if(!bookDao.update(book)){
//            ret.put("type", "error");
//            ret.put("msg", "图书更新失败，请联系管理员!");
//            StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
//            return;
//        }
//        ret.put("type", "success");
//        ret.put("msg", "图书更新成功!");
//        StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
//    }
//
//    private void addBook(HttpServletRequest request,
//                         HttpServletResponse response) {
//        // TODO Auto-generated method stub
//        String name = request.getParameter("name");
//        int universityCategoryId = Integer.parseInt(request.getParameter("universityCategoryId"));
//        String province  = request.getParameter("province");
//        String rank  = request.getParameter("rank");
//        String address  = request.getParameter("address");
////		int status = Integer.parseInt(request.getParameter("status"));
////		int number = Integer.parseInt(request.getParameter("number"));
//        String info = request.getParameter("info");
//        Map<String, Object> ret = new HashMap<String, Object>();
//        if(StringUtil.isEmpty(name)){
//            ret.put("type", "error");
//            ret.put("msg", "高校名称不能为空!");
//            StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
//            return;
//        }
//        if(StringUtil.isEmpty(province)){
//            ret.put("type", "error");
//            ret.put("msg", "高校省会不能为空!");
//            StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
//            return;
//        }
//        if(StringUtil.isEmpty(address)){
//            ret.put("type", "error");
//            ret.put("msg", "高校地址不能为空!");
//            StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
//            return;
//        }
//        if(StringUtil.isEmpty(rank)){
//            rank="无";
//        }
//        UniversityCategory universityCategory = universityCategoryDao.find(universityCategoryId);
//        if(universityCategory == null){
//            ret.put("type", "error");
//            ret.put("msg", "高校分类不能为空!");
//            StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
//            return;
//        }
//
//        Book book = new Book();
//        book.setUniversityCategory(universityCategory);
//        book.setName(name);
//        book.setProvince(province);
//        book.setAddress(address);
//        book.setRank(rank);
////		book.setStatus(status);
////		book.setNumber(number);
////		book.setFreeNumber(number);
//        book.setInfo(info);
//        if(!bookDao.add(book)){
//            ret.put("type", "error");
//            ret.put("msg", "图书添加失败，请联系管理员!");
//            StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
//            return;
//        }
//        ret.put("type", "success");
//        ret.put("msg", "图书添加成功!");
//        StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
//    }
//
//    private void getBookList(HttpServletRequest request,
//                             HttpServletResponse response) {
//        // TODO Auto-generated method stub
//        String name = request.getParameter("name");
//        String bbcid = request.getParameter("universityCategoryId");
//        if(name == null){
//            name = "";
//        }
//        int pageNumber = Integer.parseInt(request.getParameter("page"));
//        int pageSize = Integer.parseInt(request.getParameter("rows"));
//        Page<Book> page = new Page<Book>(pageNumber, pageSize);
//        page.getSearchProporties().add(new SearchProperty("name", "%"+name+"%", Operator.LIKE));
//        if(!StringUtil.isEmpty(bbcid) && !"0".equals(bbcid)){
//            page.getSearchProporties().add(new SearchProperty("university_category", universityCategoryDao.find(Integer.parseInt(bbcid)), Operator.EQ));
//        }
//        page = bookDao.findList(page);
//        Map<String, Object> ret = new HashMap<String, Object>();
//        ret.put("total", page.getTotal());
//        ret.put("rows", page.getContent());
//        StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
//    }

}
