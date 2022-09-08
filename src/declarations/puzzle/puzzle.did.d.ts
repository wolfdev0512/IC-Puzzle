import type { Principal } from '@dfinity/principal';
export type AccountIdentifier = string;
export interface ApproveRequest {
  'token' : TokenIdentifier,
  'subaccount' : [] | [SubAccount],
  'allowance' : Balance,
  'spender' : Principal,
}
export interface Asset {
  'contentType' : string,
  'payload' : Array<Array<number>>,
}
export type Balance = bigint;
export type BearerResponse = { 'ok' : AccountIdentifier } |
  { 'err' : CommonError };
export type CommonError = { 'InvalidToken' : TokenIdentifier } |
  { 'Other' : string };
export type FilePath = string;
export interface LocalStableState {
  'metadata' : Array<Metadata>,
  'tokens' : Array<[] | [Token]>,
  'isShuffled' : boolean,
}
export type Memo = Array<number>;
export interface Meta {
  'name' : string,
  'tags' : Array<Tag>,
  'description' : string,
  'filename' : FilePath,
}
export interface Metadata { 'ink' : string, 'back' : string, 'border' : string }
export type MetadataResponse = { 'ok' : Metadata__1 } |
  { 'err' : CommonError };
export type Metadata__1 = {
    'fungible' : {
      'decimals' : number,
      'metadata' : [] | [Array<number>],
      'name' : string,
      'symbol' : string,
    }
  } |
  { 'nonfungible' : { 'metadata' : [] | [Array<number>] } };
export interface PuzzleNFT {
  'allowance' : (arg_0: Request) => Promise<Response>,
  'approve' : (arg_0: ApproveRequest) => Promise<undefined>,
  'bearer' : (arg_0: TokenIdentifier) => Promise<BearerResponse>,
  'configureMetadata' : (arg_0: Array<Metadata>) => Promise<Result>,
  'getAll' : () => Promise<Array<Record>>,
  'getTokens' : () => Promise<Array<[TokenIndex, Metadata__1]>>,
  'greet' : (arg_0: string) => Promise<string>,
  'metadata' : (arg_0: TokenIdentifier) => Promise<MetadataResponse>,
  'mint' : (arg_0: User) => Promise<Result_2>,
  'readLedger' : () => Promise<Array<[] | [Token]>>,
  'readMeta' : () => Promise<Array<Metadata>>,
  'shuffleMetadata' : () => Promise<undefined>,
  'tokenId' : (arg_0: TokenIndex) => Promise<TokenIdentifier>,
  'tokens' : (arg_0: AccountIdentifier) => Promise<Result_1>,
  'tokensBackup' : () => Promise<LocalStableState>,
  'tokensRestore' : (arg_0: LocalStableState) => Promise<Result>,
  'transfer' : (arg_0: TransferRequest) => Promise<TransferResponse>,
  'upload' : (arg_0: Array<number>) => Promise<undefined>,
  'uploadFinalize' : (arg_0: string, arg_1: Meta) => Promise<Result>,
}
export interface Record { 'asset' : Asset, 'meta' : Meta }
export interface Request {
  'token' : TokenIdentifier,
  'owner' : User,
  'spender' : Principal,
}
export type Response = { 'ok' : Balance } |
  { 'err' : CommonError };
export type Result = { 'ok' : null } |
  { 'err' : string };
export type Result_1 = { 'ok' : Array<TokenIndex> } |
  { 'err' : CommonError };
export type Result_2 = { 'ok' : bigint } |
  { 'err' : string };
export type SubAccount = Array<number>;
export type Tag = string;
export interface Token {
  'owner' : AccountIdentifier,
  'createdAt' : bigint,
  'txId' : string,
}
export type TokenIdentifier = string;
export type TokenIndex = number;
export interface TransferRequest {
  'to' : User,
  'token' : TokenIdentifier,
  'notify' : boolean,
  'from' : User,
  'memo' : Memo,
  'subaccount' : [] | [SubAccount],
  'amount' : Balance,
}
export type TransferResponse = { 'ok' : Balance } |
  {
    'err' : { 'CannotNotify' : AccountIdentifier } |
      { 'InsufficientBalance' : null } |
      { 'InvalidToken' : TokenIdentifier } |
      { 'Rejected' : null } |
      { 'Unauthorized' : AccountIdentifier } |
      { 'Other' : string }
  };
export type User = { 'principal' : Principal } |
  { 'address' : AccountIdentifier };
export interface _SERVICE extends PuzzleNFT {}
