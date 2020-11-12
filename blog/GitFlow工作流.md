# Git Flow 工作流

在开发项目中会用到Git作为版本控制工具，但是如果没有一个规范清晰的流程，每个人提交杂乱无章的commit就会导致项目很快变得无法管理和维护。

Vincent Driessen 为了解决这个问题提出了 [A Successful Git Branching Model](https://nvie.com/posts/a-successful-git-branching-model/)

![本地图片](/img/gitflow.png "工作流")

## Git Flow 常用分支

- Production 分支
也就是常使用的master分支，这个分支作为发布到生产环境的代码，即最新的Release版本。此版本只能从其他分支合并代码，不可以直接修改。

- Develop 分支
这个分支是主要的开发分支，作为下一个要发布到 Production 分支的代码。这个带分支主要是合并其他分支，比如：Feature分支。

- Feature 分支
主要是用来开发新功能，一旦功能开发完毕就合并到 Develop 分支，并进入下一个 Release 。

- Release 分支
当你需要一个发布一个新Release的时候，我们基于Develop分支创建一个Release分支，完成Release后，我们合并到Master和Develop分支。

- Hotfix 分支
当 Production 发现bug时，需要创建一个hotfix 分支来修复，修复完成后，合并到 master 和 develop，会跟着下一个 Release (发行版) 发布到生产环境。

[详细解释参考](https://www.jianshu.com/p/41910dc6ef29)


![本地图片](/img/gitflow1.jpg "工作流")
![本地图片](/img/gitflow2.jpg "工作流")
![本地图片](/img/gitflow3.jpg "工作流")
![本地图片](/img/gitflow4.jpg "工作流")


## Git Flow 命令参考

- 创建develop
```
git branch develop  
git push -u origin develop
```

- 开始 Feature
```
# 通过develop新建feaeure分支
git checkout -b feature develop
# 或者, 推送至远程服务器:
git push -u origin feature    

# 修改md文件   
git status
git add .
git commit    
```

- 完成 Feature
```
git pull origin develop
git checkout develop 

#--no-ff：不使用fast-forward方式合并，保留分支的commit历史
#--squash：使用squash方式合并，把多次分支commit历史压缩为一次

git merge --no-ff feature
git push origin develop

git branch -d some-feature

# 如果需要删除远程feature分支:
git push origin --delete feature   
```

- 开始 Release
```
git checkout -b release-0.1.0 develop
```

- 完成 Release
```
git checkout master
git merge --no-ff release-0.1.0
git push

git checkout develop
git merge --no-ff release-0.1.0
git push


git branch -d release-0.1.0
git push origin --delete release-0.1.0   

# 合并master/devlop分支之后，打上tag 
git tag -a v0.1.0 master
git push --tags
```

- 开始 Hotfix
```
git checkout -b hotfix-0.1.1 master  
```

- 完成 Hotfix
```
git checkout master
git merge --no-ff hotfix-0.1.1
git push

git checkout develop
git merge --no-ff hotfix-0.1.1
git push

git branch -d hotfix-0.1.1
git push origin --delete  hotfix-0.1.1 

git tag -a v0.1.1 master
git push --tags
```