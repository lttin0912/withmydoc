import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/wmd/services/user.service';
import { MetadataService } from 'src/wmd/services/meta-data.service';
import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    
    constructor(private userService: UserService) {}

    ngOnInit() {
    }

    isAuthenticated() {
        let isLoggedIn = false;
        if (this.userService._authToken.getValue() !== '') {
          isLoggedIn = true;
        }
        return isLoggedIn;
    }
}
