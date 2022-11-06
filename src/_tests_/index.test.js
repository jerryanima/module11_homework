import { sum } from '../sum';
import { getMonth } from '../index';

xdescribe("sum test",() => {
  it ('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
}),

describe("getMonth test",() => {
  it ('1 месяц', () => {
    expect(getMonth(1)).toBe('январь');
  });
  
  it ('2 месяц', () => {
      expect(getMonth(2)).toBe('февраль');
  });

  it ('не верный месяц', () => {
    expect(getMonth(100)).toBe('неизвестно');
  });
})