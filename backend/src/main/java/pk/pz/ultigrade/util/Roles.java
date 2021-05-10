package pk.pz.ultigrade.util;

public enum Roles {
    STUDENT(1, "student"),
    TEACHER(2, "teacher"),
    PARENT(3, "parent"),
    ADMIN(4, "admin");


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
            case 1 -> STUDENT;
            case 2 -> TEACHER;
            case 3 -> PARENT;
            case 4 -> ADMIN;
            default -> null;
        };
    }
    public static Roles fromName(String name) {
        return switch (name.toLowerCase()) {
            case "student" -> STUDENT;
            case "teacher" -> TEACHER;
            case "parent" -> PARENT;
            case "admin" -> ADMIN;
            default -> null;
        };
    }
}
