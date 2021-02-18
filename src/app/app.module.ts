import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebcamModule } from 'ngx-webcam';
import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
