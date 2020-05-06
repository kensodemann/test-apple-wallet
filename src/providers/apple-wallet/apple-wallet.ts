import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface EncryptedCardData {
  activationData: string;
  encryptedPassData: string;
  wrappedKey: string;
}

export interface SignatureCertificatesData {
  certificateSubCA: string;
  certificateLeaf: string;
  nonce: string;
  nonceSignature: string;
}

export interface CardData {
  cardholderName: string;
  primaryAccountNumberSuffix: string;
  localizedDescription?: string;
  paymentNetwork?: string;
}

export interface PairedDevicesFlags {
  isInWallet: boolean;
  isInWatch: boolean;
  FPANID: string;
}

export interface WatchExistData {
  isWatchPaired: boolean;
}

@Plugin({
  pluginName: 'AppleWallet',
  plugin: 'cordova-apple-wallet',
  pluginRef: 'AppleWallet',
  repo: 'https://github.com/tomavic/cordova-apple-wallet',
  platforms: ['iOS']
})
@Injectable()
export class AppleWalletProvider extends IonicNativePlugin {
  /**
   * Simple call to determine if the current device supports Apple Pay and has a supported card installed.
   * @return {Promise<boolean>}
   */
  @Cordova()
  isAvailable(): Promise<boolean> {
    return;
  }

  /**
   * Simple call to check Card Eligibility
   * @param {string} primaryAccountIdentifier
   * @return {Promise<boolean>}
   */
  @Cordova()
  checkCardEligibility(primaryAccountIdentifier: string): Promise<boolean> {
    return;
  }

  /**
   * Simple call to checkCardEligibilityBySuffix
   * @param {string} cardSuffix
   * @return {Promise<PairedDevicesFlags>}
   */
  @Cordova()
  checkCardEligibilityBySuffix(cardSuffix: string): Promise<boolean> {
    return;
  }

  /**
   * Simple call to check out if there is any paired Watches so that you can toggle visibility of 'Add to Watch' button
   * @return {Promise<WatchExistData>}
   */
  @Cordova()
  checkPairedDevices(): Promise<WatchExistData> {
    return;
  }

  /**
   * Simple call to check paired devices with a card by its suffix
   * @param {string} cardSuffix
   * @return {Promise<PairedDevicesFlags>}
   */
  @Cordova()
  checkPairedDevicesBySuffix(cardSuffix: string): Promise<PairedDevicesFlags> {
    return;
  }

  /**
   * Simple call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object.
   * @param {cardData} data
   * @return {Promise<SignatureCertificatesData>}
   */
  @Cordova()
  startAddPaymentPass(data: CardData): Promise<SignatureCertificatesData> {
    return;
  }

  /**
   * Simple completion handler that takes encrypted card data returned from your server side, in order to get the final response from Apple to know if the card is added succesfully or not.
   * @param {encryptedCardData} data
   * @return {Promise<string>}
   */
  @Cordova()
  completeAddPaymentPass(data: EncryptedCardData): Promise<string> {
    return;
  }
}
