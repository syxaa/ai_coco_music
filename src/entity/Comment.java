package entity;

import annotation.Column;
import annotation.Table;

public class Comment {
	private int comment_id;
	private String song_or_list;
	private int songorlist_id;
	private String user_id;
	private String detail;
	public int getComment_id() {
		return comment_id;
	}
	public void setComment_id(int comment_id) {
		this.comment_id = comment_id;
	}
	public String getSong_or_list() {
		return song_or_list;
	}
	public void setSong_or_list(String song_or_list) {
		this.song_or_list = song_or_list;
	}
	public int getSongorlist_id() {
		return songorlist_id;
	}
	public void setSongorlist_id(int songorlist_id) {
		this.songorlist_id = songorlist_id;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
}
