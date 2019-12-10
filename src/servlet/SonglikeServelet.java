package servlet;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSONObject;
import dao.SongDao;
import dao.Song_likeDao;
import entity.Song;
import entity.Song_like;
import entity.Songlist;
import page.Operator;
import page.Page;
import page.SearchProperty;
import util.StringUtil;
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
public class SonglikeServelet extends HttpServlet {

    /**
     *
     */
    private static final long serialVersionUID = 4386109520796986005L;
    private  SongDao songdao = new SongDao();
    private Song_likeDao songlikedao = new Song_likeDao();
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
        if("AddSonglike".equals(method)){
            addSonglike(request,response);
            return;
        }
//        if("EditBook".equals(method)){
//            editBook(request,response);
//            return;
//        }
        if("DeleteSonglike".equals(method)){
            deleteSonglike(request,response);
            return;
        }
        if("GetSonglikeListData".equals(method)){
            getSonglikeListData(request,response);
            return;
        }
    }

    private void getSonglikeListData(HttpServletRequest request,
                                           HttpServletResponse response) {
        // TODO Auto-generated method stub
        Page<Song_like> page = new Page<Song_like>(1, 999);
        List<Song_like> content = new ArrayList<>();
        List<Song> result= new ArrayList<>();
        page = songlikedao.findList(page);
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

    private void deleteSonglike(HttpServletRequest request,
                            HttpServletResponse response) throws IOException {
        // TODO Auto-generated method stub
        String song_id = request.getParameter("id");
        Map<String, String> ret = new HashMap<String, String>();
//        if(ids == null || ids.length ==0){
//            ret.put("type", "error");
//            ret.put("msg", "请选中要删除的数据!");
//            StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
//            return;
//        }
//        Song_like songlike = new Song_like();
//        songlike.setSong_id(song_id);
//        if(!songlikedao.add(songlike)){
//            ret.put("type", "error");
//            ret.put("msg", "喜好音乐添加失败，请联系管理员!");
//            StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
//            return;
//        }
        Page<Song_like> page = new Page<Song_like>(1, 999);
        page.getSearchProporties().add(new SearchProperty("song_id", song_id, Operator.EQ));
        page = songlikedao.findList(page);
        Song_like song_like = page.getContent().get(0);
        //for deleterecommed_syx//
        Page<Song> page1 = new Page<Song>(1, 999);
        page1.getSearchProporties().add(new SearchProperty("song_id", song_id, Operator.EQ));
        page1 = songdao.findList(page1);
        String song_name = page1.getContent().get(0).getSong_name();
        deleterecommend(song_name);
        ////


//        for(int i =0;i<ids.length;i++)
//        {
//            Song_like songlike = songlikedao.find("song_id");
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
        if(!songlikedao.delete(song_like.getId())){
            ret.put("type", "error");
            ret.put("msg", "删除失败，请联系管理员!");
            StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
            return;
        }
        ret.put("type", "success");
        ret.put("msg", "删除成功!");
        StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
    }

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
    private void addSonglike(HttpServletRequest request,
                         HttpServletResponse response) throws IOException {
        // TODO Auto-generated method stub
        String song_id = request.getParameter("id");
        Map<String, Object> ret = new HashMap<String, Object>();
        ///// add to recommend
        Page<Song> page = new Page<Song>(1, 999);
        page.getSearchProporties().add(new SearchProperty("song_id", song_id, Operator.EQ));
        page = songdao.findList(page);
        String song_name = page.getContent().get(0).getSong_name();
        addrecommend(song_name);
        /////


        Song_like songlike = new Song_like();
        songlike.setSong_id(song_id);
        if(!songlikedao.add(songlike)){
            ret.put("type", "error");
            ret.put("msg", "喜好音乐添加失败，请联系管理员!");
            StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
            return;

        }
        ret.put("type", "success");
        StringUtil.writrToPage(response, JSONObject.toJSONString(ret));
    }
    //recommend (syx)
    private void addrecommend(String song_name) throws IOException {
        String exe = "python";
        String command = "D:\\孙宇轩\\pycharm编程\\music_recom\\test3.py";
        String num1 = song_name;
//        String num2 = "2";
        String[] cmdArr = new String[] {exe,command,num1};
        Process process = Runtime.getRuntime().exec(cmdArr);
        String result = null;
        BufferedInputStream in = new BufferedInputStream(process.getInputStream());
        BufferedReader br = new BufferedReader(new InputStreamReader(in));
        String lineStr = null;
        while ((lineStr = br.readLine()) != null) {
            result = lineStr;
            System.out.println(result);
        }
    }
    private void deleterecommend(String song_name) throws IOException {
        String exe = "python";
        String command = "D:\\孙宇轩\\pycharm编程\\music_recom\\test4.py";
        String num1 = song_name;
//        String num2 = "2";
        String[] cmdArr = new String[] {exe,command,num1};
        Process process = Runtime.getRuntime().exec(cmdArr);
        String result = null;
        BufferedInputStream in = new BufferedInputStream(process.getInputStream());
        BufferedReader br = new BufferedReader(new InputStreamReader(in));
        String lineStr = null;
        while ((lineStr = br.readLine()) != null) {
            result = lineStr;
            System.out.println(result);
        }
    }
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
