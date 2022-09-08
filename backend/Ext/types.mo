import Ext "mo:ext/Ext";

import Tokens "../Tokens";

module {

    public type State = {
        _Tokens : Tokens.Factory;
        cid     : Principal;
    };

    // DAB...
    public type Listing = {
        locked : ?Int;
        seller : Principal;
        price  : Nat64;
    };

};
