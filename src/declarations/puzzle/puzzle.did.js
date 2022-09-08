export const idlFactory = ({ IDL }) => {
  const TokenIdentifier = IDL.Text;
  const AccountIdentifier = IDL.Text;
  const User = IDL.Variant({
    'principal' : IDL.Principal,
    'address' : AccountIdentifier,
  });
  const Request = IDL.Record({
    'token' : TokenIdentifier,
    'owner' : User,
    'spender' : IDL.Principal,
  });
  const Balance = IDL.Nat;
  const CommonError = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const Response = IDL.Variant({ 'ok' : Balance, 'err' : CommonError });
  const SubAccount = IDL.Vec(IDL.Nat8);
  const ApproveRequest = IDL.Record({
    'token' : TokenIdentifier,
    'subaccount' : IDL.Opt(SubAccount),
    'allowance' : Balance,
    'spender' : IDL.Principal,
  });
  const BearerResponse = IDL.Variant({
    'ok' : AccountIdentifier,
    'err' : CommonError,
  });
  const Metadata = IDL.Record({
    'ink' : IDL.Text,
    'back' : IDL.Text,
    'border' : IDL.Text,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  const Asset = IDL.Record({
    'contentType' : IDL.Text,
    'payload' : IDL.Vec(IDL.Vec(IDL.Nat8)),
  });
  const Tag = IDL.Text;
  const FilePath = IDL.Text;
  const Meta = IDL.Record({
    'name' : IDL.Text,
    'tags' : IDL.Vec(Tag),
    'description' : IDL.Text,
    'filename' : FilePath,
  });
  const Record = IDL.Record({ 'asset' : Asset, 'meta' : Meta });
  const TokenIndex = IDL.Nat32;
  const Metadata__1 = IDL.Variant({
    'fungible' : IDL.Record({
      'decimals' : IDL.Nat8,
      'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
      'name' : IDL.Text,
      'symbol' : IDL.Text,
    }),
    'nonfungible' : IDL.Record({ 'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)) }),
  });
  const MetadataResponse = IDL.Variant({
    'ok' : Metadata__1,
    'err' : CommonError,
  });
  const Result_2 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const Token = IDL.Record({
    'owner' : AccountIdentifier,
    'createdAt' : IDL.Int,
    'txId' : IDL.Text,
  });
  const Result_1 = IDL.Variant({
    'ok' : IDL.Vec(TokenIndex),
    'err' : CommonError,
  });
  const LocalStableState = IDL.Record({
    'metadata' : IDL.Vec(Metadata),
    'tokens' : IDL.Vec(IDL.Opt(Token)),
    'isShuffled' : IDL.Bool,
  });
  const Memo = IDL.Vec(IDL.Nat8);
  const TransferRequest = IDL.Record({
    'to' : User,
    'token' : TokenIdentifier,
    'notify' : IDL.Bool,
    'from' : User,
    'memo' : Memo,
    'subaccount' : IDL.Opt(SubAccount),
    'amount' : Balance,
  });
  const TransferResponse = IDL.Variant({
    'ok' : Balance,
    'err' : IDL.Variant({
      'CannotNotify' : AccountIdentifier,
      'InsufficientBalance' : IDL.Null,
      'InvalidToken' : TokenIdentifier,
      'Rejected' : IDL.Null,
      'Unauthorized' : AccountIdentifier,
      'Other' : IDL.Text,
    }),
  });
  const PuzzleNFT = IDL.Service({
    'allowance' : IDL.Func([Request], [Response], []),
    'approve' : IDL.Func([ApproveRequest], [], []),
    'bearer' : IDL.Func([TokenIdentifier], [BearerResponse], ['query']),
    'configureMetadata' : IDL.Func([IDL.Vec(Metadata)], [Result], []),
    'getAll' : IDL.Func([], [IDL.Vec(Record)], []),
    'getTokens' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, Metadata__1))],
        ['query'],
      ),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'metadata' : IDL.Func([TokenIdentifier], [MetadataResponse], ['query']),
    'mint' : IDL.Func([User], [Result_2], []),
    'readLedger' : IDL.Func([], [IDL.Vec(IDL.Opt(Token))], []),
    'readMeta' : IDL.Func([], [IDL.Vec(Metadata)], ['query']),
    'shuffleMetadata' : IDL.Func([], [], []),
    'tokenId' : IDL.Func([TokenIndex], [TokenIdentifier], ['query']),
    'tokens' : IDL.Func([AccountIdentifier], [Result_1], ['query']),
    'tokensBackup' : IDL.Func([], [LocalStableState], ['query']),
    'tokensRestore' : IDL.Func([LocalStableState], [Result], []),
    'transfer' : IDL.Func([TransferRequest], [TransferResponse], []),
    'upload' : IDL.Func([IDL.Vec(IDL.Nat8)], [], []),
    'uploadFinalize' : IDL.Func([IDL.Text, Meta], [Result], []),
  });
  return PuzzleNFT;
};
export const init = ({ IDL }) => {
  return [
    IDL.Principal,
    IDL.Record({ 'name' : IDL.Text, 'supply' : IDL.Nat16 }),
  ];
};
