const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './DocsRenderer-CFRXHY34-i0__cvFT.js',
      './iframe-T6gdnjGr.js',
      './index-C2WPW1L7.js',
      './jsx-runtime-C6qLVRqm.js',
      './index-DX7rA-C0.js',
      './index-Brs1icLk.js',
      './index-ogSvIofg.js',
      './react-18-DbndBUs-.js',
    ]),
) => i.map((i) => d[i]);
import { _ as o } from './iframe-T6gdnjGr.js';
var s = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((e, r) => {
    let [t, a] = r;
    return a.excludeFromDocsStories && (e[t] = !0), e;
  }, {}),
  l = {
    docs: {
      renderer: async () => {
        let { DocsRenderer: e } = await o(
          () => import('./DocsRenderer-CFRXHY34-i0__cvFT.js').then((r) => r.D),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
          import.meta.url,
        );
        return new e();
      },
      stories: {
        filter: (e) => {
          var r;
          return (
            (e.tags || []).filter((t) => s[t]).length === 0 &&
            !((r = e.parameters.docs) != null && r.disable)
          );
        },
      },
    },
  };
export { l as parameters };
