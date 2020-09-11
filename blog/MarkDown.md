# Markdown 语法

这里是简单的文字，什么语法也没有使用。

1、标题
标题前使用 # 表示。几个#表示几级标题，支持到 6 级标题。如下：

# 1 级标题

## 2 级标题

### 3 级标题

#### 4 级标题

##### 5 级标题

###### 6 级标题

2、字体

加粗 == 两边使用 两个 _ 包裹  
**这里字体加粗了**  
斜体 == 两边使用 一个 _ 包裹  
_这里是斜体_  
斜体+加粗 == 两边使用 三个 \* 包裹  
**_这是斜体加粗了_**  
删除线 == 两边用 两个 ~~ 包裹  
~~删除线效果~~

3、引用

引用文字前使用 > 即可，可以无限嵌套。如下效果：

> 这里使用了一个引用符号
>
> > 这里使用了两个引用符号
> >
> > > > > > > > > > > > > 这里使用了好多个引用符号

4、分割线  
三个 或者 四个以上的 ‘-’ 或者 ‘\*’ 都可以。例如：  
三个 - 效果

---

三个 \* 效果

---

5、图片

格式：！【图片 alt】(图片地址 ‘图片 title’) 所有字符都是英文的。
网络图片：  
![网络图片](http://s1.sinaimg.cn/large/002i1XHNzy7hvsPvF0wbc "无问西东")
本地图片：  
![本地图片](/images/wuwen.jpg "无问西东")

6、超链接

格式：【超链接名】（超链接地址 "超链接 title"）title 可加可不加。
[Github](https://www.jianshu.com/)  
[百度](https://www.baidu.com/)  
还可以用 HTML 的 a 标签代替: <a href="https://www.baidu.com" target="_blank">百度一下</a>

7、列表

无序列表，文字前面加 - + \* 任何一种都可以，与文字之间有一个空格，例如:
加 -:

- 无序列表 1
- 无序列表 1
- 无序列表 1

加+：

- 无序列表 2
- 无序列表 2
- 无序列表 2

加\*：

- 无序列表 3
- 无序列表 3
- 无序列表 3

有序列表：数字加点，例如：1. 列表 这种，序号和文字之间有空格。

1. 有序列表
2. 有序列表
3. 有序列表
4. 有序列表

列表嵌套：上一级和下一级之间敲三个空格即可。

- 一层列表
  - 二层列表
  - 二层列表
  - 二层列表
  - 二层列表
- 一层列表
- 一层列表

8、表格

| 姓名 | 年龄 | 性别 |
| ---- | :--: | ---: |
| 张三 |  23  |   男 |
| 小红 |  24  |   女 |

9、代码

单行代码 使用 `` 包裹  
代码块使用 （```）包裹

`console.log('单行代码')`

(`) function Fun() { alert('弹个框') } Fun() (`)

10、流程图

    ```flow
    st=>start: 开始
    op=>operation: My Operation
    cond=>condition: Yes or No?
    e=>end
    st->op->cond
    cond(Yes)->e
    cond(No)->op
    &```