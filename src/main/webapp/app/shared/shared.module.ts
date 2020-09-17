import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BlogOauth2SharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [BlogOauth2SharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [BlogOauth2SharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogOauth2SharedModule {
  static forRoot() {
    return {
      ngModule: BlogOauth2SharedModule
    };
  }
}
