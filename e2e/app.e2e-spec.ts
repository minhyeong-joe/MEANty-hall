import { MEANtyHallPage } from './app.po';

describe('meanty-hall App', function() {
  let page: MEANtyHallPage;

  beforeEach(() => {
    page = new MEANtyHallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
