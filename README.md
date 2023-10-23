# 104z-temp

104z 專案模板

## :inbox_tray: **拉取使用此模板的方式**

* 使用 104z/create-vue [工具專案連結](https://github.com/104corp/create-vite)
* 或其他建立專案工具

## :whale: **104z 專案模板的使用架構**

### [VSCode](https://code.visualstudio.com/) + [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
docker 環境內使用專案

## :rocket: **104z 專案模板建議的 vscode extension**

* [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) 
* [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin)
* [stylelint-plus](https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
* [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
* [CodeMetrics](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics)

## :hammer_and_wrench: **使用104z 專案模板的前置準備**

:white_check_mark: 下載 [VSCode](https://code.visualstudio.com/)  
:white_check_mark: 下載 [docker](https://www.docker.com/get-started/)  
:white_check_mark: VSCode 安裝 [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)  
:white_check_mark: 調整專案名稱 `104z-temp` -> `your project name` 
* **package.json :**
    * `name`
* **.devcontainer/docker-compose.yml :**
    * `service project name`
    * `project container_name`
    <br/>
    <img width="267" alt="177457879-076d87e0-72ae-4645-b665-b06399019698" src="https://user-images.githubusercontent.com/50346230/177458349-d901fff3-1710-468f-a724-7dd1e86ae550.png">
    
* **.devcontainer/devcontainer.json :**
    * `name`
    * `service`



## :fire: **104z 專案模板專案啟用方式**

1. 使用 vscode remote container 啟動 docker-compose 建立專案

2. 安裝依賴套件

    ```sh
    npm i 
    ```

3. 啟動專案

    ```sh
    npm run dev 
    ```
 
## :hamburger: **104z 平台專案模板啟用方式**

1. 拉平台版建置script

    ```sh
    npx tiged 104corp/104z-temp/template-script/spa 104z-script-spa --force --mode=git
    ```

2. 執行script並進行設置

    :round_pushpin: 確認已安裝 [Homebrew](https://brew.sh/index_zh-tw)，並透過 homebrew 安裝 [mkcert](https://github.com/FiloSottile/mkcert)
    
    執行script :

    ```sh
    sh  104z-script-spa/init.sh
    ```
    ```sh
    service 名稱 (預設為 104z-temp)：
    container 名稱 (預設為 service名稱)：
    ```
    :small_orange_diamond: `service名稱即 104.com.tw 前綴, 例如 guide、signin、adsmart...等`

    :small_orange_diamond: `container名稱不可與其他本地container重覆，可使用service名稱或產品名稱`
 
3. 使用 vscode remote container 啟動 docker-compose 建立專案

4. 安裝依賴套件

    ```sh
    npm i 
    ```

5. 啟動專案

    ```sh
    npm run dev 
    ```


## :package: 打包壓縮專案

```sh
npm run build
```

## :mag: 專案內 linter 檢查

```sh
npm run lint
```