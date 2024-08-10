import projectConfig from '/pagic.config.js';
import Ga from '/_ga.js';
import Gitalk from '/_gitalk.js';
export default {
    'prev': {
        "text": "编译选项",
        "link": "engineering/compiler-options.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "thanks/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "thanks/index.html",
    'title': "感谢",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>感谢</h1>\n<ul>\n<li>感谢<a href="https://github.com/Microsoft/TypeScript/graphs/contributors">创造和维护 TypeScript 的人们</a>，给我们带来了如此优秀的工具</li>\n<li>感谢 <a href="https://github.com/zhongsp/">@zhongsp</a> 对<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/index.html">官方手册的翻译</a>，本书参考了大量他的翻译，能一直坚持跟进非常不容易</li>\n<li>感谢 <a href="http://www.ruanyifeng.com/home.html">@阮一峰</a> 老师的 <a href="http://es6.ruanyifeng.com/">ECMAScript 6 入门</a>，本书引用了多处 ES6 的知识</li>\n</ul>\n<p>最后，感谢你阅读完本书，希望你会有所收获。</p>\n<h2 id="%E4%B8%8B%E4%B8%80%E6%AD%A5">下一步<a class="anchor" href="#%E4%B8%8B%E4%B8%80%E6%AD%A5">§</a></h2>\n<ul>\n<li>在 <a href="https://github.com/xcatliu/typescript-tutorial">GitHub</a> 上关注本书</li>\n<li>阅读<a href="http://www.typescriptlang.org/docs/handbook/basic-types.html">官方手册</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/">中文版</a>）巩固知识</li>\n<li>阅读 <a href="http://www.typescriptlang.org/docs/handbook/tsconfig-json.html">Project Configuration</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html">中文版</a>） 学习如何配置 TypeScript 工程</li>\n<li>查看<a href="http://www.typescriptlang.org/samples/index.html">官方示例</a>，学习真实项目</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-45256157-14" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u611F\u8C22"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li>感谢<a href="https://github.com/Microsoft/TypeScript/graphs/contributors">创造和维护 TypeScript 的人们</a>，给我们带来了如此优秀的工具</li>\n<li>感谢 <a href="https://github.com/zhongsp/">@zhongsp</a> 对<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/index.html">官方手册的翻译</a>，本书参考了大量他的翻译，能一直坚持跟进非常不容易</li>\n<li>感谢 <a href="http://www.ruanyifeng.com/home.html">@阮一峰</a> 老师的 <a href="http://es6.ruanyifeng.com/">ECMAScript 6 入门</a>，本书引用了多处 ES6 的知识</li>\n</ul>\n<p>最后，感谢你阅读完本书，希望你会有所收获。</p>\n<h2 id="%E4%B8%8B%E4%B8%80%E6%AD%A5">下一步<a class="anchor" href="#%E4%B8%8B%E4%B8%80%E6%AD%A5">§</a></h2>\n<ul>\n<li>在 <a href="https://github.com/xcatliu/typescript-tutorial">GitHub</a> 上关注本书</li>\n<li>阅读<a href="http://www.typescriptlang.org/docs/handbook/basic-types.html">官方手册</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/">中文版</a>）巩固知识</li>\n<li>阅读 <a href="http://www.typescriptlang.org/docs/handbook/tsconfig-json.html">Project Configuration</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html">中文版</a>） 学习如何配置 TypeScript 工程</li>\n<li>查看<a href="http://www.typescriptlang.org/samples/index.html">官方示例</a>，学习真实项目</li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%B8%8B%E4%B8%80%E6%AD%A5" }, "\u4E0B\u4E00\u6B65")))),
    'author': "xcatliu",
    'contributors': [
        "xcatliu",
        "CENCHAOCHAO",
        "Maecenas Li",
        "wenbing"
    ],
    'date': "2017-01-16T11:20:03.000Z",
    'updated': "2020-07-02T14:29:45.000Z",
    'excerpt': " - 感谢创造和维护 TypeScript 的人们，给我们带来了如此优秀的工具 - 感谢 @zhongsp 对官方手册的翻译，本书参考了大量他的翻译，能一直坚持跟进非常不容易 - 感谢 @阮一峰 老师的 ECMAScript 6 入门，本书引用了多处 ES6 的知...",
    'cover': undefined,
    'sidebar': [
        {
            "link": "introduction/index.html",
            "children": [
                {
                    "text": "什么是 TypeScript",
                    "link": "introduction/what-is-typescript.html",
                    "pagePath": "introduction/what-is-typescript.md"
                },
                {
                    "text": "安装 TypeScript",
                    "link": "introduction/get-typescript.html",
                    "pagePath": "introduction/get-typescript.md"
                },
                {
                    "text": "Hello TypeScript",
                    "link": "introduction/hello-typescript.html",
                    "pagePath": "introduction/hello-typescript.md"
                }
            ],
            "pagePath": "introduction/README.md",
            "text": "简介"
        },
        {
            "link": "basics/index.html",
            "children": [
                {
                    "text": "原始数据类型",
                    "link": "basics/primitive-data-types.html",
                    "pagePath": "basics/primitive-data-types.md"
                },
                {
                    "text": "任意值",
                    "link": "basics/any.html",
                    "pagePath": "basics/any.md"
                },
                {
                    "text": "类型推论",
                    "link": "basics/type-inference.html",
                    "pagePath": "basics/type-inference.md"
                },
                {
                    "text": "联合类型",
                    "link": "basics/union-types.html",
                    "pagePath": "basics/union-types.md"
                },
                {
                    "text": "对象的类型——接口",
                    "link": "basics/type-of-object-interfaces.html",
                    "pagePath": "basics/type-of-object-interfaces.md"
                },
                {
                    "text": "数组的类型",
                    "link": "basics/type-of-array.html",
                    "pagePath": "basics/type-of-array.md"
                },
                {
                    "text": "函数的类型",
                    "link": "basics/type-of-function.html",
                    "pagePath": "basics/type-of-function.md"
                },
                {
                    "text": "类型断言",
                    "link": "basics/type-assertion.html",
                    "pagePath": "basics/type-assertion.md"
                },
                {
                    "text": "声明文件",
                    "link": "basics/declaration-files.html",
                    "pagePath": "basics/declaration-files.md"
                },
                {
                    "text": "内置对象",
                    "link": "basics/built-in-objects.html",
                    "pagePath": "basics/built-in-objects.md"
                }
            ],
            "pagePath": "basics/README.md",
            "text": "基础"
        },
        {
            "link": "advanced/index.html",
            "children": [
                {
                    "text": "类型别名",
                    "link": "advanced/type-aliases.html",
                    "pagePath": "advanced/type-aliases.md"
                },
                {
                    "text": "字符串字面量类型",
                    "link": "advanced/string-literal-types.html",
                    "pagePath": "advanced/string-literal-types.md"
                },
                {
                    "text": "元组",
                    "link": "advanced/tuple.html",
                    "pagePath": "advanced/tuple.md"
                },
                {
                    "text": "枚举",
                    "link": "advanced/enum.html",
                    "pagePath": "advanced/enum.md"
                },
                {
                    "text": "类",
                    "link": "advanced/class.html",
                    "pagePath": "advanced/class.md"
                },
                {
                    "text": "类与接口",
                    "link": "advanced/class-and-interfaces.html",
                    "pagePath": "advanced/class-and-interfaces.md"
                },
                {
                    "text": "泛型",
                    "link": "advanced/generics.html",
                    "pagePath": "advanced/generics.md"
                },
                {
                    "text": "声明合并",
                    "link": "advanced/declaration-merging.html",
                    "pagePath": "advanced/declaration-merging.md"
                },
                {
                    "text": "扩展阅读",
                    "link": "advanced/further-reading.html",
                    "pagePath": "advanced/further-reading.md"
                }
            ],
            "pagePath": "advanced/README.md",
            "text": "进阶"
        },
        {
            "link": "engineering/index.html",
            "children": [
                {
                    "text": "代码检查",
                    "link": "engineering/lint.html",
                    "pagePath": "engineering/lint.md"
                },
                {
                    "text": "编译选项",
                    "link": "engineering/compiler-options.html",
                    "pagePath": "engineering/compiler-options.md"
                }
            ],
            "pagePath": "engineering/README.md",
            "text": "工程"
        },
        {
            "text": "感谢",
            "link": "thanks/index.html",
            "pagePath": "thanks/README.md"
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "thanks/index.html", owner: "xcatliu", pagerDirection: "first", repo: "typescript-tutorial", title: "\u611F\u8C22" })
};
