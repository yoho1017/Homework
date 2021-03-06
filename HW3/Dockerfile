# 這行會載入 Node.js 需要的執行環境，每個不同的程式需要的環境可能都不同
FROM node:alpine 
 
# 在這個 Docker 的環境之中建立一個工作目錄 /app
WORKDIR /app

# 把跟 Dockerfile 同個資料夾的程式加到剛建立的工作目錄 /app 中
ADD . /app

# 運行 npm install，讓 npm 透過讀取 package.json 下載相依的 package
RUN npm install

# 指定 container 對外開放的 port
EXPOSE 5000

# 我們透過 node server.js 來執行我們的 Server
CMD node server.js