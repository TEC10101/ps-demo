import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/user-settings.interface';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: IUserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  }
  singleModel = "On";
  startDate: Date;

  userSettings: IUserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;

  constructor(private _dataSvc: DataService) { }




  ngOnInit(): void {
    this.subscriptionTypes = this._dataSvc.getSubscriptionTypes();
    this.startDate = new Date();
    
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid)
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;

  }
  onSubmit(form: NgForm) {
    console.log('in onSubmit ', form.valid)

    // if (form.valid) {
    //   this._dataSvc.postUserSettingsForm(this.userSettings).subscribe(
    //     result => console.log('success: ', result),
    //     error => this.onHttpError(error)
    //   )
    // } else {
    //   this.postError = true;
    //   this.postErrorMessage = 'Please fix the above errors'
    // }
  }
}
