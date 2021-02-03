import { runInAction, autorun, makeAutoObservable } from 'mobx';
import axios from 'axios';
import Cookies from 'js-cookie';

export default class UserStore {
  // states
  invitation_code: string;
  isAuth: boolean;

  constructor() {
    makeAutoObservable(this);
    this.invitation_code = "";
    this.isAuth = null;

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
    console.log("invicode in cookie", Cookies.get("invicode"))
    if(Cookies.get("invicode") === undefined){
      console.log("invicode cookie is undefined");
      return;
    }

    try {
      const result = await axios.get(`/api/auth`, {
        withCredentials: true,
      });
      console.log(result);
      runInAction(() => {
        this.isAuth = result.data.success;
      });
      return true;
    } catch (error) {
      runInAction(() => {
        console.log(error)
        this.isAuth = error.response.data.success;
      });
      return false;
    }
  }
}