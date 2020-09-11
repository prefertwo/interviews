[根据官方文档](https://ant.design/components/tree-cn/#API)，`TreeNode` 的`title`可以是字符串也可以是`ReactNode`。
根据需求，需要在后面添加两个复选框来表示编辑和只读权限。以为只是很简单的将 `title` 改为`ReactNode`即可。但是复选框选择时，遇到问题，就是不好使。
究其原因：**事件冒泡**，点击复选框是同时出发了 `title` 的点击选中事件(`selectable` 属性)，如果将属性设置为`false`，则点击就会选中前面的复选框。

![本地图片](/img/prtscr1.png "选中")

因此只需要在复选框的外层添加 `click` 事件，并阻止冒泡即可。

```
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];

  // 自定义title
  const rendertitle = () => (
    <div style={{ display: 'flex' }} onClick={e => e.stopPropagation()}>
      自定义title
      <div style={{ marginLeft: 20 }}>
        <Checkbox.Group options={options} onChange={e => onChange(e)} />
      </div>
    </div>
  )

```
