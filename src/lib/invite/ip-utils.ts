import { headers } from "next/headers";

export interface ParsedIP {
  ipv4: string | null;
  ipv6: string | null;
}

export const getClientIPFromHeaders = async (): Promise<string | null> => {
  const headersList = await headers();
  const xForwardedFor = headersList.get("x-forwarded-for");
  if (xForwardedFor) {
    return xForwardedFor.split(",")[0].trim();
  }
  const xRealIP = headersList.get("x-real-ip");
  if (xRealIP) {
    return xRealIP;
  }
  return null;
};

export const parseClientIP = (rawIP: string | null): ParsedIP => {
  if (!rawIP) {
    return { ipv4: null, ipv6: null };
  }
  const IPV4_MAPPED_PREFIX = "::ffff:";
  if (rawIP.startsWith(IPV4_MAPPED_PREFIX)) {
    return { ipv4: rawIP.slice(IPV4_MAPPED_PREFIX.length), ipv6: null };
  }
  if (rawIP.includes(":")) {
    return { ipv4: null, ipv6: rawIP };
  }
  return { ipv4: rawIP, ipv6: null };
};
