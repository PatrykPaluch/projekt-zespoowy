package pk.pz.ultigrade.util;

import java.util.List;
import java.util.Random;

public class RandomUtils {
    private static final Random random = new Random();


    public static <T> T randomElement(T[] list){
        int randomIndex = random.nextInt(list.length);
        return list[randomIndex];
    }

    public static <T> T randomElement(List<T> list){
        int randomIndex = random.nextInt(list.size());
        return list.get(randomIndex);
    }

    public static int randomInt(int max){
        return randomInt(0, max);
    }
    public static int randomInt(int min, int max){
        return random.nextInt(max - min) + min;
    }

    public static float randomFloat(){
        return random.nextFloat();
    }
    public static float randomFloat(int max){
        return randomFloat(0, max);
    }
    public static float randomFloat(int min, int max){
        return random.nextFloat() * (max - min) + min;
    }

    private RandomUtils(){
    }

}
