import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  bootstrap: [HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MessageModule,
    TabMenuModule,
    ButtonModule
  ],
})
export class HomeModule {
}
