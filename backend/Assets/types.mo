import Admins "../Admins";


module Assets {

    public type Tag = Text;
    
    public type FilePath = Text;

    public type State = {
        assets  : [Record];
        _Admins : Admins.Admins;
    };

    public type Asset = {
        contentType : Text;
        payload     : [Blob];
    };

    public type Record = {
        asset   : Asset;
        meta    : Meta;
    };

    public type Meta = {
        tags        : [Tag];
        filename    : FilePath;
        name        : Text;
        description : Text;
    };

}
