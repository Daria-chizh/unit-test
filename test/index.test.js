import gameLIfeLine from '../src';

test('should change game life line', () => {
  const expected = 'healthy';
  const received = gameLIfeLine({ name: 'Маг', health: 51 });

  expect(received).toBe(expected);
});

test('should change game life line1', () => {
  const expected = 'wounded';
  const received = gameLIfeLine({ name: 'Лучник', health: 15 });

  expect(received).toBe(expected);
});

test('should change game life line2', () => {
  const expected = 'wounded';
  const received = gameLIfeLine({ name: 'Лучник', health: 50 });

  expect(received).toBe(expected);
});

test('should change game life line3', () => {
  const expected = 'critical';
  const received = gameLIfeLine({ name: 'Мечник', health: 14 });
  expect(received).toBe(expected);
});
