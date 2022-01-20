
###### 基本概念
1. 檔名.test.js
2. describe 可將每一項測試分類
3. 可使用tobe 外，想得到相反的結果使用 not ，物件可用 toEqual
4. 產生覆蓋率報告，在 jest測試指令後增加一段 --coverage，並將它加到 package.json 的 script

###### 生命週期
1. beforeAll ：所在區域內會第一個執行
2. beforeEach ：每一次的測試前會先執行
3. afterAll ：所在區域內最後一個執行
4. afterEach ：每一次的測試後會馬上執行(通常使用 afterEach)

###### 新增.babelrc.js
測試不會讓 index.test.js 經過編譯，需新增

###### Mock() 替身函式
1. 可使用 mockReturnValue 來指定 mock 的回傳值
2. 每次都要回傳不同值也可選用 mockReturnValueOnce

###### spyOn()
   指定 module和要 SPy的Method 名稱給 jest.spyOn()，Jest 就會回傳一個 Spy
ex:
  const getCurrentCarSpy = jest.spyOn(
    car, 'getCurrentCar',
  );