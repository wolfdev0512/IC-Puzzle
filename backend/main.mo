import Assets "Assets";
import AssetTypes "Assets/types";
import Admins "Admins";
import AdminType "Admins/types";
import TokenTypes "Tokens/types";
import Tokens "Tokens";
import EXT "mo:ext/Ext";
import Ext "Ext";
import ExtTypes "Ext/types";
import Array "mo:base/Array";
import Nat16 "mo:base/Nat16";

import Result "mo:base/Result";

shared ({ caller = creator }) actor class PuzzleNFT(
    // This must be the canister's own principal. It sucks having to do this, but I don't know a better way to enable passing a self reference to a submodule in Motoko.
    cid         : Principal,
    canisterMeta: {
        supply      : Nat16;
        name        : Text;
    },
) = {

    private stable var stableAssets : [AssetTypes.Record] = [];
    private stable var stableAdmins : [Principal] = [creator];
    private stable var stableTokens : [?TokenTypes.Token] = Array.tabulate<?TokenTypes.Token>(Nat16.toNat(canisterMeta.supply), func (i) { null });
    private stable var stablePuzzle: [TokenTypes.Metadata] = [];
    private stable var stableShuffled = false;


    system func preupgrade() {
        // Preserve assets
        stableAssets := _Assets.toStable();

        // Preserve admins
        stableAdmins := _Admins.toStable();

        // Preserve token ledger
        let { tokens = x; metadata = y; isShuffled } = _Tokens.toStable();
        stableTokens := x;   
        stablePuzzle := y;
        stableShuffled := isShuffled;
    };
    
    // Test

    public query func greet(name : Text) : async Text {
      "Hello, " # name # "!";
    };

    //  ┌──────────┐
    //  │  Assets  │
    //  └──────────┘

    let _Admins = Admins.Admins({
        admins = stableAdmins;
    });

    let _Assets = Assets.Assets({
        _Admins;
        assets = stableAssets;
    });
    /* public shared ({ caller }) func get(bytes: [Blob]): async () { */
    /*     _Assets.upload(caller, bytes); */
    /* }; */

    public shared ({ caller }) func getAll(): async [AssetTypes.Record] {
        return _Assets.getManifest();
    };

    public shared ({ caller }) func upload(bytes: Blob): async () {
        _Assets.upload(caller, bytes);
    };

    public shared ({ caller }) func uploadFinalize(contentType: Text, meta: AssetTypes.Meta): async Result.Result<(), Text> {
        _Assets.uploadFinalize(caller, contentType, meta);
    };

    //  ┌──────────┐
    //  │  Tokens  │
    //  └──────────┘

    let _Tokens = Tokens.Factory({
        _Admins;
        _Assets;
        tokens      = stableTokens;
        metadata    = stablePuzzle;
        isShuffled  = stableShuffled;
        supply      = canisterMeta.supply;
        cid;
    });

    public shared func readLedger(): async [?TokenTypes.Token] {
        _Tokens.read(null);
    };

    public shared ({ caller }) func mint(to: EXT.User): async Result.Result<Nat, Text> {
        await _Tokens.mint(caller, to);
    };

    public shared ({ caller }) func configureMetadata(conf: [TokenTypes.Metadata]): async Result.Result<(), Text> {
        _Tokens.configureMetadata(caller, conf);
    };

    public query ({ caller }) func tokensBackup(): async TokenTypes.LocalStableState {
        _Tokens.backup(caller);
    };

    public shared ({ caller }) func tokensRestore(backup: TokenTypes.LocalStableState): async Result.Result<(), Text> {
        _Tokens.restore(caller, backup);
    };

    public shared ({ caller }) func shuffleMetadata(): async () {
        await _Tokens.shuffleMetadata(caller);
    };

    public query func readMeta(): async [TokenTypes.Metadata] {
        _Tokens.readMeta();
    };

    public query func getTokens():async [(EXT.TokenIndex, EXT.Common.Metadata)] {
        _Tokens.getTokens();
    };


    //  ┌───────┐
    //  │  EXT  │
    //  └───────┘

    let _Ext = Ext.make({
        _Tokens;
        cid;
    });

    /// Disabled
    public shared ({caller}) func allowance(request: EXT.Allowance.Request): async EXT.Allowance.Response {
        _Ext.allowance(caller, request);
    };

    /// Disabled
    public shared ({caller}) func approve(request: EXT.Allowance.ApproveRequest): async () {
        _Ext.approve(caller, request);
    };

    /// Returns the AccountIdentifier for a specific token
    public query func bearer(tokenId: EXT.TokenIdentifier): async EXT.NonFungible.BearerResponse {
        _Ext.bearer(tokenId);
    };
    
    /// Returns the metadata for a TokenIdentifier
    public query ({caller}) func metadata(tokenId: EXT.TokenIdentifier): async EXT.Common.MetadataResponse {
        _Ext.metadata(caller, tokenId);
    };

    /// Transfers ownership of a token
    public shared ({caller}) func transfer(request: EXT.Core.TransferRequest): async EXT.Core.TransferResponse {
        await _Ext.transfer(caller, request);
    };

    /// Get all tokens for an AccountIdentifier
    public query ({caller}) func tokens(accountId : EXT.AccountIdentifier): async Result.Result<[EXT.TokenIndex], EXT.CommonError> {
        _Ext.tokens(caller, accountId);
    };
    
    /// Converts TokenIndex to TokenIdentifier
    public query func tokenId(index: EXT.TokenIndex): async EXT.TokenIdentifier {
        _Ext.tokenId(cid, index);
    };
};
