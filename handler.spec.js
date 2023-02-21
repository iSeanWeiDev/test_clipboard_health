const deterministicPartitionKey = require('./deterministicPartitionKey.js');
const hexadecimal = /^#[a-f0-9]/i;

describe('Determine Partition Key', () => {
  test('case without event', () => {
    expect(deterministicPartitionKey(null)).toBe(null);
  });

  test('case with partition key (string)', () => {
    const event = { partitionKey: "23ab27" }
    expect(deterministicPartitionKey(event)).toMatch(hexadecimal);
  });

  test('case with partition key (number)', () => {
    const event = { partitionKey: 23 }
    expect(deterministicPartitionKey(event)).toMatch(hexadecimal);
  });

  test('case without partition key', () => {
    const event = { partitionKey: null }
    expect(deterministicPartitionKey(event)).toMatch(hexadecimal);
  });
});