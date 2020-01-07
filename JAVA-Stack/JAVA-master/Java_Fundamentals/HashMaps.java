// Set, Iterator, Map stuff via:
// https://www.tutorialspoint.com/java/java_hashmap_class.htm
import java.util.HashMap;
import java.util.*;
public class HashMaps{
	HashMap<String, String> songList(){
		HashMap<String, String> trackList = new HashMap<>();
		trackList.put("Bah Bah Blacksheep", "bah bah blacksheep have you any wool");
		trackList.put("The Itsy Bitsy Spider", "the itsy bitsy spider went up the water spout");
		trackList.put("Do You Know the Muffin Man", "do you know the muffin man, the muffin man, the muffin man");
		trackList.put("Mary Had a Little Lamb", "Mary had a little lamb, whose fleece was white as snow.");
		String song1 = trackList.get("Mary had a little lamb");
		System.out.println(song1);
		Set lyrics = trackList.entrySet();
		Iterator i = lyrics.iterator();
		System.out.println("Track: Lyrics");
		System.out.println("--------------");
		while(i.hasNext()){
			Map.Entry song = (Map.Entry)i.next();
			System.out.print(song.getKey() + ": ");
			System.out.println(song.getValue());
		}
		return trackList;
	}
}