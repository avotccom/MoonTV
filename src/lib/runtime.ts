// 该文件由 scripts/convert-config.js 自动生成，请勿手动修改
/* eslint-disable */

export const config = {
  cache_time: 7200,
  api_site: {
    laosebizy: {
      api: 'https://apilsbzy1.com/api.php/provide/vod',
      name: 'lsj',
    },
    115: {
      api: 'https://155api.com/api.php/provide/vod',
      name: '115',
    },
    senlin: {
      api: 'https://slapibf.com/api.php/provide/vod',
      name: '森林',
    },
    semao: {
      api: 'https://caiji.semaozy.net/inc/api.php/provide/vod',
      name: '色猫',
    },
    meishaonv: {
      api: 'https://www.msnii.com/api/xml.php',
      name: '美少女',
    },
    yinshuiji: {
      api: 'https://www.xrbsp.com/api/xml.php',
      name: '淫水机',
    },
    xiangnaier: {
      api: 'https://www.gdlsp.com/api/xml.php',
      name: '香奶儿',
    },
    baipiao: {
      api: 'https://www.kxgav.com/api/xml.php',
      name: '白嫖',
    },
    xiaoshimei: {
      api: 'https://www.afasu.com/api/xml.php',
      name: '小湿妹',
    },
    huangav: {
      api: 'https://www.pgxdy.com/api/xml.php',
      name: '黄AV',
    },
  },
} as const;

export type RuntimeConfig = typeof config;

export default config;
