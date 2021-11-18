/**
 * Simple logger
 * Maps console attributes to logger. Prevents logging in production mode.
 * Stubs out console methods.
 */
export const logger: Console = Object.fromEntries(
  Object.getOwnPropertyNames(console).map(
    (attr: string) => ([
      attr,
      (typeof (console as unknown as Record<string, unknown>)[attr] === "function"
          && process.env.NODE_ENV === "production")
      ? () => {}
      : (console as unknown as Record<string, unknown>)[attr]
    ])
  )
) as unknown as Console
