import {defineConfig} from 'dumi';
import {nav} from "./config/nav";
import {docVersions} from "./config/docVersions";
import {features} from "./config/features";
import {actions} from "./config/actions";
import {bannerConfig} from "./config/bannerConfig";
import {moreLink} from "./config/moreLinks";
// @ts-ignore
import {footerLinks} from "./config/footerLinks";
// @ts-ignore
import {footer} from "./config/footer";

export default defineConfig({
  publicPath: '/white-dew-doc/',
  base: '/white-dew-doc/',
  themeConfig: {
    ...defineConfig({
      title: 'White Dew',
      description: '一款插件化 轻量且丰富的前后分离架构后台基础管理系统',
      github: 'https://github.com/accums',
      docVersions: docVersions,
      nav: nav,
      actions: actions,
      moreLinks: moreLink,
      bannerConfig: bannerConfig,
      features: features,
      footerLinks: footerLinks,
      footer: footer,
      theme: {
        token: {
          colorPrimary: '#0c626d',
        },
      },
    }),
    name: 'White Dew',
  },
  logo: 'https://accums.oss-rg-china-mainland.aliyuncs.com/24st_logo.svg',
  favicons: ['https://accums.oss-rg-china-mainland.aliyuncs.com/24st_logo.svg'],
});
