import { MuxFrontendPage } from './app.po';

describe('mux-frontend App', function() {
  let page: MuxFrontendPage;

  beforeEach(() => {
    page = new MuxFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
