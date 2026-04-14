interface UserAgentInfo {
  iosMajorVersion: string | null;
  deviceType: string | null;
}

export const parseUserAgent = (userAgent: string): UserAgentInfo => {
  let iosMajorVersion: string | null = null;
  let deviceType: string | null = null;

  const iosMatch = userAgent.match(/(?:iPhone|iPad|iPod).*?OS (\d+)/i);
  if (iosMatch) {
    iosMajorVersion = iosMatch[1];
  }

  if (/iPhone/i.test(userAgent)) {
    deviceType = "iPhone";
  } else if (/iPad/i.test(userAgent)) {
    deviceType = "iPad";
  } else if (/iPod/i.test(userAgent)) {
    deviceType = "iPod";
  } else if (/Android/i.test(userAgent)) {
    deviceType = "Android";
  } else if (/Mac/i.test(userAgent)) {
    deviceType = "Mac";
  } else if (/Windows/i.test(userAgent)) {
    deviceType = "Windows";
  }

  return { iosMajorVersion, deviceType };
};
