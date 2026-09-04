import { defineConfig } from 'vitest/config';

// Vitest 4 no longer excludes `dist/` by default; `tsc -b` compiles the
// *.test.ts files alongside the sources, so without this every suite ran twice.
export default defineConfig({
  test: {
    exclude: ['**/node_modules/**', '**/dist/**'],
  },
});
