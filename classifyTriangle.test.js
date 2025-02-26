
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(9, 8, 3)).toBe('Not a Triangle');
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(7, 7, 7)).toBe('Not a Triangle');
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(5, 4, 4)).toBe('Not a Triangle');
    });
      
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 0, 10)).toBe('Not a Triangle');
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(19, 2, 5)).toBe('Not a Triangle');
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(4, 3, 5)).toBe('Not a Triangle');
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(10, 9, 9)).toBe('Not a Triangle');
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(4, 6, 6)).toBe('Not a Triangle');
    });

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(5, 5, 5)).toBe('Not a Triangle');
    });

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(2, 21, 19)).toBe('Not a Triangle');
    });

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(13, 12, 12)).toBe('Not a Triangle');
    });

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(14, 14, 14)).toBe('Not a Triangle');
    });

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(15, 7, 9)).toBe('Not a Triangle');
    });

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(16, 6, 8)).toBe('Not a Triangle');
    });

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(17, 1, 18)).toBe('Not a Triangle');
    });

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(18, 18, 18)).toBe('Not a Triangle');
    });

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(19, 4, 7)).toBe('Not a Triangle');
    });

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(20, 0, 1)).toBe('Not a Triangle');
    });
  });
  