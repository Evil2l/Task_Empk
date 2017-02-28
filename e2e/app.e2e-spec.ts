import { EmpkDplPage } from './app.po';

describe('empk-dpl App', function() {
  let page: EmpkDplPage;

  beforeEach(() => {
    page = new EmpkDplPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
