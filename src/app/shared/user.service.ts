import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable()
export class UserService {
    register(user: User) {
        return new Promise((resolve, reject) => {
           resolve(); 
        });
    }

    login(user: User) {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    resetPassword(email) {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

}

