程序员的工作不止是写出能运行的代码，而应该写出易懂易维护的代码。尤其是在多人协作的团队工作中，这一点显得很重要。

## 考虑几个问题：

1. 代码是否具有可读性
2. 代码健壮性
3. 组件设计是否合理？是否可以更好一些

#### HTML 部分

1. 语义化标签
   标签 | 作用
   article | 定义文章
   aside | 定义文章的侧边栏
   figure | 一组媒体对象及文字
   figcaption | 定义 figure 的标题
   footer | 定义页脚
   header | 定义页眉
   nav | 定义导航
   section | 定义文档中的区块
   time | 定义日期、时间

2. 属性顺序
   `id class name data-xxx src for type href title alt aria-xxx role value style`

#### CSS

1. 不要漏写样式之后的分号 `;`
2. 选择器尽量使用 class。多个单词使用`-`连接
3. 选择器尽量精准，减少 id、尽量避免使用`!important`
4. 尽量避免样式覆盖（维护和调试困难）
5. 可继承的样式不要重复声明
6. 保持简洁性。使用缩写，没必要的不写
7. 慎用 animation。尽量用 transition
8. 单位建议使用 rem
9. 颜色建议使用十六进制，除了透明效果使用 rgba
10. 样式声明顺序。定位、盒模型、文字、颜色、背景、其他

#### JavaScript

1. 命名
   变量名、方法名、统一采用小驼峰命名法。
   方法名建议采用：**动词 + 名词** 形式
   增删改查，统一使用下面 6 个前缀。力求做到统一
   `add / delete / update / get / query / detail`
   函数常用方法动词：
   get(获取)、add(增加)、create(创建)、start(启动)、open(打开)、read(读取) load(加载) begin(开始) backup(备份) import(引入) split(分割) inject(注入) set(设置) remove(移除) destory(销毁) stop(停止) close(关闭) write(写入) save(保存) end(结束) restore(恢复) export(导出) merge(合并) extract(提取)
   常量全部使用大写，下划线间隔，力求表达清晰。

2. 代码缩进
   使用两个空格缩进
   不同逻辑、不同语义、不同业务空行作为间隔。

3. 字符串
   首选 **_ 模板字符串 _**，其次使用单引号，不使用双引号。

4. 对象声明
   使用字面量，不使用构造函数

```
let mine = {}; // √
let mine = new Object(); // ×
```

5. 括号
   代码块要加大括号，尤其是单行的 if 语句。

6. this
   对上下文只用 `self` 来代替`this`

7. 一定要清除生产的 console

8. 同一团队使用相同的代码格式化工具（否则多个人同时改动一个项目时会很难受）
