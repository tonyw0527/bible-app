import { toJS, runInAction, autorun, makeAutoObservable } from 'mobx';
import axios from 'axios';
import Cookies from 'js-cookie';

export default class UserStore {
  // states
  invitation_code: string = "";
  isAuth: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.requestAuth();

    // reactions
    autorun(() => {
      console.log("From server - isAuth", this.isAuth);
    });
  }

  // actions
  updateInvitationCode(code: string){
    this.invitation_code = code;
    Cookies.set("invicode", code, { expires: 30 });
  }

  async requestAuth() {
    try {
      const result = await axios.get(`/api/auth`, {
        withCredentials: true,
      });
      runInAction(() => {
        this.isAuth = result.data.success;
      });
    } catch (error) {
      runInAction(() => {
        this.isAuth = error.response.data.success;
      });
    }
  }
}