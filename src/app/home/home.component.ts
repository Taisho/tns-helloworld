import { Component, OnInit } from "@angular/core";
import { DatabaseService } from '../database/sqlite.service';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public msg = '';

    constructor(
        private db: DatabaseService
    ) {
    }

    ngOnInit(): void {
        // Init your component properties here.
        //

        this.db.promise.then((db) => {
            db.execSQL('INSERT INTO Message (msg) VALUES (?)', ['sdfsdfsadf']);
        });
        // Use the component constructor to inject providers.

        this.db.promise.then((db) => {
            db.get("SELECT msg FROM Message ORDER BY id DESC LIMIT 1").then( (row) => {
                this.msg = row;
                console.log("msg: "+this.msg);
            });
        });

    }
}
