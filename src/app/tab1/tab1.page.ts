import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonRange, IonDatetimeButton, IonDatetime, IonModal, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonRange, IonDatetimeButton, IonDatetime, IonModal, IonInput],
})
export class Tab1Page {

  public age: number = 0;
  public maxAge: number = 100;

  public names = [
    "Giovanni",
    "Francesco",
    "Antonio"
  ];

  constructor() {}
}
