import { Page } from "ui/page";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DatabaseService } from '../database/sqlite.service';
import * as pageModule from "tns-core-modules/ui/page"

var view = require("ui/core/view");
var frame = require("ui/frame");

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public msg = '';
    public sideDrawer;
    //@ViewChild('page') public page;
    //@ViewChild('sideDrawer') public sideDrawer;

    constructor(
        private db: DatabaseService
    ) {
    }

    ngOnInit(): void {

        // Init your component properties here.
        //

//        this.db.promise.then((db) => {
//            db.execSQL('INSERT INTO Message (msg) VALUES (?)', ['sdfsdfsadf']);
//        });
//        // Use the component constructor to inject providers.
//
//        this.db.promise.then((db) => {
//            db.get("SELECT msg FROM Message ORDER BY id DESC LIMIT 1").then( (row) => {
//                this.msg = row;
//                console.log("msg: "+this.msg);
//            });
//        });

    }

    public toggleDrawer(args: any) {
        let sideDrawer = eval('getElementById("sideDrawer")');

        let s = view.getViewById(sideDrawer.page, 'sideDrawer');
        for(let k in s) {
            console.log('sideDrawer:      ' + k);
        }

        console.log('sideDrawer: '+s.page);
        s.toggleDrawerState();
    }
}
