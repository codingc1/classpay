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
  cp_allProducts: Array<CP_Product>;
  cp_me: CP_User;
  cp_MyBills: Array<CP_Bill>;
  cp_myProducts: Array<CP_Product>;
  cp_PayInfo: CP_PayOutput;
  cp_PayInfoApp: CP_PayAppOutput;
  cp_pays: Array<CP_Pay>;
  cp_PayUserLists: Array<CP_User>;
  cp_refreshToken: LoginOutput;
  getDevelTeacherProjectList: QueryDevelTeacherProjectsOutput;
  getStudentListForCheck: Array<Student>;
  getVersion: ClientVersionsOutput;
  me: User;
  myHangStudents: HangStudentsOutput;
  refreshToken: LoginOutput;
  tagListGrade: TagsListMuOutput;
  thisyearsQuery: DiThisyearsOutput;
  timeTablesQuery: DiTimetablesOutput;
  userList: UserListOutput;
  userSettingQuery: SettingOutput;
};


export type Querycp_allProductsArgs = {
  id: Scalars['Int'];
};


export type Querycp_MyBillsArgs = {
  id: Scalars['Int'];
};


export type Querycp_myProductsArgs = {
  id: Scalars['Int'];
};


export type Querycp_PayInfoArgs = {
  id: Scalars['Int'];
};


export type Querycp_PayInfoAppArgs = {
  id: Scalars['Int'];
};


export type Querycp_PayUserListsArgs = {
  id: Scalars['Int'];
};


export type QuerygetStudentListForCheckArgs = {
  input: MyStudentsInput;
};


export type QuerytagListGradeArgs = {
  input: GradeTagsListInput;
};


