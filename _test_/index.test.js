import { add, sub } from '../src/utils/math';

// 加上 not 後就變成「不等於 」
describe('Check add', () => {
  // beforeEach(() => {
  //   console.log('每次執行測試前執行哦');
  // });

  // afterAll(() => {
  //   console.log('所有測試結束後才看得見我');
  // });

  test('Check the result of 5 + 2', () => {
    expect(add(5, 2)).not.toBe(8);
  });

  test('Check the result of 5 + 3', () => {
    expect(add(5, 3)).toBe(8);
  });
});

describe('Check sub', () => {
  test('Check the result of 5 - 2', () => {
    expect(sub(5, 2)).not.toBe(1);
  });

  test('Check the result of 5 - 3', () => {
    expect(sub(5, 3)).toBe(2);
  });
});
// 把上方的 test 當作一個 function，負責描寫一個測試案例，它擁有兩個參數：

// 第一個參數為「測試名稱」，能夠簡單描述這部分是在測試什麼邏輯或功能。
// 第二個參數是一個 function，又稱斷言，function 內的 expect 用來描述被測試的內容，
// toBe 是測試內容的回傳值是否符合期望值，例如上方的測試內容為「 5 加上 2 期望會等於 7 」