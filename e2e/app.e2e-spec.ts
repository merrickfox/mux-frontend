import { muxFrontendPage } from './app.po';

describe('mux-frontend App', function() {
  let page: muxFrontendPage;

  beforeEach(() => {
    page = new muxFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
