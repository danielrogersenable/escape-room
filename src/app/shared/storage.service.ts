import { Injectable } from '@angular/core';
import { AnswerStatus } from './answer-status';
import { AnswerStatusData } from './answer-status-data';
import { PermissionsStatus } from './permissions-status';
import { PermissionsStatusData } from './permissions-status-data';
import { VisibilityStatus } from './visibility-status';
import { VisibilityStatusData } from './visibility-status-data';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  private readonly _answerStatus = 'answer-status';
  private readonly _permissionsStatus = 'permissions-status';
  private readonly _visibilityStatus = 'visibility-status';
  private readonly _isValidatedStatus = 'is-validated';

  public setAnswerStateInLocalStorage(answerStatus: AnswerStatus): void {
    if (answerStatus) {
      localStorage.setItem(this._answerStatus, JSON.stringify(answerStatus.getAnswerStatusData));  
    }
  }

  public setPermissionsStateInLocalStorage(permissionsStatus: PermissionsStatus): void {
    if (permissionsStatus) {
      localStorage.setItem(this._permissionsStatus, JSON.stringify(permissionsStatus.getPermissionsStatusData));  
    }
  }

  public setVisibilityStateInLocalStorage(visibilityStatus: VisibilityStatus): void {
    if (visibilityStatus) {
      localStorage.setItem(this._visibilityStatus, JSON.stringify(visibilityStatus.getVisibilityStatusData));  
    }
  }

  public setIsValidated(isValidated: boolean): void {
    localStorage.setItem(this._isValidatedStatus, JSON.stringify(isValidated));
  }

  public getAnswerStateFromLocalStorage(): AnswerStatus {
    const answerStatusDataString = localStorage.getItem(this._answerStatus);

    if (!answerStatusDataString) {
      return new AnswerStatus();
    } else {
      let answerStatusData: AnswerStatusData = JSON.parse(answerStatusDataString);
      return new AnswerStatus(answerStatusData);
    }
  }

  public getPermissionsStateFromLocalStorage(): PermissionsStatus {
    const permissionsStatusDataString = localStorage.getItem(this._permissionsStatus);

    if (!permissionsStatusDataString) {
      return new PermissionsStatus();
    } else {
      let permissionsStatusData: PermissionsStatusData = JSON.parse(permissionsStatusDataString);
      return new PermissionsStatus(permissionsStatusData);
    }
  }

  public getVisibilityStateFromLocalStorage(): VisibilityStatus {
    const visibilityStatusDataString = localStorage.getItem(this._visibilityStatus);

    if (!visibilityStatusDataString) {
      return new VisibilityStatus();
    } else {
      let visibilityStatusData: VisibilityStatusData = JSON.parse(visibilityStatusDataString);
      return new VisibilityStatus(visibilityStatusData);
    }
  }

  public getIsValidated(): boolean {
    const isValdatedString = localStorage.getItem(this._isValidatedStatus);
    if (!isValdatedString) {
      return false;
    } else {
      const isValidated: boolean = JSON.parse(isValdatedString);
      return isValidated;
    }
  }
}
