## yarn 常用命令

#### 安装 yarn

[安装 yarn](https://yarn.bootcss.com/docs/install/#windows-stable)

```
npm install -g yarn
```

#### 初始化新项目

```
yarn init
```

#### 添加依赖包

```
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

#### 全局添加依赖包

```
yarn global add [package]
yarn global add [package]@[version]
yarn global add [package]@[tag]
```

#### 将依赖添加到不同项

```
yarn add [package] --dev // devDependencies
yarn add [package] --peer // peerDependencies
yarn add [package] --optional // optionalDependencies
```

#### 升级依赖包

```
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

#### 移除依赖包

```
yarn remove [package]
```

#### 全局移除依赖包

```
yarn global remove [package]
```

#### 安装全部依赖

```
yarn | yarn install
```

#### 查看包信息

```
yarn info [package]
```

#### 启动项目

```
yarn start | yarn dev
```

#### 打包（生成生产文件）

```
yarn build
```

#### 查看配置表

```
yarn config list
```
