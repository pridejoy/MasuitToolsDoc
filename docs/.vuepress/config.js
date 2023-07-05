import { defaultTheme } from 'vuepress';
 
export default {
    theme: defaultTheme({
        head:[
           
        ],
        title: '码数吐司库', // 标题
        description: '码数吐司库文档', // 标题下的描述
        repo: 'ldqk/Masuit.Tools',
        logo:"https://avatars.githubusercontent.com/u/20254980",
        // 默认主题配置
        navbar: [
            // NavbarItem
            {
                text: '首页',
                link: '/',
            }, 
            {
              text: '安装和功能',
              link: '/Use.md',
            }, 
            {
              text: '在线体验',
              link: 'https://replit.com/@ldqk/MasuitToolsDemo?v=1#main.cs',
            }, 
        ],
    }),
};
