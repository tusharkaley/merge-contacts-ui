import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdInputModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';

import { AppComponent } from './app.component';
import { GetDataService } from './get-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { UsersComponent } from './users/users.component';
import { UserContactsComponent } from './user-contacts/user-contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { DialogOverviewExampleDialog } from './user-contacts/user-contacts.component';
import { MergeSuggestionsComponent } from './merge-suggestions/merge-suggestions.component';


const appRoutes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users/:phone/contacts', component: UserContactsComponent },
  { path:'users/new', component:NewUserComponent},
  { path:'users/:phone/contacts/new', component:NewContactComponent},
  { path:'users/:phone/contacts/mergesuggestions', component:MergeSuggestionsComponent},

  

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserContactsComponent,
    NewUserComponent,
    NewContactComponent,
    DialogOverviewExampleDialog,
    MergeSuggestionsComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MdInputModule,
    MdGridListModule,
    BrowserModule,
    FormsModule,
    MdDialogModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
   entryComponents: [
    DialogOverviewExampleDialog
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
