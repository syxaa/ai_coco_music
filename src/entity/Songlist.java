package entity;

public class Songlist {
	private String songlist_id;
	private String songlist_name;
	private String picurl;


	public String getSonglist_id() {
		return songlist_id;
	}

	public void setSonglist_id(String songlist_id) {
		this.songlist_id = songlist_id;
	}

	public String getSonglist_name() {
		return songlist_name;
	}

	public void setSonglist_name(String songlist_name) {
		this.songlist_name = songlist_name;
	}

	public String getPicurl() {
		return picurl;
	}

	public void setPicurl(String picurl) {
		this.picurl = picurl;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	private String description;
	private  String tags;
}
