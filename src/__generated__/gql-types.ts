export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  boardLists: ViewBoardsOutput;
  boardView: ViewBoardContentsOutput;
  cp_allProducts: Array<CP_Product>;
  cp_me: CP_MeOutput;
  cp_myProducts: Array<CP_Product>;
  cp_PayInfo: CP_PayOutput;
  cp_pays: Array<CP_Pay>;
  cp_PayUserLists: Array<CP_User>;
  cp_refreshToken: LoginOutput;
  getStudentListForCheck: Array<Student>;
  getVersion: ClientVersionsOutput;
  me: User;
  my_cp_institutions_q: Array<CP_Institution>;
  myHangStudents: HangStudentsOutput;
  refreshToken: LoginOutput;
  tagListGrade: TagsListMuOutput;
  tagListHangCombiFindAll: Array<TagListCombi>;
  tagSubFindAll: Array<TagListSub>;
  thisyearsQuery: DiThisyearsOutput;
  timeTablesQuery: DiTimetablesOutput;
  userList: UserListOutput;
  userSettingQuery: SettingOutput;
};


export type QueryboardListsArgs = {
  input: BoardsInput;
};


export type QueryboardViewArgs = {
  input: ViewBoardContentsInput;
};


export type Querycp_allProductsArgs = {
  id: Scalars['Int'];
};


export type Querycp_PayInfoArgs = {
  id: Scalars['Int'];
};


export type QuerygetStudentListForCheckArgs = {
  input: MyStudentsInput;
};


export type QuerytagListGradeArgs = {
  input: GradeTagsListInput;
};


export type QuerytagListHangCombiFindAllArgs = {
  input: TagsListHangCombiInput;
};


export type QuerytagSubFindAllArgs = {
  input: TagsListInput;
};


export type QuerytimeTablesQueryArgs = {
  input: DiTimetablesInput;
};

export type BoardsInput = {
  boardName?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
  schoolGrade?: InputMaybe<Array<UserSchoolGrade>>;
  tag?: InputMaybe<Scalars['String']>;
  writerNmae?: InputMaybe<Scalars['String']>;
};

export enum UserSchoolGrade {
  Ele = 'Ele',
  High = 'High',
  Middle = 'Middle',
  Nomal = 'Nomal'
}

