public class StringMan {

    // // First one
    public String trimAndConcat(String str1, String str2) {
        return str1.trim() + str2.trim();
    }

    // Second one
    public Integer getIndexOrNull(String str, char c) {
        Integer result = str.indexOf(c);
        if(result < 0) {
            return null;
        }
        return result;
    }

        // // Third one
        public Integer getIndexOrNull(String str, String subStr) {
            Integer result = str.indexOf(subStr);
            if(result < 0) {
                return null;
            }
            return result;
        }

        // Fourth one
        public String concatSubstring(String str1, int idx1, int idx2, String str2) {
            return str1.substring(idx1, idx2) + str2;
        }
    // end public class StringMan
}