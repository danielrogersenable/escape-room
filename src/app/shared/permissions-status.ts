import { Injectable, OnInit } from "@angular/core";
import { PermissionsStatusData } from "./permissions-status-data";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: 'root'
  })
export class PermissionsStatus implements OnInit {
    private permissionsStatusData: PermissionsStatusData = new PermissionsStatusData();

    constructor(private readonly _storageService: StorageService) {
        const permissionsStatusData = this._storageService.getPermissionsStateFromLocalStorage();
        if (permissionsStatusData) {
            this.permissionsStatusData = permissionsStatusData;
        } else {
            this.revokePermissions();
        }
    }

    public ngOnInit(): void {
    }

    public get getPermissionsStatusData(): PermissionsStatusData {
        return this.permissionsStatusData;
    }

    public revokePermissions() {
        this.permissionsStatusData = {
            isSignInPermitted: true,
            isSignOutPermitted: false,
            isContentsPermitted: false,
            isPuzzle1Permitted: false,
            isPuzzle2Permitted: false,
            isPuzzle3Permitted: false
        };
        this.storePermissionsStatusData();
    }

    public completeValidation() {
        this.permissionsStatusData.isSignInPermitted = false;
        this.permissionsStatusData.isSignOutPermitted = true;
        this.permitContents();
        this.permitPuzzle1();
    }
    
    public get getIsSignInPermitted(): boolean {
        return this.permissionsStatusData.isSignInPermitted;
    }

    public get getIsSignOutPermitted(): boolean {
        return this.permissionsStatusData.isSignOutPermitted;
    }

    public get getIsContentsPermitted(): boolean {
        return this.permissionsStatusData.isContentsPermitted;
    }

    public get getIsPuzzle1Permitted(): boolean {
        return this.permissionsStatusData.isPuzzle1Permitted;
    }

    public get getIsPuzzle2Permitted(): boolean {
        return this.permissionsStatusData.isPuzzle2Permitted;
    }

    public get getIsPuzzle3Permitted(): boolean {
        return this.permissionsStatusData.isPuzzle3Permitted;
    }

    public setPuzzle1Complete() {
        this.permitPuzzle2();
    }

    public setPuzzle2Complete() {
        this.permitPuzzle3();
    }

    public setPuzzle3Complete() {
    }

    private permitContents() {
        this.permissionsStatusData.isContentsPermitted = true;
        this.storePermissionsStatusData();
    }

    private permitPuzzle1() {
        this.permissionsStatusData.isPuzzle1Permitted = true;
        this.storePermissionsStatusData();
    }

    private permitPuzzle2() {
        this.permissionsStatusData.isPuzzle2Permitted = true;
        this.storePermissionsStatusData();
    }

    private permitPuzzle3() {
        this.permissionsStatusData.isPuzzle3Permitted = true;
        this.storePermissionsStatusData();
    }

    private storePermissionsStatusData() {
        this._storageService.setPermissionsStateInLocalStorage(this.permissionsStatusData);
    }
}