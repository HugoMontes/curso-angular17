import { ApplicationConfig } from '@angular/core';
import LocaleEsBo from '@angular/common/locales/es-BO';
import { registerLocaleData } from '@angular/common';

registerLocaleData(LocaleEsBo);

export const appConfig: ApplicationConfig = {
  providers: [],
};
