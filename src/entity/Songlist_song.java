package entity;

public class Songlist_song {
	private String songlist_id;
	private String song_id;

	public String getSonglist_id() {
		return songlist_id;
	}

	public void setSonglist_id(String songlist_id) {
		this.songlist_id = songlist_id;
	}

	public String getSong_id() {
		return song_id;
	}

	public void setSong_id(String song_id) {
		this.song_id = song_id;
	}

	private String song_name;

	public String getSong_name() {
		return song_name;
	}
	public void setSong_name(String song_name) {
		this.song_name = song_name;
	}
}
