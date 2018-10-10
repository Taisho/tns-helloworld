import { Injectable } from '@angular/core';
var Sqlite = require("nativescript-sqlite");

@Injectable({
    providedIn: 'root',
})
export class DatabaseService {

    public promise = new Sqlite("HelloWorld");

    constructor() {
        this.promise.then((db) => {
            db.execSQL(`CREATE TABLE IF NOT EXISTS Message (
                id INTEGER PRIMARY KEY,
                msg TEXT
            )`);
        });

    }
}
