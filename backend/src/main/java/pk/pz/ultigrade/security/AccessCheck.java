package pk.pz.ultigrade.security;

import org.springframework.security.core.Authentication;
import pk.pz.ultigrade.details.UserDetailsImpl;
import pk.pz.ultigrade.util.Roles;

/**
 * getMethods - returns true if Auth principal has permission to get specific resource
 * postMethods - returns true if Auth principal has permission to create new resource
 * putMethods - returns true if Auth principal has permission to update (put or patch) existing resource
 */
public class AccessCheck {

    private AccessCheck(){}


    public static boolean postUser(Authentication auth) {
        UserDetailsImpl userDetails = userDetails(auth);
        return userDetails != null && userDetails.isAdmin();
    }

    public static boolean putUser(Authentication auth) {
        UserDetailsImpl userDetails = userDetails(auth);
        return userDetails != null && userDetails.isAdmin();
    }


    // ====================================================================== PARENT
    public static boolean getParent(Authentication auth, int requestedParentId){
        UserDetailsImpl userDetails = userDetails(auth);
        if(userDetails == null)
            return false;

        if(isSelfOrAdmin(userDetails, requestedParentId))
            return true;

        Roles role = userDetails.getRoleEnum();

        if(role == Roles.STUDENT)
            return hasStudentAParent(userDetails, requestedParentId);

        if(role == Roles.TEACHER)
            return isTeacherSameClassStudentOfParent(userDetails, requestedParentId);

        // role == Roles.PARENT
        return false;
    }

    // ====================================================================== STUDENT
    public static boolean getStudent(Authentication auth, int requestedStudentId){
        UserDetailsImpl userDetails = userDetails(auth);
        if(userDetails == null)
            return false;

        if(isSelfOrAdmin(userDetails, requestedStudentId))
            return true;

        Roles role = userDetails.getRoleEnum();

        if(role == Roles.PARENT)
            return hasParentAChild(userDetails, requestedStudentId);

        if(role == Roles.TEACHER)
            return isTeacherSameClassStudent(userDetails, requestedStudentId);

        // role == Roles.STUDENT
        return false;
    }

    public static boolean getStudentGrades(Authentication auth, int requestedStudentId) {
        return getStudent(auth, requestedStudentId);
    }

    public static boolean postStudentGrades(Authentication auth, int requestedStudentId) {
        UserDetailsImpl userDetails = userDetails(auth);
        if(userDetails == null)
            return false;

        if(isSelfOrAdmin(userDetails, requestedStudentId))
            return true;

        Roles role = userDetails.getRoleEnum();

        if(role == Roles.TEACHER)
            return isTeacherSameClassStudent(userDetails, requestedStudentId);

        // role == Roles.STUDENT || role == Roles.PARENT
        return false;
    }

    public static boolean putStudentGrades(Authentication auth, int requestedStudentId) {
        return postStudentGrades(auth, requestedStudentId);
    }


    // ====================================================================== Grades
    public static boolean getTeacherSubjectGrades(Authentication auth, int requestedTeacherSubjectId) {
        UserDetailsImpl userDetails = userDetails(auth);
        if(userDetails == null)
            return false;

        if(userDetails.isAdmin())
            return true;


        Roles role = userDetails.getRoleEnum();

        if(role == Roles.TEACHER)
            return isTeacherInTeacherSubject(userDetails, requestedTeacherSubjectId);

        // role == Roles.STUDENT || role == Roles.PARENT
        return false;
    }

    // ====================================================================== Subjects
    public static boolean getTeacherSubject(Authentication auth, int requestedTeacherSubjectId) {
        UserDetailsImpl userDetails = userDetails(auth);
        if(userDetails == null)
            return false;

        if(userDetails.isAdmin())
            return true;

        return isTeacherInTeacherSubject(userDetails, requestedTeacherSubjectId);
    }

    // ====================================================================== Timetable
    public static boolean getTimetableForStudent(Authentication auth, int requestedTimetable){
        UserDetailsImpl userDetails = userDetails(auth);
        if(userDetails == null)
            return false;

        if(userDetails.isAdmin())
            return true;

        return userDetails.studentGetClass().getTimetable()
                .stream().anyMatch(tt -> tt.getId() == requestedTimetable);
    }

    public static boolean getTimetableForTeacher(Authentication auth, int requestedTimetable){
        UserDetailsImpl userDetails = userDetails(auth);
        if(userDetails == null)
            return false;

        if(userDetails.isAdmin())
            return true;

        return userDetails.teacherGetSubjects()
                .stream().anyMatch(
                        s -> s.getTimetable()
                                .stream().anyMatch(tt -> tt.getId() == requestedTimetable)
                );
    }

    // ====================================================================== Others
    public static boolean hasParentAChild(UserDetailsImpl userDetails, int childId){
        return userDetails.parentGetChildren()
                .stream().anyMatch(u -> u.getId() == childId);
    }

    public static boolean hasStudentAParent(UserDetailsImpl userDetails, int parentId){
        return userDetails.studentGetParents()
                .stream().anyMatch(u -> u.getId() == parentId);
    }

    public static boolean isTeacherSameClassStudent(UserDetailsImpl userDetails, int studentId){
        return userDetails.teacherGetSubjects()
                .stream()
                .flatMap(subjectsEntity -> subjectsEntity.getClasses().stream())
                .anyMatch(c -> c.getStudents().stream().anyMatch(s -> s.getIdUser() == studentId));
    }

    public static boolean isTeacherSameClassStudentOfParent(UserDetailsImpl userDetails, int parentId){
        return userDetails.teacherGetSubjects()
                .stream()
                .flatMap(subjectsEntity -> subjectsEntity.getClasses().stream())
                .anyMatch(c ->
                        c.getStudents().stream().anyMatch(s ->
                            s.getParents().stream().anyMatch(p -> p.getIdUser() == parentId)
                        )
                );
    }

    public static boolean isTeacherInTeacherSubject(UserDetailsImpl userDetails, int teacherSubjectId) {
        return userDetails.teacherGetSubjects()
                .stream().anyMatch(s -> s.getIdTeacherSubject() == teacherSubjectId);
    }


    // ====================================================================== UTILS
    public static UserDetailsImpl userDetails(Authentication auth){
        if (!auth.isAuthenticated())
            return null;

        Object principal = auth.getPrincipal();
        if(principal instanceof UserDetailsImpl)
            return (UserDetailsImpl) principal;

        return null;
    }

    public static boolean isSelfOrAdmin(UserDetailsImpl userDetails, int requestedUserId){
        return userDetails.getIdUser() == requestedUserId || userDetails.isAdmin();
    }

}
