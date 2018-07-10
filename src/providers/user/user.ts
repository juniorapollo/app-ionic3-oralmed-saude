import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './../../models/user.model';


@Injectable()
export class UserProvider {

    public user:User;
  constructor() {
    
}

  create(user : string){
      localStorage.setItem('principal',user);
  }

  setUser(user:User){
    this.user = user;
  }

  getUser():User{
    return this.user;
  }

}
