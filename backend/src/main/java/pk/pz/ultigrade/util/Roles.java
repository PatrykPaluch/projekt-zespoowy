package pk.pz.ultigrade.util;

public enum Roles {
    PUPIL(1, "pupil"),
    TEACHER(1, "teacher"),
    PARENT(1, "parent");


    private final int numVal;
    private final String name;

    private Roles(int numVal, String name){
        this.numVal = numVal;
        this.name = name;
    }

    public int getNumVal() {
        return numVal;
    }

    public String getName() {
        return name;
    }

    public static Roles fromNumber(int num) {
        return switch (num) {
            case 1 -> PUPIL;
            case 2 -> TEACHER;
            case 3 -> PARENT;
            default -> null;
        };
    }
    public static Roles fromName(String name) {
        return switch (name.toLowerCase()) {
            case "pupil" -> PUPIL;
            case "teacher" -> TEACHER;
            case "parent" -> PARENT;
            default -> null;
        };
    }
}
