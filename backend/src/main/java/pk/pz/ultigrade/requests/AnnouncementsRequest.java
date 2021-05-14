package pk.pz.ultigrade.requests;

public class AnnouncementsRequest {
    private String title;
    private String contents;
    private AdditionalRequest additional;


    public AnnouncementsRequest() {}
    public AnnouncementsRequest(String title, String contents, AdditionalRequest additional) {
        this.title = title;
        this.contents = contents;
        this.additional = additional;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

    public AdditionalRequest getAdditional() {
        return additional;
    }

    public void setAdditional(AdditionalRequest additional) {
        this.additional = additional;
    }
}
