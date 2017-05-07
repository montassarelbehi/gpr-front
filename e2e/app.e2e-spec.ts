import { GprProjectPage } from './app.po';

describe('gpr-project App', () => {
  let page: GprProjectPage;

  beforeEach(() => {
    page = new GprProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
