export let Subscription = function (
  handlerId,
  unsubscribeNotificationCallback
) {
  let self = this;

  self.unsubscribe = () => {
    if (unsubscribeNotificationCallback) {
      unsubscribeNotificationCallback(handlerId);
    }
  };

  return self;
};
