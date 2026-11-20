import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  // Keep interactive diagram tests responsive while running both viewport projects.
  workers: 4,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: 'list',
  use: { baseURL: 'http://127.0.0.1:4173/HUS_Learning_Page/', trace: 'retain-on-failure' },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' } },
  ],
  webServer: {
    command: 'npm run build && npm run preview -- --base=/HUS_Learning_Page/ --host 127.0.0.1 --port 4173 --strictPort',
    url: 'http://127.0.0.1:4173/HUS_Learning_Page/',
    reuseExistingServer: false,
    timeout: 120000,
  },
});
