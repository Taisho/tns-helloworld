import { Page } from "ui/page";
import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { DatabaseService } from '../database/sqlite.service';
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
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
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    public items = [
        { title: "Title1"},
        { title: "Title2"},
    ];

    constructor(
        private db: DatabaseService,
        private _changeDetectionRef: ChangeDetectorRef,
    ) {
    }

     ngAfterViewInit() {
         this.drawer = this.drawerComponent.sideDrawer;
         this._changeDetectionRef.detectChanges();
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

    public onNavigationItemTap(event: any) {
        console.log("navigated");
    }

    public toggleDrawer(args: any) {
        this.drawer.toggleDrawerState();
    }
}
