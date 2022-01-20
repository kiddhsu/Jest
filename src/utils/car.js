import uuid from 'uuid/v1';

// car 管理購物車的操作（目前只有增加的功能）
const car = {
  // 購物車內容用 carContent 紀錄
  carContent: [],
  // 用 getCurrentCar 來取得它
  getCurrentCar: () => car.carContent,
  // addProdToCar 依賴著 getCurrentCar 和 uuid。
  addProdToCar: (name, count) => {
    const workCar = [...car.getCurrentCar()];
    workCar.push({ id: uuid(), name, count });
    return workCar;
  },
};

export default car;