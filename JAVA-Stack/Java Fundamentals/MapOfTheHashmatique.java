import java.util.Set;
import java.util.HashMap;

// Create a trackList of type HashMap
// ● Add in at least 4 songs that are stored by title
// ● Pull out one of the songs by its track title
// ● Print out all the track names and lyrics in the format Track: Lyrics

public class MapOfTheHashmatique {
    public static void main(String[] args) {
        // in diamond, it's: <KeyType, ValueType>
        HashMap<String, String> userMap = new HashMap<String, String>();
        // Add in 4 songs stored by artist/title
        userMap.put("Baby Im A Star", "Honey you are my shining star, dont you go away");
        userMap.put("Ambitionz as a ridah", "Fucking kill all you muthafuckaz goddamn");
        userMap.put("Purple Rain", "My daddy used to abuse me so now I take drugs and die in elevator");
        userMap.put("Raspberry Beret", "I like girls that wear next to nothing it turns me on baby");

        String getOneSong = userMap.get("Purple Rain");
        System.out.println("Purple Rain song lyrics is: " + getOneSong + "\n\n");

        //Print out all the track names and lyrics in the format Track: Lyrics
        // get the keys by using the keySet method
        Set<String> keys = userMap.keySet(); // returns set of keys 
        // Set in above is collection of unordered unique values
        System.out.println("All the track names in format Track:Lyrics below:");
        for(String key : keys) {
            System.out.println(key); // print out the key
            System.out.println(userMap.get(key)); // print out the value
        }
    }
}