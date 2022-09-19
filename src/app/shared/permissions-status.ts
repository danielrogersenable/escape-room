export class PermissionsStatus {
    private isSignInPermitted: boolean = true;
    private isSignOutPermitted: boolean = false;

    private isContentsPermitted: boolean = false;
    private isPuzzle1Permitted: boolean = false;
    private isPuzzle2Permitted: boolean = false;
    private isPuzzle3Permitted: boolean = false;

    public revokePermissions() {
        this.isSignInPermitted = true;
        this.isSignOutPermitted = false;

        this.isContentsPermitted = false;
        this.isPuzzle1Permitted = false;
        this.isPuzzle2Permitted = false;
        this.isPuzzle3Permitted = false;
    }

    public completeValidation() {
        this.isSignInPermitted = false;
        this.isSignOutPermitted = true;
        this.permitContents();
        this.permitPuzzle1();
    }
    
    public get getIsSignInPermitted(): boolean {
        return this.isSignInPermitted;
    }

    public get getIsSignOutPermitted(): boolean {
        return this.isSignOutPermitted;
    }

    public get getIsContentsPermitted(): boolean {
        return this.isContentsPermitted;
    }

    public get getIsPuzzle1Permitted(): boolean {
        return this.isPuzzle1Permitted;
    }

    public get getIsPuzzle2Permitted(): boolean {
        return this.isPuzzle2Permitted;
    }

    public get getIsPuzzle3Permitted(): boolean {
        return this.isPuzzle3Permitted;
    }

    public setPuzzle1Complete() {
        this.permitPuzzle2();
    }

    public setPuzzle2Complete() {
        console.log('permitting puzzle 3');
        this.permitPuzzle3();
    }

    public setPuzzle3Complete() {
    }

    private permitContents() {
        this.isContentsPermitted = true;
    }

    private permitPuzzle1() {
        this.isPuzzle1Permitted = true;
    }

    private permitPuzzle2() {
        this.isPuzzle2Permitted = true;
    }

    private permitPuzzle3() {
        this.isPuzzle3Permitted = true;
    }
}