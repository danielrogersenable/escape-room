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

  public setAnswerStateInLocalStorage(answerStatusData: AnswerStatusData): void {
    if (answerStatusData) {
      localStorage.setItem(this._answerStatus, JSON.stringify(answerStatusData));  
    }
  }

  public setPermissionsStateInLocalStorage(permissionsStatusData: PermissionsStatusData): void {
    if (permissionsStatusData) {
      localStorage.setItem(this._permissionsStatus, JSON.stringify(permissionsStatusData));  
    }
  }

  public setVisibilityStateInLocalStorage(visibilityStatusData: VisibilityStatusData): void {
    if (visibilityStatusData) {
      localStorage.setItem(this._visibilityStatus, JSON.stringify(visibilityStatusData));  
    }
  }

  public setIsValidated(isValidated: boolean): void {
    localStorage.setItem(this._isValidatedStatus, JSON.stringify(isValidated));
  }

  public getAnswerStateFromLocalStorage(): AnswerStatusData {
    const answerStatusDataString = localStorage.getItem(this._answerStatus);

    if (!answerStatusDataString) {
      return null;
    } else {
      return JSON.parse(answerStatusDataString);
    }
  }

  public getPermissionsStateFromLocalStorage(): PermissionsStatusData {
    const permissionsStatusDataString = localStorage.getItem(this._permissionsStatus);

    if (!permissionsStatusDataString) {
      return null;
    } else {
      return JSON.parse(permissionsStatusDataString);
    }
  }

  public getVisibilityStateFromLocalStorage(): VisibilityStatusData {
    const visibilityStatusDataString = localStorage.getItem(this._visibilityStatus);

    if (!visibilityStatusDataString) {
      return null;
    } else {
      return JSON.parse(visibilityStatusDataString);
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
