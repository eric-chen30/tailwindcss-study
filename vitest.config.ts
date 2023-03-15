// 由 Vite 提供支持的极速单元测试框架
/**
 * 解决的问题：Vite搭配Jest使用会有大量重复配置，Vitest消除了为我们应用程序编写单元测试所需的额外配置
 */
import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)
