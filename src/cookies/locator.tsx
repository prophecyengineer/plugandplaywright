import { Page, expect } from "@playwright/test";

export async function checkCookie(
  context: any,
  cookieName: string,
  expectedValue: string
) {
  const cookies = await context.cookies();
  const cookie = cookies.find((c: any) => c.name === cookieName);

  if (cookie) {
    expect(cookie.value).toEqual(expectedValue);
  } else {
    console.log(`Could not find ${cookieName} cookie`);
  }
}
