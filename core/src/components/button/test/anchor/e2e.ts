import { newE2EPage } from '@stencil/core/testing';

it('button: anchor', async () => {
  const page = await newE2EPage({
    url: '/src/components/button/test/anchor?ionic:animated=false'
  });

  const compare = await page.compareScreenshot();
  expect(compare).toMatchScreenshot();
});
