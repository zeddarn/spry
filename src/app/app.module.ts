import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MultiPickerModule} from 'ion-multi-picker';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {SearchPage} from '../pages/search/search';
import {ChatPage} from '../pages/chat/chat';
import {AccountPage} from '../pages/account/account';
import {Profile} from '../pages/account/profile';
import {LocationPage} from '../pages/account/location';
import {BlockContact} from '../pages/account/block.contacts';
import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {AuthService} from '../providers/auth-service';
import {PostService} from '../providers/post-service';
import {RegisterPage} from '../pages/register/register';
import {MY_CONFIG_TOKEN, MY_CONFIG, ApplicationConfig} from './app-config';
import {MarkPage} from '../pages/mark/mark';
import {PostConfirm} from '../pages/mark/post.confirm';
import {Storage} from '@ionic/storage';
import {IonicGallery} from './ionic-gallery';

@NgModule({
    declarations: [
        MyApp, TabsPage, Profile,
        ListPage, SearchPage, HomePage, ChatPage, AccountPage, LoginPage, RegisterPage, MarkPage,
        LocationPage, BlockContact,PostConfirm
    ],
    imports: [
        IonicModule.forRoot(MyApp, {
            menuType: 'push',
        }),
        MultiPickerModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp, TabsPage, Profile, ListPage, SearchPage, HomePage, ChatPage, AccountPage, LoginPage, RegisterPage, MarkPage,
        LocationPage, BlockContact,PostConfirm

    ],
    providers: [
        {provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG},
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AuthService, Storage,IonicGallery,
        PostService]
})
export class AppModule {}
