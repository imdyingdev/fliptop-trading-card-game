// vite.config.js
import { defineConfig, loadEnv } from "file:///C:/Users/monde/Documents/tgc/pokemon-cards-css/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///C:/Users/monde/Documents/tgc/pokemon-cards-css/node_modules/@sveltejs/vite-plugin-svelte/dist/index.js";
var vite_config_default = defineConfig(({ mode }) => {
  const venv = loadEnv(mode, process.cwd(), "");
  const env = Object.keys(venv).filter((item) => item.startsWith("VITE_")).reduce((cur, key) => {
    return Object.assign(cur, { [key]: venv[key] });
  }, {});
  const htmlPlugin = () => {
    return {
      name: "html-transform",
      transformIndexHtml(html) {
        return html.replace(/%(.*?)%/g, function(match, p1) {
          return env[p1];
        });
      }
    };
  };
  return {
    plugins: [svelte(), htmlPlugin()],
    server: {
      watch: {
        usePolling: false
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtb25kZVxcXFxEb2N1bWVudHNcXFxcdGdjXFxcXHBva2Vtb24tY2FyZHMtY3NzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtb25kZVxcXFxEb2N1bWVudHNcXFxcdGdjXFxcXHBva2Vtb24tY2FyZHMtY3NzXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9tb25kZS9Eb2N1bWVudHMvdGdjL3Bva2Vtb24tY2FyZHMtY3NzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgc3ZlbHRlIH0gZnJvbSAnQHN2ZWx0ZWpzL3ZpdGUtcGx1Z2luLXN2ZWx0ZSdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoe21vZGV9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHZlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCksICcnKVxyXG4gIGNvbnN0IGVudiA9IE9iamVjdC5rZXlzKHZlbnYpLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zdGFydHNXaXRoKFwiVklURV9cIikpLnJlZHVjZSgoY3VyLCBrZXkpID0+IHsgcmV0dXJuIE9iamVjdC5hc3NpZ24oY3VyLCB7IFtrZXldOiB2ZW52W2tleV0gfSl9LCB7fSkgO1xyXG5cclxuICBjb25zdCBodG1sUGx1Z2luID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogXCJodG1sLXRyYW5zZm9ybVwiLFxyXG4gICAgICB0cmFuc2Zvcm1JbmRleEh0bWwoaHRtbCkge1xyXG4gICAgICAgIHJldHVybiBodG1sLnJlcGxhY2UoLyUoLio/KSUvZywgZnVuY3Rpb24gKG1hdGNoLCBwMSkge1xyXG4gICAgICAgICAgcmV0dXJuIGVudltwMV07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwbHVnaW5zOiBbc3ZlbHRlKCksIGh0bWxQbHVnaW4oKV0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgd2F0Y2g6IHtcclxuICAgICAgICB1c2VQb2xsaW5nOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VSxTQUFTLGNBQWMsZUFBZTtBQUM5VyxTQUFTLGNBQWM7QUFHdkIsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBQyxLQUFJLE1BQU07QUFFdEMsUUFBTSxPQUFPLFFBQVEsTUFBTSxRQUFRLElBQUksR0FBRyxFQUFFO0FBQzVDLFFBQU0sTUFBTSxPQUFPLEtBQUssSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQUFTLEtBQUssV0FBVyxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsS0FBSyxRQUFRO0FBQUUsV0FBTyxPQUFPLE9BQU8sS0FBSyxFQUFFLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQztBQUFBLEVBQUMsR0FBRyxDQUFDLENBQUM7QUFFcEosUUFBTSxhQUFhLE1BQU07QUFDdkIsV0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sbUJBQW1CLE1BQU07QUFDdkIsZUFBTyxLQUFLLFFBQVEsWUFBWSxTQUFVLE9BQU8sSUFBSTtBQUNuRCxpQkFBTyxJQUFJO0FBQUEsUUFDYixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsU0FBTztBQUFBLElBQ0wsU0FBUyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7QUFBQSxJQUNoQyxRQUFRO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxZQUFZO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
