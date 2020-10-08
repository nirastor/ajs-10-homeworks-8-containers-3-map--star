/* eslint-disable no-underscore-dangle */
export default class Settings {
  constructor() {
    this._avlSettings = {
      theme: ['dark', 'light', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare'],
    };

    this._defaultSettings = new Map();
    this._defaultSettings.set('theme', 'dark');
    this._defaultSettings.set('music', 'trance');
    this._defaultSettings.set('difficulty', 'easy');

    this._userSetting = new Map();
  }

  setSomething(name, value) {
    if (this._avlSettings[name].includes(value)) {
      this._userSetting.set(name, value);
    }
  }

  get setting() {
    const result = new Map();
    const keys = Array.from(this._defaultSettings.keys());
    keys.forEach((key) => {
      result.set(key, this._defaultSettings.get(key));
      if (this._userSetting.get(key)) {
        result.set(key, this._userSetting.get(key));
      }
    });
    return result;
  }
}
