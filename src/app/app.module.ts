import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {SearchPage} from '../pages/search/search';
import {ChatPage} from '../pages/chat/chat';
import {AccountPage} from '../pages/account/account';
import {Profile} from '../pages/account/profile';
import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {AuthService} from '../providers/auth-service';
import {PostService} from '../providers/post-service';
import {RegisterPage} from '../pages/register/register';
import {MY_CONFIG_TOKEN, MY_CONFIG, ApplicationConfig} from './app-config';
import {MarkPage} from '../pages/mark/mark';
import {Storage} from '@ionic/storage';

@NgModule({
    declarations: [
        MyApp, TabsPage,Profile, ListPage, SearchPage, HomePage, ChatPage, AccountPage, LoginPage, RegisterPage, MarkPage
    ],
    imports: [
        IonicModule.forRoot(MyApp, {
            menuType: 'push',
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp, TabsPage,Profile, ListPage, SearchPage, HomePage, ChatPage, AccountPage, LoginPage, RegisterPage, MarkPage,

    ],
    providers: [
        {provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG},
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AuthService, Storage,
        PostService]
})
export class AppModule {}
