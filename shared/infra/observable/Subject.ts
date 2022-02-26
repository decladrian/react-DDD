import { Subscription } from './Subscription';

export const Subject = function (subscribersStateChangeNotificationCallback) {
  const self = this;

  const handlers = {};

  Object.defineProperty(self, 'subscribersFound', {
    get() {
      let found = false;

      for (const prop in handlers) {
        if (handlers.hasOwnProperty(prop)) {
          found = true;
          break;
        }
      }

      return found;
    },
  });

  Object.defineProperty(self, 'subscribersCount', {
    get() {
      let count = 0;

      for (const prop in handlers) {
        if (handlers.hasOwnProperty(prop)) {
          count++;
        }
      }

      return count;
    },
  });

  const unsubscribeNotificationCallback = (handlerId) => {
    if (handlerId && handlerId !== '' && handlers.hasOwnProperty(handlerId)) {
      delete handlers[handlerId];

      if (
        subscribersStateChangeNotificationCallback &&
        !self.subscribersFound
      ) {
        subscribersStateChangeNotificationCallback(false);
      }
    }
  };

  self.subscribe = (handler) => {
    const handlerId = createGuid();
    handlers[handlerId] = handler;

    if (
      subscribersStateChangeNotificationCallback &&
      self.subscribersCount === 1
    ) {
      subscribersStateChangeNotificationCallback(true);
    }

    //@ts-ignore
    return new Subscription(handlerId, unsubscribeNotificationCallback);
  };

  self.next = (data) => {
    for (const handlerId in handlers) {
      handlers[handlerId](data);
    }
  };

  return self;
};

const createGuid = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
