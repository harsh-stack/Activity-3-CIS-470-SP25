
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      //ECP
      //Test for valid intput within acceptable range
    });

    test('should classify an Isosceles triangle', () => {
      expect(classifyTriangle(90, 90, 91)).toBe('Isosceles');
      //ECP
      //Test for valid intput within acceptable range
    });

    test('should classify a Scalene triangle', () => {
      expect(classifyTriangle(2, 4, 5)).toBe('Scalene');
      //ECP
      //Test for valid intput within acceptable range
    });
  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      //ECP
      //Test for invalid input
    });

    test('should return error for invalid inputs: lower boundary', () => {
      expect(classifyTriangle(0, 1, 1)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      //BVT
      //Test for invalid input for lower boundary

    });
    test('should return error for invalid inputs: lower boundary', () => {
      expect(classifyTriangle(1, 0, 1)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      //BVT
      //Test for invalid input for lower boundary
    });

    test('should return error for invalid inputs: lower boundary', () => {
      expect(classifyTriangle(1, 1, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      //BVT
      //Test for invalid input for lower boundary
    });

    test('should return error for invalid inputs: lower boundary', () => {
      expect(classifyTriangle(0, 0, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      //BVT
      //Test for invalid input for lower boundary
    });

    test('should return error for invalid inputs: upper boundary', () => {
      expect(classifyTriangle(201, 200, 200)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      //BVT
      //Test for invalid input for upper boundary
    });

    test('should return error for invalid inputs: upper boundary', () => {
      expect(classifyTriangle(200, 201, 200)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      //BVT
      //Test for invalid input for upper boundary
    });

    test('should return error for invalid inputs: upper boundary', () => {
      expect(classifyTriangle(200, 200, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      //BVT
      //Test for invalid input for upper boundary
    });

    test('should return error for invalid inputs: upper boundary', () => {
      expect(classifyTriangle(201, 201, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      //BVT
      //Test for invalid input for upper boundary
    });

    test('should return "Equilateral": middle', () => {
      expect(classifyTriangle(100, 100, 100)).toBe('Equilateral');
      //ECP, BVT
      //Test for valid input for middle of acceptable ranges
    });

    test('should return "Isosceles": middle', () => {
      expect(classifyTriangle(100, 98, 100)).toBe('Isosceles');
      //ECP, BVT
      //Test for valid input for middle of acceptable ranges
    });

    test('should return "Scalene": middle', () => {
      expect(classifyTriangle(100, 98, 102)).toBe('Scalene');
      //ECP, BVT
      //Test for valid input for middle of acceptable ranges
    });

    test('should return "Equilateral": lower boundary', () => {
      expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
      //ECP, BVT
      //Test "Equilateral" for lower bound of acceptable ranges
    });

    test('should return "Isosceles": lower boundary', () => {
      expect(classifyTriangle(2, 1, 2)).toBe('Isosceles');
      //ECP, BVT
      //Test "Isosceles" for lower bound of acceptable ranges
    });

    test('should return "Equilateral": upper boundary', () => {
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
      //ECP, BVT
      //Test "Equilateral" for upper bound of acceptable ranges
    });
    
    test('should return "Isosceles": upper boundary', () => {
      expect(classifyTriangle(200, 199, 200)).toBe('Isosceles');
      //ECP, BVT
      //Test "Isosceles" for upper bound of acceptable ranges
    });

    test('should return "Scalene": upper boundary', () => {
      expect(classifyTriangle(200, 198, 195)).toBe('Scalene');
      //ECP, BVT
      //Test "Scalene" for upper bound of acceptable ranges
    });

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      //ECP, BVT
      //Test "Not a Triangle" for lower bound of acceptable ranges
    });

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(70, 100, 30)).toBe('Not a Triangle');
      //ECP, BVT
      //Test "Not a Triangle" for middle of acceptable ranges
    });

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(200, 1, 10)).toBe('Not a Triangle');
      //ECP, BVT
      //Test "Not a Triangle" for upper bound of acceptable ranges
    });

    
  });
  