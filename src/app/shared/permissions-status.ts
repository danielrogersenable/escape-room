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
            isIntroPermitted: false,
            isContentsPermitted: false,
            isPuzzle1Permitted: false,
            isPuzzle2Permitted: false,
            isPuzzle3Permitted: false,
            isPuzzle4Permitted: false,
            isPuzzle5Permitted: false,
            isPuzzle6Permitted: false,
            isPuzzle7Permitted: false,
            isPuzzle8Permitted: false,
            isPuzzle9Permitted: false,
            isPuzzle10Permitted: false,
            isPuzzle11Permitted: false,
            isPuzzle12Permitted: false,
            isPuzzle13Permitted: false,
            isPuzzle14Permitted: false,
            isConclusionPermitted: false,
        };
        this.storePermissionsStatusData();
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

    public get getIsIntroPermitted(): boolean {
        return this.permissionsStatusData.isIntroPermitted;
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

    public get getIsPuzzle4Permitted(): boolean {
        return this.permissionsStatusData.isPuzzle4Permitted;
    }

    public get getIsPuzzle5Permitted(): boolean {
        return this.permissionsStatusData.isPuzzle5Permitted;
    }

    public get getIsPuzzle6Permitted(): boolean {
        return this.permissionsStatusData.isPuzzle6Permitted;
    }

    public get getIsPuzzle7Permitted(): boolean {
        return this.permissionsStatusData.isPuzzle7Permitted;
    }

    public get getIsPuzzle8Permitted(): boolean {
        return this.permissionsStatusData.isPuzzle8Permitted;
    }

    public get getIsPuzzle9Permitted(): boolean {
        return this.permissionsStatusData.isPuzzle9Permitted;
    }

    public get getIsPuzzle10Permitted(): boolean {
        return this.permissionsStatusData.isPuzzle10Permitted;
    }

    public get getIsPuzzle11Permitted(): boolean {
        return this.permissionsStatusData.isPuzzle11Permitted;
    }

    public get getIsPuzzle12Permitted(): boolean {
        return this.permissionsStatusData.isPuzzle12Permitted;
    }

    public get getIsPuzzle13Permitted(): boolean {
        return this.permissionsStatusData.isPuzzle13Permitted;
    }

    public get getIsPuzzle14Permitted(): boolean {
        return this.permissionsStatusData.isPuzzle14Permitted;
    }

    public get getIsConclusionPermitted(): boolean {
        return this.permissionsStatusData.isConclusionPermitted;
    }

    public completeValidation() {
        this.permissionsStatusData.isSignInPermitted = false;
        this.permissionsStatusData.isSignOutPermitted = true;
        this.permitContents();
        this.permitIntro();
    }
    
    public setIntroComplete() {
        this.permitPuzzle1();
        this.permitPuzzle2();
        this.permitPuzzle3();
    }

    public setPuzzle1Complete() {
        this.permitPuzzle4();
    }

    public setPuzzle2Complete() {
        this.permitPuzzle4();
    }

    public setPuzzle3Complete() {
        this.permitPuzzle4();
    }

    public setPuzzle4Complete() {
        this.permitPuzzle5();
        this.permitPuzzle6();
        this.permitPuzzle7();
    }

    public setPuzzle5Complete() {
        this.permitPuzzle8();
    }

    public setPuzzle6Complete() {
        this.permitPuzzle8();
    }

    public setPuzzle7Complete() {
        this.permitPuzzle8();
    }

    public setPuzzle8Complete() {
        this.permitPuzzle9();
    }

    public setPuzzle9Complete() {
        this.permitPuzzle10();
        this.permitPuzzle11();
        this.permitPuzzle12();
        this.permitPuzzle13();
    }

    public setPuzzle10Complete() {
    }

    public setPuzzle11Complete() {
    }

    public setPuzzle12Complete() {
    }

    public setPuzzle13Complete() {
        this.permitPuzzle14();
    }

    public setPuzzle14Complete() {
    }

    public setAllPuzzlesComplete() {
        this.permitConclusion();
    }

    private permitIntro() {
        this.permissionsStatusData.isIntroPermitted = true;
        this.storePermissionsStatusData();
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

    private permitPuzzle4() {
        this.permissionsStatusData.isPuzzle4Permitted = true;
        this.storePermissionsStatusData();
    }

    private permitPuzzle5() {
        this.permissionsStatusData.isPuzzle5Permitted = true;
        this.storePermissionsStatusData();
    }

    private permitPuzzle6() {
        this.permissionsStatusData.isPuzzle6Permitted = true;
        this.storePermissionsStatusData();
    }

    private permitPuzzle7() {
        this.permissionsStatusData.isPuzzle7Permitted = true;
        this.storePermissionsStatusData();
    }

    private permitPuzzle8() {
        this.permissionsStatusData.isPuzzle8Permitted = true;
        this.storePermissionsStatusData();
    }

    private permitPuzzle9() {
        this.permissionsStatusData.isPuzzle9Permitted = true;
        this.storePermissionsStatusData();
    }

    private permitPuzzle10() {
        this.permissionsStatusData.isPuzzle10Permitted = true;
        this.storePermissionsStatusData();
    }

    private permitPuzzle11() {
        this.permissionsStatusData.isPuzzle11Permitted = true;
        this.storePermissionsStatusData();
    }

    private permitPuzzle12() {
        this.permissionsStatusData.isPuzzle12Permitted = true;
        this.storePermissionsStatusData();
    }

    private permitPuzzle13() {
        this.permissionsStatusData.isPuzzle13Permitted = true;
        this.storePermissionsStatusData();
    }

    private permitPuzzle14() {
        this.permissionsStatusData.isPuzzle14Permitted = true;
        this.storePermissionsStatusData();
    }

    private permitConclusion() {
        this.permissionsStatusData.isConclusionPermitted = true;
        this.storePermissionsStatusData();
    }

    private storePermissionsStatusData() {
        this._storageService.setPermissionsStateInLocalStorage(this.permissionsStatusData);
    }
}