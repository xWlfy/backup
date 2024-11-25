export type RootStackParamList = {
  Login: undefined;
  BottomTabs: BottomTabParamList;
};

export type BottomTabParamList = {
    Home: undefined;
    AR: { starId?: string };
    Settings: undefined;
  
};