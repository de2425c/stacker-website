const USERNAME_REGEX = /^[a-zA-Z0-9_.-]{1,30}$/;
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const isValidUsername = (username: string): boolean => {
  return USERNAME_REGEX.test(username);
};

export const isValidUUID = (token: string): boolean => {
  return UUID_REGEX.test(token);
};

export const isValidDeviceType = (deviceType: string): boolean => {
  const allowedTypes = ["iPhone", "iPad", "iPod", "Android", "Mac", "Windows"];
  return allowedTypes.includes(deviceType);
};

export const isValidIOSVersion = (version: string): boolean => {
  const parsed = parseInt(version, 10);
  return !isNaN(parsed) && parsed >= 10 && parsed <= 30 && String(parsed) === version;
};

export const isValidFirebaseUID = (uid: string): boolean => {
  return typeof uid === "string" && uid.length >= 1 && uid.length <= 128;
};
