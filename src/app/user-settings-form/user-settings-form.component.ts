import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/user-settings.interface';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: IUserSettings = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'Some Notes'
  }

  userSettings: IUserSettings = { ...this.originalUserSettings };

  constructor() { }

  ngOnInit(): void {
  }

}
