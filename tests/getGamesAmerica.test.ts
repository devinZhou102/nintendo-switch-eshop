import defaultGetGamesAmerica, { getGamesAmerica } from '../src';

describe('getGamesAmerica', () => {
  test('should allow no options', async () => {
    const data = await getGamesAmerica();

    expect(data).toEqual(expect.any(Object));
    expect(data.length).toBeGreaterThanOrEqual(1500);
  }, 60000);

  test('should work with default export', () => {
    expect(defaultGetGamesAmerica).not.toBeUndefined();
  });
});
