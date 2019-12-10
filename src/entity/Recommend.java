package entity;

public class Recommend {
	private String song_id;

	public String getSong_id() {
		return song_id;
	}

	public double getRecommendrate() {
		return recommendrate;
	}

	public void setRecommendrate(double recommendrate) {
		this.recommendrate = recommendrate;
	}

	public void setSong_id(String song_id) {
		this.song_id = song_id;
	}

	private double recommendrate;


}
