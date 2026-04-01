import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN", // Replace with your Sentry DSN
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
});
