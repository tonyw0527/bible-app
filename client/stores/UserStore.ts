import { toJS, runInAction, autorun, makeAutoObservable } from 'mobx';
import Cookies from 'js-cookie';

export default class UserStore {
  // states
  invitation_code: string = "";

  constructor() {
    makeAutoObservable(this);

    // reactions
    autorun(() => {
    });
  }

  // actions
  updateInvitationCode(code: string){
    this.invitation_code = code;
    Cookies.set("invicode", code, { expires: 30 });
  }    
}