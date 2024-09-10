import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'retreatmore', 
  storage: sessionStorage,
});

export const recoilLoginState = atom({
  key: "loginState",
  default: false,
  effects_UNSTABLE: [persistAtom]
});

export const recoilUserData = atom({
  key: "userData",
  default: {
    userAccount : '',
    userNickName : '',
    userSort: '',
    userDetail : '',
    grade: ''
  },
  effects_UNSTABLE: [persistAtom]
});


export const recoilKaKaoLoginData = atom({
  key: "kakaoLoginData",
  default: {
    APIKEY : 'f6dca2dcdac48584ab0c8fe5d3d5f3f7',
    REDIRECT_URI_Auth : 'https://retreatmore.com/loginsns'
    // REDIRECT_URI_Auth : 'http://localhost:3000/loginsns'
  },
});


export const recoilNaverLoginData = atom({
  key: "naverLoginData",
  default: {
    CLIENTID : 'tLgOx8jBJPsvGMyeezLJ',
    SECRET : 'IWTXdDyQw7',
    REDIRECT_URI_Auth : 'https://retreatmore.com/loginsns'
    // REDIRECT_URI_Auth : 'http://localhost:3000/loginsns'
  },
});
