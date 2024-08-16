import { ApplicationConfig } from '@angular/core';
import LocaleEsBo from '@angular/common/locales/es-BO';
import { registerLocaleData } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(LocaleEsBo);

export const appConfig: ApplicationConfig = {
  providers: [provideAnimationsAsync()],
};
