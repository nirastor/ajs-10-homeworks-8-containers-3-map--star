/* eslint-disable no-underscore-dangle */
import Settings from '../settings';

test('should set user value', () => {
  const S = new Settings();
  S.setSomething('music', 'pop');
  expect(S._userSetting.get('music')).toBe('pop');
});

test('should not set unknovn value', () => {
  const S = new Settings();
  S.setSomething('music', 'someUnknown');
  expect(S._userSetting.get('music')).toBe(undefined);
});

test('getter should return correct values if was changed', () => {
  const S = new Settings();
  S.setSomething('music', 'pop');
  const recived = S.setting.get('music');
  expect(recived).toBe('pop');
});

test('getter should return default values if no changed', () => {
  const S = new Settings();
  S.setSomething('music', 'pop');
  const recived = S.setting.get('theme');
  const expected = S._defaultSettings.get('theme');
  expect(recived).toBe(expected);
});
