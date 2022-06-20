import { browser, element, by } from 'protractor';
import { platform, release } from 'os';
export class CalculadoraPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
