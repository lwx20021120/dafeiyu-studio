/**
 * dafeiyu-theme, client half.
 * 注入大肥鱼深海主题到 dsh Web UI：CSS 变量 + 已知 dsh token 覆盖。
 *
 * 设计 token（与 Android 端 / 启动页 / 图标严格一致）：
 *   --dafeiyu-ocean  深海蓝底 #0D1B2E
 *   --dafeiyu-foam   浪花面板 #14263F
 *   --dafeiyu-fishy  鱼蓝主色 #5B8DEF
 *   --dafeiyu-bubble 泡泡青辅 #4FD1C5
 *   --dafeiyu-milk   奶白文字 #F0F4FF
 *   --dafeiyu-tail   橘尾鳍   #FF9F68
 *   --dafeiyu-abyss  深夜紫   #1B1440
 *
 * 真机首启后看 dsh 实际暴露了哪些 CSS 变量名（DevTools 一眼能看到），
 * 把命中不到的删掉，缺的补上 —— 这一份是 v0.1 通用覆盖，v0.2 再精修。
 */

const DAFEIYU_TOKENS = {
  '--dafeiyu-ocean':  '#0D1B2E',
  '--dafeiyu-foam':   '#14263F',
  '--dafeiyu-fishy':  '#5B8DEF',
  '--dafeiyu-bubble': '#4FD1C5',
  '--dafeiyu-milk':   '#F0F4FF',
  '--dafeiyu-tail':   '#FF9F68',
  '--dafeiyu-abyss':  '#1B1440',
};

const CSS_TEXT = `
/* ==== 大肥鱼设计 token ==== */
:root {
${Object.entries(DAFEIYU_TOKENS)
  .map(([k, v]) => `  ${k}: ${v};`)
  .join('\n')}
}

/* ==== 覆盖 dsh 常见 token（命中即生效，未命中等真机首启后看 DevTools 补充） ==== */
:root {
  /* 主色系 */
  --color-primary:        var(--dafeiyu-fishy);
  --color-primary-hover:  var(--dafeiyu-bubble);
  --color-primary-active: var(--dafeiyu-fishy);
  --color-on-primary:     var(--dafeiyu-ocean);
  --color-accent:         var(--dafeiyu-bubble);

  /* 背景层级 */
  --color-bg:             var(--dafeiyu-ocean);
  --color-bg-elevated:    var(--dafeiyu-foam);
  --color-bg-overlay:     var(--dafeiyu-abyss);
  --color-surface:        var(--dafeiyu-foam);
  --color-surface-variant:var(--dafeiyu-abyss);
  --color-background:     var(--dafeiyu-ocean);

  /* 文字 */
  --color-text:           var(--dafeiyu-milk);
  --color-text-primary:   var(--dafeiyu-milk);
  --color-text-secondary: #B8C8E8;
  --color-text-muted:     #7A8AB0;
  --color-on-surface:     var(--dafeiyu-milk);
  --color-on-background:  var(--dafeiyu-milk);

  /* 描边 / 分隔 */
  --color-border:         #2A3A5C;
  --color-border-light:   #1F2D48;
  --color-divider:        #2A3A5C;
  --color-outline:        #2A3A5C;

  /* 语义色 */
  --color-success:        var(--dafeiyu-bubble);
  --color-warning:        var(--dafeiyu-tail);
  --color-error:          #FF7B7B;
  --color-info:           var(--dafeiyu-fishy);
}

/* ==== 兜底：直接命中可能存在的类名（Material / Tailwind 风） ==== */
body, .app, .layout, .sidebar, .main, .conversation {
  background-color: var(--dafeiyu-ocean) !important;
  color: var(--dafeiyu-milk) !important;
}

button.primary, .btn-primary, [data-variant="primary"] {
  background-color: var(--dafeiyu-fishy) !important;
  color: var(--dafeiyu-ocean) !important;
  border-color: var(--dafeiyu-fishy) !important;
}

/* 滚动条（WebView / GeckoView 通用） */
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-thumb { background: var(--dafeiyu-foam); border-radius: 4px; }
::-webkit-scrollbar-track { background: transparent; }
`;

let installed = false;
function inject() {
  if (installed) return;
  installed = true;
  const style = document.createElement('style');
  style.id = 'dafeiyu-theme-v0.1';
  style.setAttribute('data-source', 'dafeiyu-theme');
  style.textContent = CSS_TEXT;
  (document.head || document.documentElement).appendChild(style);
  console.info('[dafeiyu-theme] 深海主题已注入（v0.1）');
}

export function apply(ctx) {
  if (typeof document === 'undefined') return;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject, { once: true });
  } else {
    inject();
  }
  // 兜底：dsh 可能在 SPA 路由切换时重写 :root 属性，1.5s 后再补一次
  setTimeout(inject, 1500);
}
