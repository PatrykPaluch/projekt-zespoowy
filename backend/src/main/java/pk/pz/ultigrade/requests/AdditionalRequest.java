package pk.pz.ultigrade.requests;

import java.sql.Date;

public class AdditionalRequest {

    private Date date;
    private int idClass;

    public AdditionalRequest(){}

    public AdditionalRequest(Date date, int idClass) {
        this.date = date;
        this.idClass = idClass;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getIdClass() {
        return idClass;
    }

    public void setIdClass(int idClass) {
        this.idClass = idClass;
    }
}
