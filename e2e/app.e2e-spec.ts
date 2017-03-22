import { HifluencePage } from './app.po';

describe('hifluence App', function() {
  let page: HifluencePage;

  beforeEach(() => {
    page = new HifluencePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
