# dafeiyu-theme

大肥鱼工作室主题 — 让 dsh Web UI 换上深海蓝/鱼蓝/泡泡青的配色。

## 包含什么

- **设计 token**：7 个 CSS 变量，与 Android 端 `colors.xml`、启动页、图标严格一致
  - `--dafeiyu-ocean` 深海蓝底 #0D1B2E
  - `--dafeiyu-foam`  浪花面板 #14263F
  - `--dafeiyu-fishy` 鱼蓝主色 #5B8DEF
  - `--dafeiyu-bubble` 泡泡青辅 #4FD1C5
  - `--dafeiyu-milk`  奶白文字 #F0F4FF
  - `--dafeiyu-tail`  橘尾鳍   #FF9F68
  - `--dafeiyu-abyss` 深夜紫   #1B1440
- **dsh 已知 token 覆盖**：`--color-primary` / `--color-bg` / `--color-text` 等
- **兜底类名**：`body / .app / .layout / .sidebar` 等强制套色

## 安装状态

由 DSHA 的 `scripts/provision-builtin-plugins.sh` 在离线 rootfs 预置时自动安装，
首启即用，无需用户操作。

## 调试

- 浏览器 DevTools → Elements → 搜索 `--dafeiyu-ocean` 能看到注入是否成功
- v0.1 是通用覆盖，命中不到的 token 留给 v0.2 精修
