## Git是目前项目中常用的版本管理工具, 当开发者只有一个人的时候基本用不到分支管理，但是当多个开发者协同工作时，分支管理就显得非常重要了。
分支管理首先可以让你在不影响现有版本的情况下开发新功能，还可以在不影响使用的情况下修复bug。

常用的分支相关的命令：

### 查看

` git branch -a`：用于***查看所有分支***（包括服务器端和本地分支），其中前面带星号 * 的表示工作在当前分支上

`git branch`：仅查看的是***本地分支***

`git branch -v`：查看每一个分支的最后一次提交记录

`git branch --merged`：来查看***已合并***的分支，

`git branch --no-merged`：来查看***未合并***的分支

`git ls-remote`：可以显式地获得远程引用的完整列表

### 增加、删除、合并分支

`git fetch origin branchName`：拉取远程分支到本地仓库

`git branch branchName`：创建一个本地分支（仅仅是创建，并不会切换到创建的分支上）

`git checkout branchName`：切换到该分支上
切换分支需注意：一定要注意你工作目录里的文件会被改变。 如果是切换到一个较旧的分支，你的工作目录会恢复到该分支最后一次提交时的样子。 如果 Git 不能干净利落地完成这个任务，它将禁止切换分支。

`git checkout -b test`：创建 test 分支，并切换到 test 分支(上面两个命令合一)

`git push origin test`：这样远程仓库中也就创建了一个test分支

`git push --set-upstream origin branchName`：将本地分支关联到远程分支（下次提交就可以直接`git push`了）

`git push origin --delete test`：***删除远程分支***

`git branch -d test`：***删除本地分支***




`git merge test` 　　合并test分支，此时一定要先切换到你要merge的分支上

`git branch -d test` 　　***删除test分支***，当你将test分支合并到主分支之后，test分支已经没有用了，此时可以使用此命令删除掉。如果该分支有未合并的工作 删除时会失败，-d --> -D 会强行删除。






### 其他基本操作

`git remote add`：添加一个新的远程仓库引用到当前的项目

`git fetch`：从服务器上抓取本地没有的数据时，它并不会修改工作目录中的内容。 它只会获取数据然后让你自己合并。

`git fetch origin branchName`：拉取远程分支到本地仓库

`git pull`：在大多数情况下它的含义是一个 git fetch紧接着一个 git merge 命令。
　　　　　　如果有一个像之前章节中演示的设置好的跟踪分支，不管它是显式地设置还是通过 clone 或 checkout 命令为你创建的，
　　　　　　git pull 都会查找当前分支所跟踪的服务器与分支，从服务器上抓取数据然后尝试合并入那个远程分支。

`git diff`：查看本地资源和远程资源的差别

`git clone -b branchName https:xxx.git(仓库地址)`：**直接 clone 某个分支的代码**


#### 关于 gitignore 文件，如果是先上传了一部分，然后才配置的 ignore 文件，则不会生效。

需要如下操作：

`git rm -r --cached .`

`git add .`

`git commit -m "update .gitignore"`

例如：

创建 uniAPP项目，最开始将 unpackage 文件夹也上传了，然后才添加的 .gitignore 文件。此时是不会生效的。

因为 当你在git库中编写某些代码文件，并已经stage该文件之后，你发现某个文件你不想用了，想在以后的改变中忽略它。然后你再你的.gitignore文件中加入该文件名，结果它并没有被忽略。
**.gitignore文件只是ignore没有被staged(cached)文件，对于已经被staged文件，加入ignore文件时一定要先从staged移除。

所以需要：

```
git rm -r --cached unpackage/

git add .

git commit -m "xxxxx"
```
 