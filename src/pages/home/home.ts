import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AppleWalletProvider } from '../../providers/apple-wallet/apple-wallet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private platform: Platform, private appleWallet: AppleWalletProvider) {}

  async isWalletAvailable() {
    await this.platform.ready();
    console.log(window);
    const res = await this.appleWallet.isAvailable();
    console.log(res);
  }
}
