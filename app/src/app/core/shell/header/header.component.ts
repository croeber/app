import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { I18nService } from '../../i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDropDownBoxOpened = false;
  menuHidden = true;
  selectedLanguage: any;
  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private i18nService: I18nService) { }

  ngOnInit() { }
  onItemClick(e: any) {
    switch (e.itemIndex) {
      case 0:
        this.router.navigate(['/home']);
        break;
      case 1:
        alert('No Implemented');
        break;
      case 2:
        this.isDropDownBoxOpened = !this.isDropDownBoxOpened;
        break;
    }
  }
  dxListClicked(e: any) {
    if (e.itemIndex === 0 ) {
      this.logout();
    }

  }
  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(args: any) {
    this.selectedLanguage = args.addedItems[0];
    this.i18nService.language = args.addedItems[0];
    this.isDropDownBoxOpened = false;
  }

  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string | null {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.username : null;
  }

}
