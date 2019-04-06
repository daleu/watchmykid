/* global chrome */
export const Storage = {
    get: (callback) => chrome.storage.local.get(['watchmykid'], callback),
    set: (value) => chrome.storage.local.set(
      { 'watchmykid': value }, () => {}
    ),
  };
  