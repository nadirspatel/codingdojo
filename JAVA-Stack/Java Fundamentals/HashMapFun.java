import java.util.Set;
import java.util.HashMap;


public class HashMapFun {
    public static void main(String[] args) {
        // in diamond, it's: <KeyType, ValueType>
        HashMap<String, String> userMap = new HashMap<String, String>();
        userMap.put("nninja@codingdojo.com", "Nancy Ninja");
        userMap.put("ssamurai@codingdojo.com", "Sam Samurai");
        userMap.put("wwizard@codingdojo.com", "Walter Wizard");
        userMap.put("nadirs@codingdojo.com", "Nadir Shogun");

        String name = userMap.get("nninja@codingdojo.com");
        System.out.println("The full name is: " + name);

        // get the keys by using the keySet method
        Set<String> keys = userMap.keySet(); // returns set of keys 
        // Set in above is collection of unordered unique values
        for(String key : keys) {
            System.out.println(key);
            System.out.println(userMap.get(key));
        }
    }
}