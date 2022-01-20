
###### 單元測試基本概念
1. 除了toBe使用外，物件可用 toEqual，想得到相反的結果則是在斷言前串上一個 not
2. describe 可將每一項測試分類
3. 檔名.test.js

###### 生命週期
1. beforeAll ：所在區域內會第一個執行
2. beforeEach ：每一次的測試前會先執行
3. afterAll ：所在區域內最後一個執行
4. afterEach ：每一次的測試後會馬上執行(通常使用 afterEach)

###### 新增.babelrc.js
測試不會讓 index.test.js 經過編譯，需新增