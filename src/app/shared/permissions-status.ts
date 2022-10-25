import { PermissionsStatusData } from "./permissions-status-data";

export class PermissionsStatus {
    private permissionsStatusData: PermissionsStatusData = null;

    constructor(permissionsStatusData: PermissionsStatusData = null) {
        if (permissionsStatusData) {
            this.permissionsStatusData = permissionsStatusData;
        } else {
            this.permissionsStatusData = {
                isSignInPermitted: true,
                isSignOutPermitted: false,
                isContentsPermitted: false,
                isPuzzle1Permitted: false,
                isPuzzle2Permitted: false,
                isPuzzle3Permitted: false
            };
        }
    }

    public get getPermissionsStatusData(): PermissionsStatusData {
        return this.permissionsStatusData;
    }

    public revokePermissions() {
        this.permissionsStatusData.isSignInPermitted = true;
        this.permissionsStatusData.isSignOutPermitted = false;

        this.permissionsStatusData.isContentsPermitted = false;
        this.permissionsStatusData.isPuzzle1Permitted = false;
        this.permissionsStatusData.isPuzzle2Permitted = false;
        this.permissionsStatusData.isPuzzle3Permitted = false;
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
    }

    private permitPuzzle1() {
        this.permissionsStatusData.isPuzzle1Permitted = true;
    }

    private permitPuzzle2() {
        this.permissionsStatusData.isPuzzle2Permitted = true;
    }

    private permitPuzzle3() {
        this.permissionsStatusData.isPuzzle3Permitted = true;
    }
}