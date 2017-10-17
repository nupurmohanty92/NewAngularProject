import { NewAngularProjectPage } from './app.po';

describe('new-angular-project App', () => {
  let page: NewAngularProjectPage;

  beforeEach(() => {
    page = new NewAngularProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
