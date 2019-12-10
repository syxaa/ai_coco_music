package entity;

public class Singer {
	private int singer_id;
	private String name;
	private int fans_number;
	public int getSinger_id() {
		return singer_id;
	}
	public void setSinger_id(int singer_id) {
		this.singer_id = singer_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getFans_number() {
		return fans_number;
	}
	public void setFans_number(int fans_number) {
		this.fans_number = fans_number;
	}
}
