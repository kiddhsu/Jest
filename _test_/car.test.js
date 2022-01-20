import uuid from 'uuid/v1';
import car from '../src/utils/car';

jest.mock('uuid/v1');

const getCurrentCarSpy = jest.spyOn(
  car, 'getCurrentCar',
);

describe('Car', () => {
  beforeAll(() => {
    uuid.mockReturnValue('9999');
  });

  test('check_add_prod', () => {
    const newCar = car.addProdToCar('apple', 3);
    expect(uuid).toHaveBeenCalled();
    expect(getCurrentCarSpy).toHaveBeenCalled();
    expect(newCar).toEqual(
      [{ id: '9999', name: 'apple', count: 3 }],
    );
  });
});
// 測試 addProdToCar 做執行，試著加入第一項產品，
// 但這時候還不需要在意產品是否正確加入，而是確認依賴 uuid 是否有確實執行。
// 使用 toHaveBeenCalled 斷言是否有執行過
// describe('addProdToCar', () => {
//   test('check_execute_uuid', () => {
//     const newCar = car.addProdToCar('apple', 3);
//     console.log(newCar);
//     // expect(uuid).toHaveBeenCalled();
//     // 執行次數為 1
//     expect(uuid.mock.calls.length).toBe(1);
//   });
//   beforeAll(() => {
//     uuid.mockReturnValueOnce('9999');
//   });
// });