export type ViewBoardsOutput = {
  __typename?: 'ViewBoardsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<Board>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type Board = {
  __typename?: 'Board';
  boardName: Scalars['String'];
  commentNum: Scalars['Int'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  hits: Scalars['Int'];
  id: Scalars['Float'];
  kind: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  recommend: Scalars['Int'];
  schoolGrade: UserSchoolGrade;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userid: Scalars['Int'];
  writerNmae: Scalars['String'];
};

export type ViewBoardContentsInput = {
  id: Scalars['Float'];
};

export type ViewBoardContentsOutput = {
  __typename?: 'ViewBoardContentsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<Board>;
};

export type CP_Product = {
  __typename?: 'CP_Product';
  cppay_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  desciption: Scalars['String'];
  founder_id: Scalars['Int'];
  id: Scalars['Float'];
  imgurl: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  qty: Scalars['Int'];
  seller_id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type CP_MeOutput = {
  __typename?: 'CP_MeOutput';
  id: Scalars['Int'];
  joinclasspay: CP_PaysObj;
  mainId: Scalars['String'];
  money: Scalars['Int'];
  name: Scalars['String'];
  number: Scalars['Int'];
  position: POSITION;
};

export type CP_PaysObj = {
  __typename?: 'CP_PaysObj';
  className: Scalars['String'];
  classNum: Scalars['Int'];
  classTh: Scalars['Int'];
  code: Scalars['String'];
  id: Scalars['Int'];
  imgurl: Scalars['String'];
  moneyUnit: Scalars['String'];
  schoolName: Scalars['String'];
  user_id: Scalars['Int'];
};

export enum POSITION {
  Parent = 'Parent',
  Student = 'Student',
  Teacher = 'Teacher'
}

export type CP_PayOutput = {
  __typename?: 'CP_PayOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<CP_Pay>;
};

export type CP_Pay = {
  __typename?: 'CP_Pay';
  className: Scalars['String'];
  classNum: Scalars['Int'];
  classTh: Scalars['Int'];
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  imgurl: Scalars['String'];
  isTrade: Scalars['Boolean'];
  moneyUnit: Scalars['String'];
  numberOfDigits: Scalars['Int'];
  schoolName: Scalars['String'];
  stopProduce: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  user: Array<CP_User>;
  user_id: Scalars['Float'];
};

export type CP_User = {
  __typename?: 'CP_User';
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  joinclasspay: CP_Pay;
  madeby_userid: Scalars['Int'];
  mainId: Scalars['String'];
  money: Scalars['Int'];
  name: Scalars['String'];
  number: Scalars['Int'];
  password: Scalars['String'];
  position: POSITION;
  updatedAt: Scalars['DateTime'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type MyStudentsInput = {
  thisYear: Scalars['Int'];
};

export type Student = {
  __typename?: 'Student';
  address: Scalars['String'];
  classid: Scalars['Int'];
  className: Scalars['String'];
  createdAt: Scalars['DateTime'];
  gen: Scalars['String'];
  health: Scalars['String'];
  id: Scalars['Float'];
  memo: Scalars['String'];
  name: Scalars['String'];
  number: Scalars['Int'];
  thisYear: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userid: Scalars['Int'];
};

export type ClientVersionsOutput = {
  __typename?: 'ClientVersionsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  version?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  accToken?: Maybe<Scalars['String']>;
  canNickEdit: Scalars['Boolean'];
  changChe: Array<ChangChe>;
  countCombi: Scalars['Float'];
  countHang: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  dailyQueryHit: Scalars['Int'];
  email: Scalars['String'];
  fullSentence: Array<FullSentence>;
  hang: Array<Hang>;
  hangExpDate: Scalars['String'];
  id: Scalars['Float'];
  isFirst: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['String']>;
  mainId: Scalars['String'];
  memberGrade: MemberGrade;
  nickname: Scalars['String'];
  password: Scalars['String'];
  pdfExpDate?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  role: UserRole;
  schoolGrade: UserSchoolGrade;
  shrFullNum: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  uuid?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};

export type ChangChe = {
  __typename?: 'ChangChe';
  changUserCount: Array<ChangUserCount>;
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  kind: Scalars['String'];
  mark: Scalars['Float'];
  recommend_count: Scalars['Int'];
  schoolGrade: UserSchoolGrade;
  sentence: Scalars['String'];
  study_rank: Scalars['String'];
  subTag: Scalars['String'];
  sumPerson: Scalars['Int'];
  sumPoint: Scalars['Int'];
  tag: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['Int']>;
};

export type ChangUserCount = {
  __typename?: 'ChangUserCount';
  changChe: ChangChe;
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  hang_id: Scalars['Int'];
  id: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user_id: Scalars['Int'];
};

export type FullSentence = {
  __typename?: 'FullSentence';
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  date: Scalars['Int'];
  fullSen: Scalars['String'];
  fullSenExtra: Scalars['String'];
  fullsentencelists: Array<FullSentenceList>;
  id: Scalars['Float'];
  mark: Scalars['Float'];
  month: Scalars['Int'];
  schoolGrade: UserSchoolGrade;
  studyRankTotal: Scalars['String'];
  sumPerson: Scalars['Int'];
  sumPoint: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  user_id: Scalars['Int'];
  year: Scalars['Int'];
};

export type FullSentenceList = {
  __typename?: 'FullSentenceList';
  createdAt: Scalars['DateTime'];
  fullSen_id: Scalars['Int'];
  fullsentence: FullSentence;
  id: Scalars['Float'];
  kind: Scalars['String'];
  tag: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Hang = {
  __typename?: 'Hang';
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  hangUserCount: Array<HangUserCount>;
  id: Scalars['Float'];
  isMadeByAdmin: Scalars['Boolean'];
  kind: Scalars['String'];
  mark: Scalars['Float'];
  recommend_count: Scalars['Int'];
  schoolGrade: UserSchoolGrade;
  sentence: Scalars['String'];
  study_rank: Scalars['String'];
  sumPerson: Scalars['Int'];
  sumPoint: Scalars['Float'];
  tag: Scalars['String'];
  tagGroup: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['Int']>;
};

export type HangUserCount = {
  __typename?: 'HangUserCount';
  count: Scalars['Int'];
  hang: Hang;
  hang_id: Scalars['Int'];
  id: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user_id: Scalars['Int'];
};

export enum MemberGrade {
  Before = 'Before',
  PdfCertified = 'PdfCertified',
  Regular = 'Regular',
  Stoped = 'Stoped',
  Withdraw = 'Withdraw'
}

export enum UserRole {
  Admin = 'Admin',
  Client = 'Client',
  Company = 'Company',
  Manager = 'Manager'
}

export type CP_Institution = {
  __typename?: 'CP_Institution';
  cppay_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  desciption: Scalars['String'];
  id: Scalars['Float'];
  insti_name: Scalars['String'];
  instiPermission: Array<CP_InstiPermission>;
  th: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type CP_InstiPermission = {
  __typename?: 'CP_InstiPermission';
  cppay_id: Scalars['Int'];
  desciption: Scalars['String'];
  id: Scalars['Float'];
  institution: CP_Institution;
  permissionName: CP_INSTI_PERMISSION;
  th: Scalars['Int'];
};

export enum CP_INSTI_PERMISSION {
  BankDeleteMoney = 'BankDeleteMoney',
  BankIssueMoney = 'BankIssueMoney',
  BankPayIncome = 'BankPayIncome',
  BankSendMoney = 'BankSendMoney',
  FairTradeCheck = 'FairTradeCheck'
}

export type HangStudentsOutput = {
  __typename?: 'HangStudentsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<HangStudent>>;
};

export type HangStudent = {
  __typename?: 'HangStudent';
  changSen: Scalars['String'];
  createdAt: Scalars['DateTime'];
  fullSen: Scalars['String'];
  id: Scalars['Float'];
  idList: Scalars['String'];
  mark: Scalars['Float'];
  name: Scalars['String'];
  number: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userid: Scalars['Int'];
};

export type GradeTagsListInput = {
  hangMenuMode?: InputMaybe<HangMenuMode>;
  schoolGrade?: InputMaybe<UserSchoolGrade>;
};

export enum HangMenuMode {
  ChangChe = 'ChangChe',
  Combi = 'Combi',
  CombiHigh = 'CombiHigh',
  Ele = 'Ele',
  High = 'High',
  Mid = 'Mid',
  ShareEle = 'ShareEle',
  ShareMid = 'ShareMid'
}

export type TagsListMuOutput = {
  __typename?: 'TagsListMuOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<tagListObj>;
  schoolGrade: UserSchoolGrade;
};

export type tagListObj = {
  __typename?: 'tagListObj';
  art?: Maybe<Array<TagList>>;
  auto?: Maybe<Array<TagList>>;
  career?: Maybe<Array<TagList>>;
  club?: Maybe<Array<TagList>>;
  per?: Maybe<Array<TagList>>;
  service?: Maybe<Array<TagList>>;
  study?: Maybe<Array<TagList>>;
};

export type TagList = {
  __typename?: 'TagList';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  hangMenuMode: HangMenuMode;
  id: Scalars['Float'];
  kind: Scalars['String'];
  schoolGrade: UserSchoolGrade;
  tag: Scalars['String'];
  th: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userid?: Maybe<Scalars['Int']>;
};

export type TagsListHangCombiInput = {
  hangMenuMode?: InputMaybe<HangMenuMode>;
  kind?: InputMaybe<Scalars['String']>;
  schoolGrade?: InputMaybe<UserSchoolGrade>;
  subKind?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Scalars['String']>;
};

export type TagListCombi = {
  __typename?: 'TagListCombi';
  hangMenuMode: HangMenuMode;
  id: Scalars['Float'];
  kind: Scalars['String'];
  schoolGrade: UserSchoolGrade;
  subKind: Scalars['String'];
  subTag: Scalars['String'];
  tag: Scalars['String'];
  th: Scalars['Int'];
};

export type TagsListInput = {
  hangMenuMode?: InputMaybe<HangMenuMode>;
  kind?: InputMaybe<Scalars['String']>;
  schoolGrade?: InputMaybe<UserSchoolGrade>;
  tag?: InputMaybe<Scalars['String']>;
};

export type TagListSub = {
  __typename?: 'TagListSub';
  hangMenuMode: HangMenuMode;
  id: Scalars['Float'];
  kind: Scalars['String'];
  schoolGrade: UserSchoolGrade;
  subTag: Scalars['String'];
  tag: Scalars['String'];
  th: Scalars['Int'];
};

export type DiThisyearsOutput = {
  __typename?: 'DiThisyearsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<DiThisYear>>;
};

export type DiThisYear = {
  __typename?: 'DiThisYear';
  id: Scalars['Float'];
  thisYear: Scalars['Int'];
  userid: Scalars['Int'];
};

export type DiTimetablesInput = {
  isOnlyFirst?: InputMaybe<Scalars['Boolean']>;
  thisYear?: Scalars['Int'];
};

export type DiTimetablesOutput = {
  __typename?: 'DiTimetablesOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<DiTimetable>>;
};

export type DiTimetable = {
  __typename?: 'DiTimetable';
  className: Scalars['String'];
  fifFri: Scalars['String'];
  fifMon: Scalars['String'];
  fifThu: Scalars['String'];
  fifTue: Scalars['String'];
  fifWed: Scalars['String'];
  firFri: Scalars['String'];
  firMon: Scalars['String'];
  firThu: Scalars['String'];
  firTue: Scalars['String'];
  firWed: Scalars['String'];
  fouFri: Scalars['String'];
  fouMon: Scalars['String'];
  fouThu: Scalars['String'];
  fouTue: Scalars['String'];
  fouWed: Scalars['String'];
  id: Scalars['Float'];
  isMain: Scalars['Boolean'];
  secFri: Scalars['String'];
  secMon: Scalars['String'];
  secThu: Scalars['String'];
  secTue: Scalars['String'];
  secWed: Scalars['String'];
  sevFri: Scalars['String'];
  sevMon: Scalars['String'];
  sevThu: Scalars['String'];
  sevTue: Scalars['String'];
  sevWed: Scalars['String'];
  sixFri: Scalars['String'];
  sixMon: Scalars['String'];
  sixThu: Scalars['String'];
  sixTue: Scalars['String'];
  sixWed: Scalars['String'];
  thiFri: Scalars['String'];
  thiMon: Scalars['String'];
  thisYear: Scalars['Int'];
  thiThu: Scalars['String'];
  thiTue: Scalars['String'];
  thiWed: Scalars['String'];
  userid: Scalars['Int'];
};

export type UserListOutput = {
  __typename?: 'UserListOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  userNum?: Maybe<Scalars['Float']>;
};

export type SettingOutput = {
  __typename?: 'SettingOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<Setting>;
};

export type Setting = {
  __typename?: 'Setting';
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  isHomeroom: Scalars['Boolean'];
  isPeAfter: Scalars['Boolean'];
  isPeMax: Scalars['Int'];
  isPeZero: Scalars['Boolean'];
  isTTSlice: Scalars['Boolean'];
  isTTSubject: Scalars['Boolean'];
  peAfter: Scalars['String'];
  peZero: Scalars['String'];
  thisYear: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userid: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activatePopup: PopupsOutput;
  addHangCombi: HangCombiOutput;
  addHangCombiTag: HangCombiOutput;
  addStClass: MyStClassesOutput;
  addStudent: MyStudentsOutput;
  adminDeleteFullHang: CoreOutput;
  adminFindUserByMainId: AdminFindUserOutput;
  adminFullHangById: FullHangOutput;
  adminFullHangEdit: CoreOutput;
  adminFullHangsConfirm: FullHangListOutput;
  adminFullHangsList: AdminFullHangListOutput;
  adminFullHangTempDel: CoreOutput;
  adminUserConfirm: UserListOutput;
  allChangChes: ChangChesOutput;
  allCombi: AllHangCombisOutput;
  allFullsentences: FullsentencesOutput;
  allPopup: PopupsOutput;
  boardListsMu: ViewBoardsOutput;
  checkHangPassword: BasicOutput;
  checkPossibleId: CheckPossibleIdOutput;
  checkPossibleNickname: CheckPossibleIdOutput;
  confirmPassword: VerifyEmailOutput;
  cp_buyingTrade: CoreOutput;
  cp_cp_getMoneySupply: CP_MoneyOutput;
  cp_CreateClassPay: CP_PayOutput;
  cp_createProduct: CoreOutput;
  cp_CreateStudents: CP_CheckPossibleIsdOutput;
  cp_CreateTeacher: CoreOutput;
  cp_DeleteClassPay: CoreOutput;
  cp_deleteProduct: CoreOutput;
  cp_deleteStudent: CoreOutput;
  cp_editProfile: CoreOutput;
  cp_getBuyTmpTrade: CP_TradeTmpCodeOutput;
  cp_insti_deleteMoney: CoreOutput;
  cp_insti_issueMoney: CoreOutput;
  cp_insti_sendMoney_oneToMany: CoreOutput;
  cp_login: LoginOutput;
  cp_modifyProfile: CoreOutput;
  cp_modifyStudent: CoreOutput;
  cp_MyBankBooksMonth: Array<CP_BankBook>;
  cp_MyBillsMonth: Array<CP_Bill>;
  cp_PayPossibleName: CoreOutput;
  cp_sellingStart: CP_TradeTmpCodeOutput;
  cp_studentsPossibleIds: CP_CheckPossibleIsdOutput;
  cp_updateProduct: CoreOutput;
  cp_userProfile: CP_SomeProfileOutput;
  createAccount: CreateAccountOutput;
  createAttendChecks: StAttendChecksOutput;
  createBoard: BoardCoreOutPut;
  createChangChe: ChangCheCreateOutput;
  createChecks: StChecksOutput;
  createCheckTitle: StCheckCreateTitlesOutput;
  createComment: ViewCommentsOutput;
  createDiClasses: DiClassesOutput;
  createFullChangChe: CoreOutput;
  createFullHang: CreateFullsentenceOutput;
  createFullSentence: CreateFullsentenceOutput;
  createHang: CreateHangOutput;
  createHangCombiCount: CreateHangCountOutput;
  createHangCount: CreateHangCountOutput;
  createHangMark: CreateHangMarkOutput;
  createHangPayment: CreatePaymentOutput;
  createHangStudents: HangStudentsOutput;
  createMemo: MemoOutput;
  createModifySen: HangOneOutput;
  createPopup: PopupOutput;
  createPopupClick: PopupOutput;
  createServerChangChes: CreateServeralChanChesOutput;
  createServerCombis: CreateServeralCombisOutput;
  createServerHangs: CreateServeralHangsOutput;
  createStCheckView: WeeklyStCheckViewsOutput;
  createStudents: MyStudentsOutput;
  createTag: CreateTagOutput;
  createThisyear: DiThisyearsOutput;
  createTimetable: DiTimetablesOutput;
  createWork: WorkOutput;
  delAttendCheck: StAttendChecksOutput;
  delChecks: CoreOutput;
  delCheckTitle: StCheckTitlesOutput;
  deleteBoardByPassword: CoreOutput;
  deleteBoardContent: BoardCoreOutPut;
  deleteChangChe: BasicOutput;
  deleteComment: ViewCommentsOutput;
  deleteFullsentence: BasicOutput;
  deleteHang: DeleteHangOutput;
  deleteHangCombiTag: HangCombiOutput;
  deleteStClass: MyStClassesOutput;
  deleteStudent: MyStudentsOutput;
  delOneClassStudent: MyStudentsOutput;
  delStCheckView: WeeklyStCheckViewsOutput;
  editHang: EditHangOutput;
  editProfile: EditProfileOutput;
  findStcrawlById: Array<StudentRecord>;
  findUserId: UserIdHintOutput;
  getChangChes: FullChangsOutput;
  getFullHangs: FullHangsOutput;
  hangById: HangOneOutput;
  hangCombiBoxCountUp: CoreOutput;
  hangCountDown: BasicOutput;
  hangMarkCopy: HangMarkCopyOutput;
  hangs: HangsOutput;
  hangsMid: HangsOutput;
  individual_sendMoney: CoreOutput;
  initPayment: InitPaymentOutput;
  login: LoginOutput;
  modifyBoardContent: BoardCoreOutPut;
  modifySeveralStudents: MyStudentsOutput;
  monthlyDiClasses: DiClassesOutput;
  monthlyMemos: WeeklyMemosOutput;
  monthlyWorks: WeeklyWorksOutput;
  my_cp_institutions: Array<CP_Institution>;
  myAttendChecks: StAttendChecksOutput;
  myChecks: StChecksOutput;
  myChecksByTitleId: StChecksOutput;
  myCheckTitle: StCheckTitlesOutput;
  myHangStudentsMu: HangStudentsOutput;
  myMark: MyHangMarkOutput;
  myOneClassStudents: MyStudentsOutput;
  myStCheckView: WeeklyStCheckViewsOutput;
  myStClasses: MyStClassesOutput;
  myStudents: MyStudentsOutput;
  paymentConfirm: CoreOutput;
  refreshTokenMu: LoginOutput;
  resetHangCount: BasicOutput;
  resetHangOneStudents: BasicOutput;
  resetHangStudents: BasicOutput;
  resetPassword: CoreOutput;
  restoreModifySentence: HangModifySenOutput;
  sendFindPasswordEmail: VerifyEmailOutput;
  setIsFirst: CoreOutput;
  tagListGradeMu: TagsListMuOutput;
  testConfirm: CoreOutput;
  testSubPush: CoreOutput;
  thisyears: DiThisyearsOutput;
  timeTables: DiTimetablesOutput;
  todayDiClasses: DiClassesOutput;
  todayMemo: MemoOutput;
  todayWork: WorkOutput;
  updateHangCombi: HangCombiOutput;
  updateHangStudent: HangStudentOneOutput;
  updatePopup: PopupOutput;
  updateSetting: SettingOutput;
  updateStClass: MyStClassesOutput;
  updateStudent: MyStudentsOutput;
  userExit: VerifyEmailOutput;
  userProfileIn: UserProfileInOutput;
  userSetting: SettingOutput;
  viewBoardContents: ViewBoardContentsOutput;
  viewComments: ViewCommentsOutput;
  weeklyDiClasses: DiClassesOutput;
  weeklyMemos: WeeklyMemosOutput;
  weeklyStCheckView: WeeklyStCheckViewsOutput;
  weeklyWorks: WeeklyWorksOutput;
};


export type MutationactivatePopupArgs = {
  input: ActivePopupInput;
};


export type MutationaddHangCombiArgs = {
  input: AddeHangCombiInput;
};


export type MutationaddHangCombiTagArgs = {
  input: AddHangCombiTagInput;
};


export type MutationaddStClassArgs = {
  input: CreateStClassesInput;
};


export type MutationaddStudentArgs = {
  input: AddStudentInput;
};


export type MutationadminDeleteFullHangArgs = {
  input: IdOnlyInput;
};


export type MutationadminFindUserByMainIdArgs = {
  input: SetUserPasswordInput;
};


export type MutationadminFullHangByIdArgs = {
  input: IdOnlyInput;
};


export type MutationadminFullHangEditArgs = {
  input: AdminFullHangEditInput;
};


export type MutationadminFullHangsConfirmArgs = {
  input: AdminFullHangConfirmInput;
};


export type MutationadminFullHangsListArgs = {
  input: AdminFullHangsInput;
};


export type MutationadminFullHangTempDelArgs = {
  input: IdOnlyInput;
};


export type MutationadminUserConfirmArgs = {
  input: AdminUserConfirmInput;
};


export type MutationallChangChesArgs = {
  input: ChangChesInput;
};


export type MutationallCombiArgs = {
  input: AllHangCombiInput;
};


export type MutationallFullsentencesArgs = {
  input: FullsentencesInput;
};


export type MutationallPopupArgs = {
  input: AllPopupInput;
};


export type MutationboardListsMuArgs = {
  input: BoardsInput;
};


export type MutationcheckHangPasswordArgs = {
  input: HangPassInput;
};


export type MutationcheckPossibleIdArgs = {
  input: CheckPossibleIdInput;
};


export type MutationcheckPossibleNicknameArgs = {
  input: CheckPossibleNicknameInput;
};


export type MutationconfirmPasswordArgs = {
  input: ConfirmPasswordInput;
};


export type Mutationcp_buyingTradeArgs = {
  input: CP_GetTradeTmpCodeInput;
};


export type Mutationcp_CreateClassPayArgs = {
  input: CP_CreateClassPayInput;
};


export type Mutationcp_createProductArgs = {
  input: CP_CreateProductIdInput;
};


export type Mutationcp_CreateStudentsArgs = {
  input: CreateCpStudentsInput;
};


export type Mutationcp_CreateTeacherArgs = {
  input: CreateCpTeacherInput;
};


export type Mutationcp_DeleteClassPayArgs = {
  input: IdOnlyInput;
};


export type Mutationcp_deleteProductArgs = {
  id: Scalars['Int'];
};


export type Mutationcp_deleteStudentArgs = {
  input: IdOnlyInput;
};


export type Mutationcp_editProfileArgs = {
  input: CP_EditProfileInput;
};


export type Mutationcp_getBuyTmpTradeArgs = {
  input: CP_GetTradeTmpCodeInput;
};


export type Mutationcp_insti_deleteMoneyArgs = {
  input: CP_InstiAcitveTeacherIssueMoneyInput;
};


export type Mutationcp_insti_issueMoneyArgs = {
  input: CP_InstiAcitveTeacherIssueMoneyInput;
};


export type Mutationcp_insti_sendMoney_oneToManyArgs = {
  input: CP_InstiBankServeralSendMoneyOneToManyInput;
};


export type Mutationcp_loginArgs = {
  input: CP_LoginInput;
};


export type Mutationcp_modifyProfileArgs = {
  input: ModifyCpProfileInput;
};


export type Mutationcp_modifyStudentArgs = {
  input: ModifyCpStudentsInput;
};


export type Mutationcp_MyBankBooksMonthArgs = {
  input: YearMonthInput;
};


export type Mutationcp_MyBillsMonthArgs = {
  input: YearMonthInput;
};


export type Mutationcp_PayPossibleNameArgs = {
  input: CP_PayPossibleNameInput;
};


export type Mutationcp_sellingStartArgs = {
  input: CP_BuyProductIdInput;
};


export type Mutationcp_studentsPossibleIdsArgs = {
  input: CheckPossibleIdsInput;
};


export type Mutationcp_updateProductArgs = {
  input: CP_UpdateProductIdInput;
};


export type Mutationcp_userProfileArgs = {
  input: CP_UserProfileInInput;
};


export type MutationcreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationcreateAttendChecksArgs = {
  input: CreateStAttendChecksInput;
};


export type MutationcreateBoardArgs = {
  input: CreateBoardInput;
};


export type MutationcreateChangCheArgs = {
  input: ChangCheCreateInput;
};


export type MutationcreateChecksArgs = {
  input: CreateStChecksInput;
};


export type MutationcreateCheckTitleArgs = {
  input: CreateStCheckTitlesInput;
};


export type MutationcreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationcreateDiClassesArgs = {
  input: CreateDiClassesInput;
};


export type MutationcreateFullChangCheArgs = {
  input: CreateFullChangCheInput;
};


export type MutationcreateFullHangArgs = {
  input: CreateFullHangInput;
};


export type MutationcreateFullSentenceArgs = {
  input: CreateFullsentenceInput;
};


export type MutationcreateHangArgs = {
  input: CreateHangInput;
};


export type MutationcreateHangCombiCountArgs = {
  input: CreateHangCountInput;
};


export type MutationcreateHangCountArgs = {
  input: CreateHangCountInput;
};


export type MutationcreateHangMarkArgs = {
  input: CreateHangMarkInput;
};


export type MutationcreateHangStudentsArgs = {
  input: CreateServeralHangStudentsInput;
};


export type MutationcreateMemoArgs = {
  input: CreateMemoInput;
};


export type MutationcreateModifySenArgs = {
  input: CreateHangModifySenInput;
};


export type MutationcreatePopupArgs = {
  input: CreatePopupInput;
};


export type MutationcreatePopupClickArgs = {
  input: CreatePopupClickInput;
};


export type MutationcreateServerChangChesArgs = {
  input: CreateServeralChanChesInput;
};


export type MutationcreateServerCombisArgs = {
  input: CreateServeralCombisInput;
};


export type MutationcreateServerHangsArgs = {
  input: CreateServeralHangsInput;
};


export type MutationcreateStCheckViewArgs = {
  input: CreateStCheckViewInput;
};


export type MutationcreateStudentsArgs = {
  input: CreateStudentsInput;
};


export type MutationcreateTagArgs = {
  input: CreateTagInput;
};


export type MutationcreateThisyearArgs = {
  input: CreateDiThisyearInput;
};


export type MutationcreateTimetableArgs = {
  input: CreateDitimetableInput;
};


export type MutationcreateWorkArgs = {
  input: CreateWorkInput;
};


export type MutationdelAttendCheckArgs = {
  input: DeleteStAttendCheckInput;
};


export type MutationdelChecksArgs = {
  input: Scalars['Float'];
};


export type MutationdelCheckTitleArgs = {
  input: DeleteStCheckTitleInput;
};


export type MutationdeleteBoardByPasswordArgs = {
  input: DeleteBoardByPasswordInput;
};


export type MutationdeleteBoardContentArgs = {
  input: ViewBoardContentsInput;
};


export type MutationdeleteChangCheArgs = {
  input: DeleteHangInput;
};


export type MutationdeleteCommentArgs = {
  input: DeleteCommentInput;
};


export type MutationdeleteFullsentenceArgs = {
  input: IdOnlyInput;
};


export type MutationdeleteHangArgs = {
  input: DeleteHangInput;
};


export type MutationdeleteHangCombiTagArgs = {
  input: DeleteHangCombiTagInput;
};


export type MutationdeleteStClassArgs = {
  input: DelClassesInput;
};


export type MutationdeleteStudentArgs = {
  input: DelStudentInput;
};


export type MutationdelOneClassStudentArgs = {
  input: DelStudentsInput;
};


export type MutationdelStCheckViewArgs = {
  input: DeleteStCheckViewInput;
};


export type MutationeditHangArgs = {
  input: EditHangInput;
};


export type MutationeditProfileArgs = {
  input: EditProfileInput;
};


export type MutationfindStcrawlByIdArgs = {
  input: IdOnlyInput;
};


export type MutationfindUserIdArgs = {
  input: FindUserIdInput;
};


export type MutationgetChangChesArgs = {
  input: FullChangChesInput;
};


export type MutationgetFullHangsArgs = {
  input: FullHangsInput;
};


export type MutationhangByIdArgs = {
  input: IdOnlyInput;
};


export type MutationhangCombiBoxCountUpArgs = {
  input: CreateHangCountInput;
};


export type MutationhangCountDownArgs = {
  input: CreateHangCountInput;
};


export type MutationhangsArgs = {
  input: HangsInput;
};


export type MutationhangsMidArgs = {
  input: HangsInput;
};


export type Mutationindividual_sendMoneyArgs = {
  input: CP_SendMoneyIndivisualInput;
};


export type MutationloginArgs = {
  input: LoginInput;
};


export type MutationmodifyBoardContentArgs = {
  input: EditBoardsInput;
};


export type MutationmodifySeveralStudentsArgs = {
  input: ModifySeveralStudentInput;
};


export type MutationmonthlyDiClassesArgs = {
  input: MonthlyMemosInput;
};


export type MutationmonthlyMemosArgs = {
  input: MonthlyMemosInput;
};


export type MutationmonthlyWorksArgs = {
  input: MonthlyWorksInput;
};


export type MutationmyAttendChecksArgs = {
  input: StAttendChecksInput;
};


export type MutationmyChecksArgs = {
  input: StChecksInput;
};


export type MutationmyChecksByTitleIdArgs = {
  input: StChecksByTitleIdArrInput;
};


export type MutationmyCheckTitleArgs = {
  input: StCheckTitlesQueryInput;
};


export type MutationmyMarkArgs = {
  input: MyHangMarkInput;
};


export type MutationmyOneClassStudentsArgs = {
  input: MyOneClassStudentsInput;
};


export type MutationmyStCheckViewArgs = {
  input: MyStCheckHomeViewsInput;
};


export type MutationmyStClassesArgs = {
  input: MyStClassesInput;
};


export type MutationmyStudentsArgs = {
  input: MyStudentsInput;
};


export type MutationpaymentConfirmArgs = {
  input: ConfirmPaymentInput;
};


export type MutationresetHangCountArgs = {
  input: ResetHangCountInput;
};


export type MutationresetHangOneStudentsArgs = {
  input: IdOnlyInput;
};


export type MutationresetPasswordArgs = {
  input: SetUserPasswordInput;
};


export type MutationrestoreModifySentenceArgs = {
  input: RestoreModifySentenceInput;
};


export type MutationsendFindPasswordEmailArgs = {
  input: FindPasswordEmailInput;
};


export type MutationsetIsFirstArgs = {
  input: SetIsFirstInput;
};


export type MutationtagListGradeMuArgs = {
  input: GradeTagsListInput;
};


export type MutationtestConfirmArgs = {
  input: TestmPaymentInput;
};


export type MutationtimeTablesArgs = {
  input: DiTimetablesInput;
};


export type MutationtodayDiClassesArgs = {
  input: DiClassesInput;
};


export type MutationtodayMemoArgs = {
  input: MemoInput;
};


export type MutationtodayWorkArgs = {
  input: WorkInput;
};


export type MutationupdateHangCombiArgs = {
  input: UpdateHangCombiInput;
};


export type MutationupdateHangStudentArgs = {
  input: UpdateHangStudentInput;
};


export type MutationupdatePopupArgs = {
  input: UpdatePopupInput;
};


export type MutationupdateSettingArgs = {
  input: UpdateSettingInput;
};


export type MutationupdateStClassArgs = {
  input: EditStClassesInput;
};


export type MutationupdateStudentArgs = {
  input: UpdateStudentInput;
};


export type MutationuserExitArgs = {
  input: UserExitInput;
};


export type MutationuserProfileInArgs = {
  input: UserProfileInInput;
};


export type MutationviewBoardContentsArgs = {
  input: ViewBoardContentsInput;
};


export type MutationviewCommentsArgs = {
  input: ViewCommentsInput;
};


export type MutationweeklyDiClassesArgs = {
  input: WeeklyMemosInput;
};


export type MutationweeklyMemosArgs = {
  input: WeeklyMemosInput;
};


export type MutationweeklyStCheckViewArgs = {
  input: WeeklyStCheckHomeViewsInput;
};


export type MutationweeklyWorksArgs = {
  input: WeeklyWorksInput;
};

export type ActivePopupInput = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  serviceName?: InputMaybe<ServiceName>;
};

export enum ServiceName {
  Diary = 'Diary',
  Hangbal = 'Hangbal',
  HangStudent = 'HangStudent',
  Nomal = 'Nomal'
}

export type PopupsOutput = {
  __typename?: 'PopupsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<Popup>>;
};

export type Popup = {
  __typename?: 'Popup';
  content: Scalars['String'];
  distance: Scalars['Int'];
  endDate: Scalars['DateTime'];
  height: Scalars['Int'];
  id: Scalars['Float'];
  isRepeat: Scalars['Boolean'];
  popupClick: Array<PopupClick>;
  popupType: PopupType;
  serviceName: ServiceName;
  startDate: Scalars['DateTime'];
  title: Scalars['String'];
  width: Scalars['Int'];
};

export type PopupClick = {
  __typename?: 'PopupClick';
  createdAt: Scalars['DateTime'];
  expired: Scalars['DateTime'];
  id: Scalars['Float'];
  popup: Popup;
  popup_id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user_id: Scalars['Int'];
};

export enum PopupType {
  Agree = 'Agree',
  OnlyAgree = 'OnlyAgree',
  Popup = 'Popup'
}

export type AddeHangCombiInput = {
  firSemBoxCount?: Scalars['Int'];
  firSemCount?: Scalars['Int'];
  fullHang_id?: Scalars['Int'];
  kind: Scalars['String'];
  mark?: Scalars['Float'];
  schoolGrade?: UserSchoolGrade;
  secSemBoxCount?: Scalars['Int'];
  secSemCount?: Scalars['Int'];
  sentence: Scalars['String'];
  tagArr: Array<Scalars['String']>;
};

export type HangCombiOutput = {
  __typename?: 'HangCombiOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<HangCombi>;
};

export type HangCombi = {
  __typename?: 'HangCombi';
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  firSemBoxCount: Scalars['Int'];
  firSemCount: Scalars['Int'];
  fullHang_id: Scalars['Int'];
  id: Scalars['Float'];
  kind: Scalars['String'];
  mark: Scalars['Float'];
  schoolGrade: UserSchoolGrade;
  secSemBoxCount: Scalars['Int'];
  secSemCount: Scalars['Int'];
  sentence: Scalars['String'];
  tagArray: Array<TagArray>;
  updatedAt: Scalars['DateTime'];
};

export type TagArray = {
  __typename?: 'TagArray';
  hangCombi?: Maybe<HangCombi>;
  id: Scalars['Float'];
  tag: Scalars['String'];
};

export type AddHangCombiTagInput = {
  id: Scalars['Float'];
  tag: Scalars['String'];
};

export type CreateStClassesInput = {
  className: Scalars['String'];
  isMain: Scalars['Boolean'];
  thisYear: Scalars['Int'];
};

export type MyStClassesOutput = {
  __typename?: 'MyStClassesOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results: Array<StClass>;
};

export type StClass = {
  __typename?: 'StClass';
  className: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  isMain: Scalars['Boolean'];
  thisYear: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userid: Scalars['Int'];
};

export type AddStudentInput = {
  address?: Scalars['String'];
  classid: Scalars['Int'];
  className: Scalars['String'];
  gen?: Scalars['String'];
  health?: Scalars['String'];
  memo?: Scalars['String'];
  name: Scalars['String'];
  number?: Scalars['Int'];
  thisYear: Scalars['Int'];
  userid: Scalars['Int'];
};

export type MyStudentsOutput = {
  __typename?: 'MyStudentsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<Student>>;
};

export type IdOnlyInput = {
  id: Scalars['Int'];
};

export type CoreOutput = {
  __typename?: 'CoreOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SetUserPasswordInput = {
  mainId: Scalars['String'];
  pass: Scalars['String'];
};

export type AdminFindUserOutput = {
  __typename?: 'AdminFindUserOutput';
  email: Scalars['String'];
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type FullHangOutput = {
  __typename?: 'FullHangOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<FullHang>;
};

export type FullHang = {
  __typename?: 'FullHang';
  available: Scalars['Boolean'];
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  date: Scalars['Int'];
  fullHangLists: Array<FullHangList>;
  fullSen: Scalars['String'];
  id: Scalars['Float'];
  idList: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  mark: Scalars['Float'];
  month: Scalars['Int'];
  schoolGrade: UserSchoolGrade;
  updatedAt: Scalars['DateTime'];
  year: Scalars['Int'];
};

export type FullHangList = {
  __typename?: 'FullHangList';
  available: Scalars['Boolean'];
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  fullHang: FullHang;
  id: Scalars['Float'];
  isModified: Scalars['Boolean'];
  kind: Scalars['String'];
  mark: Scalars['Float'];
  schoolGrade: UserSchoolGrade;
  sentence: Scalars['String'];
  tag: Scalars['String'];
  th: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type AdminFullHangEditInput = {
  available?: Scalars['Boolean'];
  count?: Scalars['Int'];
  fullSen: Scalars['String'];
  id: Scalars['Float'];
  mark?: Scalars['Float'];
};

export type AdminFullHangConfirmInput = {
  available: Scalars['Boolean'];
  id: Scalars['Float'];
  isModified: Scalars['Boolean'];
};

export type FullHangListOutput = {
  __typename?: 'FullHangListOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<FullHangList>;
};

export type AdminFullHangsInput = {
  available?: InputMaybe<Scalars['Boolean']>;
  isModified?: InputMaybe<Scalars['Boolean']>;
  page?: Scalars['Int'];
  schoolGrade?: UserSchoolGrade;
};

export type AdminFullHangListOutput = {
  __typename?: 'AdminFullHangListOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<FullHang>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type AdminUserConfirmInput = {
  email?: InputMaybe<Scalars['String']>;
  mainId?: InputMaybe<Scalars['String']>;
};

export type ChangChesInput = {
  isOnlyMy?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Scalars['String']>;
  page?: Scalars['Int'];
  school_grade?: InputMaybe<Array<UserSchoolGrade>>;
  sentence?: InputMaybe<Scalars['String']>;
  subTag?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Scalars['String']>;
};

export type ChangChesOutput = {
  __typename?: 'ChangChesOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<ChangChe>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type AllHangCombiInput = {
  keyword?: Scalars['String'];
  kind?: Scalars['String'];
  mark?: Scalars['Int'];
  page?: Scalars['Int'];
  schoolGrade: UserSchoolGrade;
  subTag?: InputMaybe<Scalars['String']>;
  tag?: Scalars['String'];
};

export type AllHangCombisOutput = {
  __typename?: 'AllHangCombisOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<HangCombi>>;
  totalResults?: Maybe<Scalars['Float']>;
};

export type FullsentencesInput = {
  isOnlyMy?: InputMaybe<Scalars['Boolean']>;
  keyword?: Scalars['String'];
  kind?: Scalars['String'];
  page?: Scalars['Int'];
  school_grade: UserSchoolGrade;
  studyRankTotal?: Scalars['String'];
  tag?: Scalars['String'];
};

export type FullsentencesOutput = {
  __typename?: 'FullsentencesOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<FullSentence>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type AllPopupInput = {
  page?: InputMaybe<Scalars['Int']>;
  serviceName?: InputMaybe<ServiceName>;
};

export type HangPassInput = {
  password: Scalars['String'];
};

export type BasicOutput = {
  __typename?: 'BasicOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CheckPossibleIdInput = {
  mainId: Scalars['String'];
};

export type CheckPossibleIdOutput = {
  __typename?: 'CheckPossibleIdOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CheckPossibleNicknameInput = {
  nickname: Scalars['String'];
};

export type ConfirmPasswordInput = {
  code: Scalars['String'];
  mainId: Scalars['String'];
  password: Scalars['String'];
};

export type VerifyEmailOutput = {
  __typename?: 'VerifyEmailOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CP_GetTradeTmpCodeInput = {
  code: Scalars['String'];
};

export type CP_MoneyOutput = {
  __typename?: 'CP_MoneyOutput';
  error?: Maybe<Scalars['String']>;
  money: Scalars['Int'];
  ok: Scalars['Boolean'];
};

export type CP_CreateClassPayInput = {
  className?: Scalars['String'];
  classNum?: Scalars['Int'];
  classTh?: Scalars['Int'];
  schoolName?: Scalars['String'];
};

export type CP_CreateProductIdInput = {
  desciption: Scalars['String'];
  imgurl?: Scalars['String'];
  name: Scalars['String'];
  price?: Scalars['Int'];
  qty?: Scalars['Int'];
};

export type CreateCpStudentsInput = {
  students: Array<StudentsCreateObj>;
};

export type StudentsCreateObj = {
  mainId: Scalars['String'];
  name: Scalars['String'];
  number: Scalars['Int'];
  password: Scalars['String'];
};

export type CP_CheckPossibleIsdOutput = {
  __typename?: 'CP_CheckPossibleIsdOutput';
  error?: Maybe<Scalars['String']>;
  mainIds: Array<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateCpTeacherInput = {
  className: Scalars['String'];
  name?: Scalars['String'];
};

export type CP_EditProfileInput = {
  name?: InputMaybe<Scalars['String']>;
  newPassword?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type CP_TradeTmpCodeOutput = {
  __typename?: 'CP_TradeTmpCodeOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<CP_TradeTmpCode>;
};

export type CP_TradeTmpCode = {
  __typename?: 'CP_TradeTmpCode';
  code: Scalars['String'];
  cppay_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  name: Scalars['String'];
  price: Scalars['Int'];
  product_id: Scalars['Int'];
  qty: Scalars['Int'];
  seller_id: Scalars['Int'];
  seller_name: Scalars['String'];
  sumPrice: Scalars['Int'];
};

export type CP_InstiAcitveTeacherIssueMoneyInput = {
  money: Scalars['Int'];
};

export type CP_InstiBankServeralSendMoneyOneToManyInput = {
  desciption: Scalars['String'];
  insti_id: Scalars['Int'];
  money: Scalars['Int'];
  oneuser_id: Scalars['Int'];
  serveral_ids: Array<Scalars['Int']>;
};

export type CP_LoginInput = {
  mainId: Scalars['String'];
  password: Scalars['String'];
};

export type ModifyCpProfileInput = {
  id: Scalars['Float'];
  name?: Scalars['String'];
  newPassword?: InputMaybe<Scalars['String']>;
  number?: Scalars['Int'];
  password?: InputMaybe<Scalars['String']>;
};

export type ModifyCpStudentsInput = {
  id: Scalars['Float'];
  name?: Scalars['String'];
  number?: Scalars['Int'];
  password?: InputMaybe<Scalars['String']>;
};

export type YearMonthInput = {
  month: Scalars['Int'];
  year: Scalars['Int'];
};

export type CP_BankBook = {
  __typename?: 'CP_BankBook';
  beforeMoney: Scalars['Int'];
  broker_id: Scalars['Int'];
  cppay_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  desciption: Scalars['String'];
  id: Scalars['Float'];
  insti_id: Scalars['Int'];
  kind: BILL_KIND_TYPE;
  price: Scalars['Int'];
  receiver_name: Scalars['String'];
  recordtype: RECORD_TYPE;
  resultMoney: Scalars['Int'];
  sender_name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user_id: Scalars['Int'];
};

export enum BILL_KIND_TYPE {
  BankExpend = 'BankExpend',
  BankIssue = 'BankIssue',
  BankPayIncome = 'BankPayIncome',
  BankSend = 'BankSend',
  CenterIssue = 'CenterIssue',
  IndividualSend = 'IndividualSend',
  Other = 'Other',
  Trade = 'Trade'
}

export enum RECORD_TYPE {
  Expend = 'Expend',
  Income = 'Income'
}

export type CP_Bill = {
  __typename?: 'CP_Bill';
  broker_id: Scalars['Int'];
  consumer_id: Scalars['Int'];
  consumer_name: Scalars['String'];
  cppay_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  desciption: Scalars['String'];
  id: Scalars['Float'];
  insti_id: Scalars['Int'];
  isCanceled: Scalars['Boolean'];
  kind: BILL_KIND_TYPE;
  name: Scalars['String'];
  price: Scalars['Int'];
  qty: Scalars['Int'];
  seller_id: Scalars['Int'];
  seller_name: Scalars['String'];
  sumPrice: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type CP_PayPossibleNameInput = {
  className?: Scalars['String'];
};

export type CP_BuyProductIdInput = {
  cppay_id: Scalars['Int'];
  product_id: Scalars['Int'];
  qty?: Scalars['Int'];
};

export type CheckPossibleIdsInput = {
  mainIds: Array<Scalars['String']>;
};

export type CP_UpdateProductIdInput = {
  desciption: Scalars['String'];
  id: Scalars['Float'];
  imgurl?: Scalars['String'];
  name: Scalars['String'];
  price?: Scalars['Int'];
  qty?: Scalars['Int'];
};

export type CP_UserProfileInInput = {
  password: Scalars['String'];
};

export type CP_SomeProfileOutput = {
  __typename?: 'CP_SomeProfileOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<CP_PickUser>;
};

export type CP_PickUser = {
  __typename?: 'CP_PickUser';
  mainId: Scalars['String'];
  name: Scalars['String'];
  number: Scalars['Int'];
  position: POSITION;
};

export type CreateAccountInput = {
  email: Scalars['String'];
  mainId: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  role?: UserRole;
};

export type CreateAccountOutput = {
  __typename?: 'CreateAccountOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateStAttendChecksInput = {
  inputs: Array<stAttendCheckObj>;
  query?: InputMaybe<StAttendChecksInput>;
};

export type stAttendCheckObj = {
  attendBigKind?: AttendBigKind;
  attendSmallKind?: AttendSmallKind;
  check?: Scalars['String'];
  classid: Scalars['Int'];
  date?: Scalars['Int'];
  day: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Float']>;
  month?: Scalars['Int'];
  reason?: Scalars['String'];
  studentid: Scalars['Int'];
  thisYear?: Scalars['Int'];
  userid: Scalars['Int'];
  year?: Scalars['Int'];
};

export enum AttendBigKind {
  Absent = 'Absent',
  EarlyLeave = 'EarlyLeave',
  Late = 'Late',
  SubAbsent = 'SubAbsent'
}

export enum AttendSmallKind {
  Disease = 'Disease',
  Etc = 'Etc',
  NotRec = 'NotRec',
  Recognition = 'Recognition'
}

export type StAttendChecksInput = {
  bigKind?: InputMaybe<Scalars['String']>;
  classid?: InputMaybe<Scalars['Float']>;
  month?: Scalars['Int'];
  smallKind?: InputMaybe<Scalars['String']>;
  thisYear?: Scalars['Int'];
  year?: Scalars['Int'];
};

export type StAttendChecksOutput = {
  __typename?: 'StAttendChecksOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<StAttendCheck>>;
};

export type StAttendCheck = {
  __typename?: 'StAttendCheck';
  attendBigKind: AttendBigKind;
  attendSmallKind: AttendSmallKind;
  check: Scalars['String'];
  classid: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  date: Scalars['Int'];
  day: Scalars['DateTime'];
  id: Scalars['Float'];
  month: Scalars['Int'];
  reason: Scalars['String'];
  studentid: Scalars['Int'];
  thisYear: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userid: Scalars['Int'];
  year: Scalars['Int'];
};

export type CreateBoardInput = {
  boardName: Scalars['String'];
  content: Scalars['String'];
  kind?: Scalars['String'];
  password?: Scalars['String'];
  title: Scalars['String'];
  writerNmae?: Scalars['String'];
};

export type BoardCoreOutPut = {
  __typename?: 'BoardCoreOutPut';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ChangCheCreateInput = {
  kind: Scalars['String'];
  sentence: Scalars['String'];
  study_rank?: Scalars['String'];
  tag: Scalars['String'];
};

export type ChangCheCreateOutput = {
  __typename?: 'ChangCheCreateOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<ChangChe>;
};

export type CreateStChecksInput = {
  inputs: Array<stCheckObj>;
  query?: InputMaybe<StChecksInput>;
};

export type stCheckObj = {
  check?: Scalars['String'];
  checkType?: CheckType;
  classid: Scalars['Int'];
  date?: Scalars['Int'];
  day: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Float']>;
  month?: Scalars['Int'];
  studentid: Scalars['Int'];
  subject?: Scalars['String'];
  thisYear?: Scalars['Int'];
  title?: Scalars['String'];
  titleid: Scalars['Int'];
  userid: Scalars['Int'];
  year?: Scalars['Int'];
};

export enum CheckType {
  AtoE = 'AtoE',
  OOTriangle = 'OOTriangle',
  OX = 'OX',
  Self = 'Self',
  UpMidDown = 'UpMidDown'
}

export type StChecksInput = {
  classid: Scalars['Int'];
  dateObj?: InputMaybe<dateObj>;
  skip?: InputMaybe<Scalars['Float']>;
  subject?: Scalars['String'];
  take?: InputMaybe<Scalars['Float']>;
  thisYear?: Scalars['Int'];
  title?: Scalars['String'];
  titleid?: InputMaybe<Scalars['Float']>;
};

export type dateObj = {
  distance: Scalars['Float'];
  start: Scalars['DateTime'];
};

export type StChecksOutput = {
  __typename?: 'StChecksOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<StCheck>>;
};

export type StCheck = {
  __typename?: 'StCheck';
  check: Scalars['String'];
  checkType: CheckType;
  classid: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  date: Scalars['Int'];
  day: Scalars['DateTime'];
  id: Scalars['Float'];
  month: Scalars['Int'];
  studentid: Scalars['Int'];
  subject: Scalars['String'];
  thisYear: Scalars['Int'];
  title: Scalars['String'];
  titleid: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userid: Scalars['Int'];
  year: Scalars['Int'];
};

export type CreateStCheckTitlesInput = {
  inputs: createStCheckTitleObj;
};

export type createStCheckTitleObj = {
  checkType?: CheckType;
  classid: Scalars['Int'];
  date?: Scalars['Int'];
  day?: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Float']>;
  month?: Scalars['Int'];
  subject?: Scalars['String'];
  thisYear: Scalars['Int'];
  title?: Scalars['String'];
  userid?: InputMaybe<Scalars['Float']>;
  year?: Scalars['Int'];
};

export type StCheckCreateTitlesOutput = {
  __typename?: 'StCheckCreateTitlesOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<StCheckTitle>;
};

export type StCheckTitle = {
  __typename?: 'StCheckTitle';
  checkType: CheckType;
  classid: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  date: Scalars['Int'];
  day: Scalars['DateTime'];
  id: Scalars['Float'];
  month: Scalars['Int'];
  subject: Scalars['String'];
  thisYear: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userid: Scalars['Int'];
  year: Scalars['Int'];
};

export type CreateCommentInput = {
  boardid?: Scalars['Int'];
  content: Scalars['String'];
  name: Scalars['String'];
};

export type ViewCommentsOutput = {
  __typename?: 'ViewCommentsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<Comment>>;
};

export type Comment = {
  __typename?: 'Comment';
  boardid: Scalars['Int'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  recommend: Scalars['Int'];
  schoolGrade: UserSchoolGrade;
  updatedAt: Scalars['DateTime'];
  userid: Scalars['Int'];
};

export type CreateDiClassesInput = {
  inputs: Array<classObj>;
};

export type classObj = {
  content: Scalars['String'];
  date?: Scalars['Int'];
  day: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Float']>;
  month?: Scalars['Int'];
  period?: Scalars['Int'];
  subject?: Scalars['String'];
  thisYear?: Scalars['Int'];
  year?: Scalars['Int'];
};

export type DiClassesOutput = {
  __typename?: 'DiClassesOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<DiClass>>;
};

export type DiClass = {
  __typename?: 'DiClass';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  date: Scalars['Int'];
  day: Scalars['DateTime'];
  id: Scalars['Float'];
  month: Scalars['Int'];
  period: Scalars['Int'];
  subject: Scalars['String'];
  thisYear: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userid: Scalars['Int'];
  year: Scalars['Int'];
};

export type CreateFullChangCheInput = {
  fullSen: Scalars['String'];
  schoolGrade?: UserSchoolGrade;
  tagList: Array<FullChangCheTagsObj>;
};

export type FullChangCheTagsObj = {
  kind: Scalars['String'];
  tag: Scalars['String'];
};

export type CreateFullHangInput = {
  fullSen: Scalars['String'];
  idList?: Scalars['String'];
  mark?: Scalars['Float'];
  schoolGrade?: UserSchoolGrade;
};

export type CreateFullsentenceOutput = {
  __typename?: 'CreateFullsentenceOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateFullsentenceInput = {
  fullSen: Scalars['String'];
  fullSentenceData: Array<HangFullListObj>;
  mark?: Scalars['Float'];
  schoolGrade?: UserSchoolGrade;
};

export type HangFullListObj = {
  available: Scalars['Boolean'];
  id: Scalars['Float'];
  isModified: Scalars['Boolean'];
  kind: Scalars['String'];
  mark?: Scalars['Float'];
  schoolGrade?: UserSchoolGrade;
  sentence: Scalars['String'];
  tag: Scalars['String'];
};

export type CreateHangInput = {
  kind: Scalars['String'];
  mark?: Scalars['Float'];
  schoolGrade?: UserSchoolGrade;
  sentence: Scalars['String'];
  study_rank?: Scalars['String'];
  tag: Scalars['String'];
};

export type CreateHangOutput = {
  __typename?: 'CreateHangOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<Hang>;
};

export type CreateHangCountInput = {
  hang_id?: Scalars['Int'];
  hangMenuMode?: HangMenuMode;
};

export type CreateHangCountOutput = {
  __typename?: 'CreateHangCountOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateHangMarkInput = {
  hang_id?: Scalars['Int'];
  hangMenuMode?: HangMenuMode;
  point?: Scalars['Float'];
};

export type CreateHangMarkOutput = {
  __typename?: 'CreateHangMarkOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<markOutputObj>;
};

export type markOutputObj = {
  __typename?: 'markOutputObj';
  mark: Scalars['Float'];
  sumPerson: Scalars['Int'];
  sumPoint: Scalars['Float'];
};

export type CreatePaymentOutput = {
  __typename?: 'CreatePaymentOutput';
  amount: Scalars['Float'];
  customerEmail: Scalars['String'];
  customerName: Scalars['String'];
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  orderId: Scalars['String'];
};

export type CreateServeralHangStudentsInput = {
  inputs: Array<CreateHangStudentObj>;
};

export type CreateHangStudentObj = {
  changSen?: Scalars['String'];
  fullSen?: Scalars['String'];
  id: Scalars['Float'];
  idList?: Scalars['String'];
  mark?: Scalars['Float'];
  name?: Scalars['String'];
  number?: Scalars['Int'];
};

export type CreateMemoInput = {
  content: Scalars['String'];
  date?: Scalars['Int'];
  day: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Float']>;
  month?: Scalars['Int'];
  year?: Scalars['Int'];
};

export type MemoOutput = {
  __typename?: 'MemoOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<Memo>;
};

export type Memo = {
  __typename?: 'Memo';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  date: Scalars['Int'];
  day: Scalars['DateTime'];
  id: Scalars['Float'];
  month: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userid: Scalars['Int'];
  year: Scalars['Int'];
};

export type CreateHangModifySenInput = {
  hangMenuMode: HangMenuMode;
  id: Scalars['Float'];
  sentence: Scalars['String'];
  study_rank?: Scalars['String'];
};

export type HangOneOutput = {
  __typename?: 'HangOneOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<Hang>;
};

export type CreatePopupInput = {
  content?: Scalars['String'];
  distance?: Scalars['Int'];
  endDate: Scalars['DateTime'];
  height?: Scalars['Int'];
  isRepeat: Scalars['Boolean'];
  popupType?: PopupType;
  serviceName?: ServiceName;
  startDate: Scalars['DateTime'];
  title?: Scalars['String'];
  width?: Scalars['Int'];
};

export type PopupOutput = {
  __typename?: 'PopupOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<Popup>;
};

export type CreatePopupClickInput = {
  id: Scalars['Float'];
};

export type CreateServeralChanChesInput = {
  inputs: Array<CreateServeralChangCheObj>;
  isRealSave: Scalars['Boolean'];
};

export type CreateServeralChangCheObj = {
  kind: Scalars['String'];
  mark?: Scalars['Float'];
  schoolGrade?: UserSchoolGrade;
  sentence: Scalars['String'];
  subTag?: Scalars['String'];
  tag: Scalars['String'];
};

export type CreateServeralChanChesOutput = {
  __typename?: 'CreateServeralChanChesOutput';
  error?: Maybe<Scalars['String']>;
  failLists: Array<ChangChe>;
  ok: Scalars['Boolean'];
  results: Array<ChangChe>;
  success: Scalars['Int'];
};

export type CreateServeralCombisInput = {
  inputs: Array<CreateServeralCombiObj>;
  isRealSave: Scalars['Boolean'];
};

export type CreateServeralCombiObj = {
  fullHang_id?: Scalars['Int'];
  kind: Scalars['String'];
  mark?: Scalars['Float'];
  schoolGrade?: UserSchoolGrade;
  sentence: Scalars['String'];
  tagArray: Array<Scalars['String']>;
};

export type CreateServeralCombisOutput = {
  __typename?: 'CreateServeralCombisOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  resultFails?: Maybe<Array<CreateServeralCombiResultObj>>;
  success: Scalars['Float'];
};

export type CreateServeralCombiResultObj = {
  __typename?: 'CreateServeralCombiResultObj';
  fullHang_id: Scalars['Int'];
  kind: Scalars['String'];
  mark: Scalars['Float'];
  sameSentence: Scalars['Boolean'];
  schoolGrade: UserSchoolGrade;
  sentence: Scalars['String'];
  tag: Scalars['String'];
};

export type CreateServeralHangsInput = {
  inputs: Array<CreateServeralHangObj>;
  isRealSave: Scalars['Boolean'];
};

export type CreateServeralHangObj = {
  kind: Scalars['String'];
  mark?: Scalars['Float'];
  schoolGrade?: UserSchoolGrade;
  sentence: Scalars['String'];
  tag: Scalars['String'];
  tagArray: Array<Scalars['String']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

export type CreateServeralHangsOutput = {
  __typename?: 'CreateServeralHangsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<Hang>>;
  success: Scalars['Float'];
};

export type CreateStCheckViewInput = {
  input: createStCheckViewObj;
};

export type createStCheckViewObj = {
  classid: Scalars['Int'];
  date?: Scalars['Int'];
  day: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Float']>;
  month?: Scalars['Int'];
  studentname?: Scalars['String'];
  subject?: Scalars['String'];
  thisYear?: Scalars['Int'];
  title?: Scalars['String'];
  titleid: Scalars['Int'];
  userid?: InputMaybe<Scalars['Float']>;
  year?: Scalars['Int'];
};

export type WeeklyStCheckViewsOutput = {
  __typename?: 'WeeklyStCheckViewsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<StCheckView>>;
};

export type StCheckView = {
  __typename?: 'StCheckView';
  classid: Scalars['Int'];
  date: Scalars['Int'];
  day: Scalars['DateTime'];
  id: Scalars['Float'];
  month: Scalars['Int'];
  studentname: Scalars['String'];
  subject: Scalars['String'];
  thisYear: Scalars['Int'];
  title: Scalars['String'];
  titleid: Scalars['Int'];
  userid: Scalars['Int'];
  year: Scalars['Int'];
};

export type CreateStudentsInput = {
  inputs: Array<studentCreateObj>;
};

export type studentCreateObj = {
  address?: Scalars['String'];
  classid: Scalars['Int'];
  className: Scalars['String'];
  gen?: Scalars['String'];
  health?: Scalars['String'];
  memo?: Scalars['String'];
  name: Scalars['String'];
  number?: Scalars['Int'];
  thisYear: Scalars['Int'];
  userid: Scalars['Int'];
};

export type CreateTagInput = {
  hangMenuMode?: InputMaybe<HangMenuMode>;
  kind: Scalars['String'];
  schoolGrade?: InputMaybe<UserSchoolGrade>;
  tag: Scalars['String'];
};

export type CreateTagOutput = {
  __typename?: 'CreateTagOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<TagList>;
};

export type CreateDiThisyearInput = {
  thisYear?: Scalars['Int'];
};

export type CreateDitimetableInput = {
  className: Scalars['String'];
  fifFri?: Scalars['String'];
  fifMon?: Scalars['String'];
  fifThu?: Scalars['String'];
  fifTue?: Scalars['String'];
  fifWed?: Scalars['String'];
  firFri?: Scalars['String'];
  firMon?: Scalars['String'];
  firThu?: Scalars['String'];
  firTue?: Scalars['String'];
  firWed?: Scalars['String'];
  fouFri?: Scalars['String'];
  fouMon?: Scalars['String'];
  fouThu?: Scalars['String'];
  fouTue?: Scalars['String'];
  fouWed?: Scalars['String'];
  id?: InputMaybe<Scalars['Float']>;
  isMain: Scalars['Boolean'];
  secFri?: Scalars['String'];
  secMon?: Scalars['String'];
  secThu?: Scalars['String'];
  secTue?: Scalars['String'];
  secWed?: Scalars['String'];
  sevFri?: Scalars['String'];
  sevMon?: Scalars['String'];
  sevThu?: Scalars['String'];
  sevTue?: Scalars['String'];
  sevWed?: Scalars['String'];
  sixFri?: Scalars['String'];
  sixMon?: Scalars['String'];
  sixThu?: Scalars['String'];
  sixTue?: Scalars['String'];
  sixWed?: Scalars['String'];
  thiFri?: Scalars['String'];
  thiMon?: Scalars['String'];
  thisYear?: Scalars['Int'];
  thiThu?: Scalars['String'];
  thiTue?: Scalars['String'];
  thiWed?: Scalars['String'];
};

export type CreateWorkInput = {
  content: Scalars['String'];
  date?: Scalars['Int'];
  day: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Float']>;
  month?: Scalars['Int'];
  year?: Scalars['Int'];
};

export type WorkOutput = {
  __typename?: 'WorkOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<Work>;
};

export type Work = {
  __typename?: 'Work';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  date: Scalars['Int'];
  day: Scalars['DateTime'];
  id: Scalars['Float'];
  month: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userid: Scalars['Int'];
  year: Scalars['Int'];
};

export type DeleteStAttendCheckInput = {
  id: Scalars['Float'];
  query?: InputMaybe<StAttendChecksInput>;
};

export type DeleteStCheckTitleInput = {
  id: Scalars['Float'];
  thisYear: Scalars['Int'];
};

export type StCheckTitlesOutput = {
  __typename?: 'StCheckTitlesOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<StCheckTitle>>;
  totalResults: Scalars['Float'];
};

export type DeleteBoardByPasswordInput = {
  boardName: Scalars['String'];
  id: Scalars['Int'];
  password: Scalars['String'];
};

export type DeleteHangInput = {
  id: Scalars['Int'];
};

export type DeleteCommentInput = {
  boardid: Scalars['Float'];
  id: Scalars['Float'];
};

export type DeleteHangOutput = {
  __typename?: 'DeleteHangOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteHangCombiTagInput = {
  id: Scalars['Float'];
  tagArr_id: Scalars['Int'];
};

export type DelClassesInput = {
  id: Scalars['Float'];
};

export type DelStudentInput = {
  id: Scalars['Float'];
};

export type DelStudentsInput = {
  classid: Scalars['Int'];
  thisYear: Scalars['Int'];
};

export type DeleteStCheckViewInput = {
  id: Scalars['Float'];
  thisYear?: Scalars['Int'];
};

export type EditHangInput = {
  id?: InputMaybe<Scalars['Float']>;
  kind?: InputMaybe<Scalars['String']>;
  sentence?: InputMaybe<Scalars['String']>;
  study_rank?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Scalars['String']>;
};

export type EditHangOutput = {
  __typename?: 'EditHangOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Hang>;
};

export type EditProfileInput = {
  newPassword?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type EditProfileOutput = {
  __typename?: 'EditProfileOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type StudentRecord = {
  __typename?: 'StudentRecord';
  admissionYear: Scalars['Int'];
  analysis: Scalars['String'];
  craccept: Array<CrAccept>;
  crChangChe: Array<CrChangChe>;
  crChangReading: Array<CrChangReading>;
  createdAt: Scalars['DateTime'];
  crHang: Array<CrHang>;
  crSubjectDoc: Array<CrSubjectDoc>;
  highSchoolType: Scalars['String'];
  id: Scalars['Float'];
  introduction: Scalars['String'];
  keyPoint: Scalars['String'];
  rankAve: Scalars['Float'];
  rankCareer: Scalars['Float'];
  rankMajor: Scalars['Float'];
  rankSelect: Scalars['Float'];
  title: Scalars['String'];
  university: Scalars['String'];
  universityInfo: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type CrAccept = {
  __typename?: 'CrAccept';
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  isAccept: Scalars['Boolean'];
  studentRecord: StudentRecord;
  uni_name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CrChangChe = {
  __typename?: 'CrChangChe';
  club_depart: Scalars['String'];
  content: Scalars['String'];
  course_hope: Scalars['String'];
  course_interest: Scalars['String'];
  course_reason: Scalars['String'];
  grade: Scalars['Int'];
  id: Scalars['Float'];
  kind: Scalars['String'];
  studentRecord: StudentRecord;
};

export type CrChangReading = {
  __typename?: 'CrChangReading';
  bookName: Scalars['String'];
  grade: Scalars['Int'];
  id: Scalars['Float'];
  semester: Scalars['Int'];
  studentRecord: StudentRecord;
  subject: Scalars['String'];
  writer: Scalars['String'];
};

export type CrHang = {
  __typename?: 'CrHang';
  content: Scalars['String'];
  grade: Scalars['Int'];
  id: Scalars['Float'];
  studentRecord: StudentRecord;
};

export type CrSubjectDoc = {
  __typename?: 'CrSubjectDoc';
  ave: Scalars['Float'];
  deviation: Scalars['Float'];
  grade: Scalars['Float'];
  id: Scalars['Float'];
  mark: Scalars['String'];
  score: Scalars['Float'];
  StudentNum: Scalars['Float'];
  studentRecord: StudentRecord;
  subArea: Scalars['String'];
  subject: Scalars['String'];
  subjectText: Scalars['String'];
  th: Scalars['Float'];
};

export type FindUserIdInput = {
  email: Scalars['String'];
};

export type UserIdHintOutput = {
  __typename?: 'UserIdHintOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user_id?: Maybe<Scalars['String']>;
};

export type FullChangChesInput = {
  keyword?: Scalars['String'];
  kind?: Scalars['String'];
  page?: Scalars['Int'];
  schoolGrade?: UserSchoolGrade;
  tag?: Scalars['String'];
};

export type FullChangsOutput = {
  __typename?: 'FullChangsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<FullChangChe>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type FullChangChe = {
  __typename?: 'FullChangChe';
  available: Scalars['Boolean'];
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  fullChangCheTags: Array<FullChangCheTag>;
  fullSen: Scalars['String'];
  id: Scalars['Float'];
  idList: Scalars['String'];
  schoolGrade: UserSchoolGrade;
  updatedAt: Scalars['DateTime'];
};

export type FullChangCheTag = {
  __typename?: 'FullChangCheTag';
  createdAt: Scalars['DateTime'];
  fullChangChe: FullChangChe;
  id: Scalars['Float'];
  kind: Scalars['String'];
  tag: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FullHangsInput = {
  isOnlyMy?: InputMaybe<Scalars['Boolean']>;
  keyword?: Scalars['String'];
  kind?: Scalars['String'];
  mark?: InputMaybe<Scalars['Float']>;
  page?: Scalars['Int'];
  schoolGrade?: UserSchoolGrade;
  tag?: Scalars['String'];
};

export type FullHangsOutput = {
  __typename?: 'FullHangsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<FullHang>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type HangMarkCopyOutput = {
  __typename?: 'HangMarkCopyOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<Scalars['Int']>;
};

export type HangsInput = {
  isLast?: InputMaybe<Scalars['Boolean']>;
  isOnlyMy?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Scalars['String']>;
  mark?: InputMaybe<Scalars['Float']>;
  page?: Scalars['Int'];
  schoolGrade?: InputMaybe<UserSchoolGrade>;
  sentence?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Scalars['String']>;
};

export type HangsOutput = {
  __typename?: 'HangsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<Hang>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type CP_SendMoneyIndivisualInput = {
  desciption: Scalars['String'];
  money: Scalars['Int'];
  receiver_id: Scalars['Int'];
};

export type InitPaymentOutput = {
  __typename?: 'InitPaymentOutput';
  clientKey: Scalars['String'];
  customerKey: Scalars['String'];
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type LoginInput = {
  mainId: Scalars['String'];
  password: Scalars['String'];
};

export type EditBoardsInput = {
  content: Scalars['String'];
  id: Scalars['Float'];
  kind?: Scalars['String'];
  title: Scalars['String'];
};

export type ModifySeveralStudentInput = {
  inputs: Array<studentCreateObjWidId>;
};

export type studentCreateObjWidId = {
  address?: Scalars['String'];
  classid: Scalars['Int'];
  className: Scalars['String'];
  gen?: Scalars['String'];
  health?: Scalars['String'];
  id: Scalars['Float'];
  memo?: Scalars['String'];
  name: Scalars['String'];
  number?: Scalars['Int'];
  thisYear: Scalars['Int'];
  userid: Scalars['Int'];
};

export type MonthlyMemosInput = {
  first: Scalars['DateTime'];
  second: Scalars['DateTime'];
};

export type WeeklyMemosOutput = {
  __typename?: 'WeeklyMemosOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<Memo>>;
};

export type MonthlyWorksInput = {
  first: Scalars['DateTime'];
  second: Scalars['DateTime'];
};

export type WeeklyWorksOutput = {
  __typename?: 'WeeklyWorksOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<Work>>;
};

export type StChecksByTitleIdArrInput = {
  titleidArr: Array<titleidObj>;
};

export type titleidObj = {
  titleid: Scalars['Float'];
};

export type StCheckTitlesQueryInput = {
  checkType?: InputMaybe<CheckType>;
  classid?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['Int']>;
  dateObj?: InputMaybe<dateObj>;
  month?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Float']>;
  subject?: Scalars['String'];
  take?: InputMaybe<Scalars['Float']>;
  thisYear: Scalars['Int'];
  title?: Scalars['String'];
  year?: InputMaybe<Scalars['Int']>;
};

export type MyHangMarkInput = {
  hang_id?: Scalars['Int'];
  hangMenuMode?: HangMenuMode;
};

export type MyHangMarkOutput = {
  __typename?: 'MyHangMarkOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<HangMark>;
};

export type HangMark = {
  __typename?: 'HangMark';
  hang_id: Scalars['Int'];
  hangMenuMode: HangMenuMode;
  id: Scalars['Float'];
  point: Scalars['Float'];
  user_id: Scalars['Int'];
};

export type MyOneClassStudentsInput = {
  className: Scalars['String'];
  thisYear: Scalars['Int'];
};

export type MyStCheckHomeViewsInput = {
  thisYear: Scalars['Float'];
};

export type MyStClassesInput = {
  thisYear: Scalars['Int'];
};

export type ConfirmPaymentInput = {
  finalPrice: Scalars['Float'];
  orderId: Scalars['String'];
  paymentKey: Scalars['String'];
};

export type ResetHangCountInput = {
  hangMenuMode?: HangMenuMode;
};

export type RestoreModifySentenceInput = {
  id: Scalars['Float'];
};

export type HangModifySenOutput = {
  __typename?: 'HangModifySenOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<Hang>;
};

export type FindPasswordEmailInput = {
  email: Scalars['String'];
  mainId: Scalars['String'];
};

export type SetIsFirstInput = {
  isFirst: Scalars['Boolean'];
};

export type TestmPaymentInput = {
  finalPrice: Scalars['Float'];
  orderId: Scalars['String'];
};

export type DiClassesInput = {
  date?: Scalars['Int'];
  month?: Scalars['Int'];
  thisYear?: Scalars['Int'];
  year?: Scalars['Int'];
};

export type MemoInput = {
  date?: Scalars['Int'];
  month?: Scalars['Int'];
  year?: Scalars['Int'];
};

export type WorkInput = {
  date?: Scalars['Int'];
  month?: Scalars['Int'];
  year?: Scalars['Int'];
};

export type UpdateHangCombiInput = {
  firSemBoxCount?: Scalars['Int'];
  firSemCount?: Scalars['Int'];
  fullHang_id?: Scalars['Int'];
  id: Scalars['Float'];
  kind: Scalars['String'];
  mark?: Scalars['Float'];
  schoolGrade?: UserSchoolGrade;
  secSemBoxCount?: Scalars['Int'];
  secSemCount?: Scalars['Int'];
  sentence: Scalars['String'];
  tagArray: Array<TagArrayInputType>;
};

export type TagArrayInputType = {
  hangCombi?: InputMaybe<HangCombiInputType>;
  id: Scalars['Float'];
  tag: Scalars['String'];
};

export type HangCombiInputType = {
  count?: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  firSemBoxCount?: Scalars['Int'];
  firSemCount?: Scalars['Int'];
  fullHang_id?: Scalars['Int'];
  id: Scalars['Float'];
  kind: Scalars['String'];
  mark?: Scalars['Float'];
  schoolGrade?: UserSchoolGrade;
  secSemBoxCount?: Scalars['Int'];
  secSemCount?: Scalars['Int'];
  sentence: Scalars['String'];
  tagArray: Array<TagArrayInputType>;
  updatedAt: Scalars['DateTime'];
};

export type UpdateHangStudentInput = {
  changSen?: Scalars['String'];
  fullSen?: Scalars['String'];
  id: Scalars['Float'];
  idList?: Scalars['String'];
  mark?: Scalars['Float'];
  name?: Scalars['String'];
  number?: Scalars['Int'];
};

export type HangStudentOneOutput = {
  __typename?: 'HangStudentOneOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<HangStudent>;
};

export type UpdatePopupInput = {
  content?: Scalars['String'];
  distance?: Scalars['Int'];
  endDate: Scalars['DateTime'];
  height?: Scalars['Int'];
  id: Scalars['Float'];
  isRepeat: Scalars['Boolean'];
  popupType?: PopupType;
  serviceName?: ServiceName;
  startDate: Scalars['DateTime'];
  title?: Scalars['String'];
  width?: Scalars['Int'];
};

export type UpdateSettingInput = {
  isHomeroom?: InputMaybe<Scalars['Boolean']>;
  isPeAfter?: InputMaybe<Scalars['Boolean']>;
  isPeMax?: InputMaybe<Scalars['Float']>;
  isPeZero?: InputMaybe<Scalars['Boolean']>;
  isTTSlice?: InputMaybe<Scalars['Boolean']>;
  isTTSubject?: InputMaybe<Scalars['Boolean']>;
  peAfter?: InputMaybe<Scalars['String']>;
  peZero?: InputMaybe<Scalars['String']>;
  thisYear?: InputMaybe<Scalars['Float']>;
};

export type EditStClassesInput = {
  className: Scalars['String'];
  id: Scalars['Float'];
  isMain: Scalars['Boolean'];
  thisYear: Scalars['Int'];
};

export type UpdateStudentInput = {
  address?: Scalars['String'];
  classid: Scalars['Int'];
  className: Scalars['String'];
  gen?: Scalars['String'];
  health?: Scalars['String'];
  id: Scalars['Float'];
  memo?: Scalars['String'];
  name: Scalars['String'];
  number?: Scalars['Int'];
  thisYear: Scalars['Int'];
  userid: Scalars['Int'];
};

export type UserExitInput = {
  id: Scalars['Float'];
  password: Scalars['String'];
};

export type UserProfileInInput = {
  password: Scalars['String'];
};

export type UserProfileInOutput = {
  __typename?: 'UserProfileInOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<PickUser>;
};

export type PickUser = {
  __typename?: 'PickUser';
  canNickEdit?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  mainId?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  pdfExpDate?: Maybe<Scalars['DateTime']>;
  role?: Maybe<Scalars['String']>;
  schoolGrade?: Maybe<Scalars['String']>;
};

export type ViewCommentsInput = {
  boardid: Scalars['Float'];
};

export type WeeklyMemosInput = {
  date: Scalars['DateTime'];
};

export type WeeklyStCheckHomeViewsInput = {
  date: Scalars['DateTime'];
};

export type WeeklyWorksInput = {
  date: Scalars['DateTime'];
};

export type Subscription = {
  __typename?: 'Subscription';
  pendingSelling: CoreOutput;
  testSub: CoreOutput;
};


export type SubscriptionpendingSellingArgs = {
  tradetmpcode_id: Scalars['Int'];
};

export type Completion = {
  __typename?: 'Completion';
  com_tag: Array<Completion_tag>;
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  date: Scalars['Int'];
  fullsentence: Scalars['String'];
  hang_id: Scalars['Int'];
  id: Scalars['Float'];
  kind: Scalars['String'];
  made_by_nickname?: Maybe<Scalars['Int']>;
  month: Scalars['Int'];
  rank?: Maybe<Scalars['String']>;
  recommend_count: Scalars['Int'];
  school_grade: Scalars['String'];
  tag: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['Int']>;
  year: Scalars['Int'];
};

export type Completion_tag = {
  __typename?: 'Completion_tag';
  completion: Completion;
  completion_id: Scalars['Int'];
  completion_kind: Scalars['String'];
  completion_rank?: Maybe<Scalars['String']>;
  completion_school_grade: Scalars['String'];
  completion_sentence: Scalars['String'];
  completion_tag: Scalars['String'];
  createdAt: Scalars['DateTime'];
  hang_id: Scalars['Int'];
  id: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type TagGroupAllList = {
  __typename?: 'TagGroupAllList';
  id: Scalars['Float'];
  kind: Scalars['String'];
  schoolGrade: UserSchoolGrade;
  tag: Scalars['String'];
  tagGroup: Scalars['String'];
  th: Scalars['Int'];
};