export type QuerytimeTablesQueryArgs = {
  input: DiTimetablesInput;
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

export type CP_User = {
  __typename?: 'CP_User';
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  joinclasspay: Array<CP_Pay>;
  mainId: Scalars['String'];
  name: Scalars['String'];
  number: Scalars['Int'];
  password: Scalars['String'];
  paymoney: Array<CP_PayMoney>;
  position: POSITION;
  updatedAt: Scalars['DateTime'];
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
  paymoney: Array<CP_PayMoney>;
  schoolName: Scalars['String'];
  subAdmin: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: Array<CP_User>;
  user_id: Scalars['Float'];
};

export type CP_PayMoney = {
  __typename?: 'CP_PayMoney';
  classpay: CP_Pay;
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  money: Scalars['Int'];
  pay_id: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user: CP_User;
  user_id: Scalars['Float'];
};

export enum POSITION {
  Parent = 'Parent',
  Student = 'Student',
  Teacher = 'Teacher'
}

export type CP_Bill = {
  __typename?: 'CP_Bill';
  consumer_id: Scalars['Int'];
  cppay_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  desciption: Scalars['String'];
  id: Scalars['Float'];
  imgurl: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  qty: Scalars['Int'];
  seller_id: Scalars['Int'];
  sumPrice: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type CP_PayOutput = {
  __typename?: 'CP_PayOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<CP_Pay>;
};

export type CP_PayAppOutput = {
  __typename?: 'CP_PayAppOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<CPPayAppOutputObj>;
};

export type CPPayAppOutputObj = {
  __typename?: 'CPPayAppOutputObj';
  cppay: CP_Pay;
  paymoney: CP_PayMoney;
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type QueryDevelTeacherProjectsOutput = {
  __typename?: 'QueryDevelTeacherProjectsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<DevelTeacher>>;
};

export type DevelTeacher = {
  __typename?: 'DevelTeacher';
  className: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  nickname: Scalars['String'];
  numberOfSt: Scalars['Int'];
  projectid: Scalars['Int'];
  projectName: Scalars['String'];
  teacherid: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
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
  id: Scalars['Float'];
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
  hang_id: Scalars['Int'];
  id: Scalars['Float'];
  user_id: Scalars['Int'];
};

export enum UserSchoolGrade {
  Ele = 'Ele',
  High = 'High',
  Middle = 'Middle',
  Nomal = 'Nomal'
}

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
  hangTag: Array<HangTag>;
  hangTagGroup: Array<HangTagGroup>;
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

export type HangTag = {
  __typename?: 'HangTag';
  hang: Hang;
  id: Scalars['Float'];
  tag: Scalars['String'];
};

export type HangTagGroup = {
  __typename?: 'HangTagGroup';
  hang: Hang;
  id: Scalars['Float'];
  tagGroup: Scalars['String'];
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
  Ele = 'Ele',
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
  assistTagGroupFullHangs: FullHangsOutput;
  checkHangPassword: BasicOutput;
  checkPossibleId: CheckPossibleIdOutput;
  checkPossibleNickname: CheckPossibleIdOutput;
  confirmPassword: VerifyEmailOutput;
  cp_buyingTrade: CoreOutput;
  cp_buyProduct: CoreOutput;
  cp_CreateClassPay: CoreOutput;
  cp_createProduct: CoreOutput;
  cp_CreateStudents: CP_CheckPossibleIsdOutput;
  cp_CreateTeacher: CoreOutput;
  cp_DeleteClassPay: CoreOutput;
  cp_deleteProduct: CoreOutput;
  cp_editProfile: CoreOutput;
  cp_getBuyTmpTrade: CP_TradeTmpCodeOutput;
  cp_login: LoginOutput;
  cp_PayPossibleName: CoreOutput;
  cp_sellingStart: CP_TradeTmpCodeOutput;
  cp_sellingStop: CoreOutput;
  cp_studentsPossibleIds: CoreOutput;
  cp_userProfile: CP_SomeProfileOutput;
  cp_withdrawUserPay: CoreOutput;
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
  createHangStudents: HangStudentsOutput;
  createMemo: MemoOutput;
  createModifySen: HangOneOutput;
  createPopup: PopupOutput;
  createPopupClick: PopupOutput;
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
  deleteBoardContent: BoardCoreOutPut;
  deleteChangChe: BasicOutput;
  deleteComment: ViewCommentsOutput;
  deleteFullsentence: BasicOutput;
  deleteHang: DeleteHangOutput;
  deleteHangCombiTag: HangCombiOutput;
  deleteHangStudent: BasicOutput;
  deleteStClass: MyStClassesOutput;
  deleteStudent: MyStudentsOutput;
  delOneClassStudent: MyStudentsOutput;
  delStCheckView: WeeklyStCheckViewsOutput;
  developerBasicInfo: DeveloperOutPut;
  developerCode: DeveloperSignupOutPut;
  developerDelProject: DevelCoreOutPut;
  developerEditProject: DeveloperOutPut;
  developerProjectList: DeveloperProjectListAndNumOutPut;
  developerSignup: DeveloperSignupOutPut;
  develTeacherProjectList: ViewDevelTeacherProjectsOutput;
  develTeacherProjectSignup: ViewDevelTeacherProjectsOutput;
  develTeacherStudentsDevelList: DevelTeacherStudentsDevelListOutput;
  editHang: EditHangOutput;
  editProfile: EditProfileOutput;
  getChangChes: FullChangsOutput;
  getFullHangs: FullHangsOutput;
  hangById: HangOneOutput;
  hangCountDown: BasicOutput;
  hangMarkCopy: HangMarkCopyOutput;
  hangs: HangsOutput;
  hangsMid: HangsOutput;
  login: LoginOutput;
  modifyBoardContent: BoardCoreOutPut;
  modifySeveralStudents: MyStudentsOutput;
  monthlyDiClasses: DiClassesOutput;
  monthlyMemos: WeeklyMemosOutput;
  monthlyWorks: WeeklyWorksOutput;
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
  refreshTokenMu: LoginOutput;
  resetHangCount: BasicOutput;
  resetHangStudents: BasicOutput;
  restoreModifySentence: HangModifySenOutput;
  sendFindPasswordEmail: VerifyEmailOutput;
  tagListGradeMu: TagsListMuOutput;
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
  viewBoards: ViewBoardsOutput;
  viewComments: ViewCommentsOutput;
  viewDevels: ViewDevelsOutput;
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


export type MutationassistTagGroupFullHangsArgs = {
  input: AssistTagGroupInput;
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


export type Mutationcp_buyProductArgs = {
  input: CP_BuyProductIdInput;
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
  input: CP_PayIdAndIDInput;
};


export type Mutationcp_editProfileArgs = {
  input: CP_EditProfileInput;
};


export type Mutationcp_getBuyTmpTradeArgs = {
  input: CP_GetTradeTmpCodeInput;
};


export type Mutationcp_loginArgs = {
  input: CP_LoginInput;
};


export type Mutationcp_PayPossibleNameArgs = {
  input: CP_PayPossibleNameInput;
};


export type Mutationcp_sellingStartArgs = {
  input: CP_BuyProductIdInput;
};


export type Mutationcp_sellingStopArgs = {
  input: IdOnlyInput;
};


export type Mutationcp_studentsPossibleIdsArgs = {
  input: CheckPossibleIdsInput;
};


export type Mutationcp_userProfileArgs = {
  input: CP_UserProfileInInput;
};


export type Mutationcp_withdrawUserPayArgs = {
  input: CpWithdrawUserPayInput;
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


export type MutationdeleteHangStudentArgs = {
  input: IdOnlyInput;
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


export type MutationdeveloperSignupArgs = {
  input: DeveloperSignupInput;
};


export type MutationdevelTeacherProjectSignupArgs = {
  input: DevelTeacherProjectsSignupInput;
};


export type MutationdevelTeacherStudentsDevelListArgs = {
  input: DevelTeacherStudentsDevelListInput;
};


export type MutationeditHangArgs = {
  input: EditHangInput;
};


export type MutationeditProfileArgs = {
  input: EditProfileInput;
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


export type MutationhangCountDownArgs = {
  input: CreateHangCountInput;
};


export type MutationhangsArgs = {
  input: HangsInput;
};


export type MutationhangsMidArgs = {
  input: HangsInput;
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


export type MutationresetHangCountArgs = {
  input: ResetHangCountInput;
};


export type MutationrestoreModifySentenceArgs = {
  input: RestoreModifySentenceInput;
};


export type MutationsendFindPasswordEmailArgs = {
  input: FindPasswordEmailInput;
};


export type MutationtagListGradeMuArgs = {
  input: GradeTagsListInput;
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


export type MutationviewBoardsArgs = {
  input: ViewBoardsInput;
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
  fullHang_id?: Scalars['Int'];
  kind: Scalars['String'];
  mark?: Scalars['Float'];
  schoolGrade?: UserSchoolGrade;
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
  fullHang_id: Scalars['Int'];
  id: Scalars['Float'];
  kind: Scalars['String'];
  mark: Scalars['Float'];
  schoolGrade: UserSchoolGrade;
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
  fullSenExtra: Scalars['String'];
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
  fullSenExtra: Scalars['String'];
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
  totalResults?: Maybe<Scalars['Float']>;
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
  tag?: Array<Scalars['String']>;
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
  totalResults?: Maybe<Scalars['Float']>;
};

export type AllPopupInput = {
  page?: InputMaybe<Scalars['Int']>;
  serviceName?: InputMaybe<ServiceName>;
};

export type AssistTagGroupInput = {
  id: Scalars['Float'];
  kind?: Scalars['String'];
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
  totalResults?: Maybe<Scalars['Float']>;
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
  cppay_id: Scalars['Int'];
};

export type CP_BuyProductIdInput = {
  cppay_id: Scalars['Int'];
  product_id: Scalars['Int'];
  qty?: Scalars['Int'];
};

export type CP_CreateClassPayInput = {
  className?: Scalars['String'];
  classNum?: Scalars['Int'];
  classTh?: Scalars['Int'];
  schoolName?: Scalars['String'];
};

export type CP_CreateProductIdInput = {
  cppay_id: Scalars['Int'];
  desciption: Scalars['String'];
  imgurl?: Scalars['String'];
  name: Scalars['String'];
  price?: Scalars['Int'];
  qty?: Scalars['Int'];
};

export type CreateCpStudentsInput = {
  payid: Scalars['Int'];
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
  name?: Scalars['String'];
  password: Scalars['String'];
};

export type CP_PayIdAndIDInput = {
  id: Scalars['Int'];
  payid: Scalars['Int'];
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
  consumer_id: Scalars['Int'];
  cppay_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  name: Scalars['String'];
  price: Scalars['Int'];
  product_id: Scalars['Int'];
  qty: Scalars['Int'];
  seller_id: Scalars['Int'];
  sumPrice: Scalars['Int'];
};

export type CP_LoginInput = {
  mainId: Scalars['String'];
  password: Scalars['String'];
};

export type CP_PayPossibleNameInput = {
  className?: Scalars['String'];
};

export type CheckPossibleIdsInput = {
  mainIds: Array<Scalars['String']>;
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

export type CpWithdrawUserPayInput = {
  payid: Scalars['Int'];
  studentids: Array<Scalars['Int']>;
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
  content: Scalars['String'];
  kind?: Scalars['String'];
  name: Scalars['String'];
  title: Scalars['String'];
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

export type ViewBoardContentsInput = {
  id: Scalars['Float'];
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

export type DeveloperOutPut = {
  __typename?: 'DeveloperOutPut';
  develProject?: Maybe<DevelProject>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DevelProject = {
  __typename?: 'DevelProject';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  projectName: Scalars['String'];
  readCount: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userid: Scalars['Int'];
  writeCount: Scalars['Int'];
};

export type DeveloperSignupOutPut = {
  __typename?: 'DeveloperSignupOutPut';
  code?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DevelCoreOutPut = {
  __typename?: 'DevelCoreOutPut';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeveloperProjectListAndNumOutPut = {
  __typename?: 'DeveloperProjectListAndNumOutPut';
  develNum?: Maybe<Scalars['Int']>;
  develTeachers?: Maybe<Array<DevelTeacher>>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeveloperSignupInput = {
  projectName: Scalars['String'];
};

export type ViewDevelTeacherProjectsOutput = {
  __typename?: 'ViewDevelTeacherProjectsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<DevelTeacher>>;
};

export type DevelTeacherProjectsSignupInput = {
  className?: InputMaybe<Scalars['String']>;
  numberOfSt: Scalars['Float'];
  projectName: Scalars['String'];
};

export type DevelTeacherStudentsDevelListInput = {
  className: Scalars['String'];
  projectName: Scalars['String'];
};

export type DevelTeacherStudentsDevelListOutput = {
  __typename?: 'DevelTeacherStudentsDevelListOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<Devel>>;
};

export type Devel = {
  __typename?: 'Devel';
  className: Scalars['String'];
  createdAt: Scalars['DateTime'];
  date: Scalars['Int'];
  id: Scalars['Float'];
  month: Scalars['Int'];
  name: Scalars['String'];
  projectName: Scalars['String'];
  stNumber: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  valStr: Scalars['String'];
  valueNum1: Scalars['Int'];
  valueNum2: Scalars['Int'];
  year: Scalars['Int'];
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
  totalResults?: Maybe<Scalars['Float']>;
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
  school_grade?: InputMaybe<Array<UserSchoolGrade>>;
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
  fullHang_id?: Scalars['Int'];
  id: Scalars['Float'];
  kind: Scalars['String'];
  mark?: Scalars['Float'];
  schoolGrade?: UserSchoolGrade;
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
  fullHang_id?: Scalars['Int'];
  id: Scalars['Float'];
  kind: Scalars['String'];
  mark?: Scalars['Float'];
  schoolGrade?: UserSchoolGrade;
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

export type ViewBoardContentsOutput = {
  __typename?: 'ViewBoardContentsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<Board>;
};

export type Board = {
  __typename?: 'Board';
  commentNum: Scalars['Int'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  date: Scalars['Int'];
  hits: Scalars['Int'];
  id: Scalars['Float'];
  kind: Scalars['String'];
  month: Scalars['Int'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  recommend: Scalars['Int'];
  schoolGrade: UserSchoolGrade;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userid: Scalars['Int'];
  year: Scalars['Int'];
};

export type ViewBoardsInput = {
  kind?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  page?: Scalars['Int'];
};

export type ViewBoardsOutput = {
  __typename?: 'ViewBoardsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<Board>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type ViewCommentsInput = {
  boardid: Scalars['Float'];
};

export type ViewDevelsOutput = {
  __typename?: 'ViewDevelsOutput';
  develNum?: Maybe<Scalars['Float']>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<Devel>>;
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
  pendingSelling: CP_BillOutput;
};


export type SubscriptionpendingSellingArgs = {
  tradetmpcode_id: Scalars['Int'];
};

export type CP_BillOutput = {
  __typename?: 'CP_BillOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<CP_Bill>;
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
