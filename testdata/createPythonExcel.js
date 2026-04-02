// testdata/createPythonExcel.js
// Run ONCE to generate pythonData.xlsx
// Command: node testdata/createPythonExcel.js

const XLSX = require('xlsx');
const path = require('path');

const pythonData = [
  // ── Arrays in Python ──────────────────────────────────────────────────────
  {
    TestCase:       'array_creation',
    Code:           'from array import *\narrayName = array("i", [1, 2, 3])\nfor x in arrayName:\n    print(x)',
    ExpectedOutput: 'SyntaxError',
    Description:    'Array creation — known bug: SyntaxError on line 7'
  },
  {
    TestCase:       'array_insertion',
    Code:           'from array import *\narray1 = array("i", [10,20,30,40,50])\narray1.insert(1,60)\nfor x in array1:\n    print(x)',
    ExpectedOutput: 'SyntaxError',
    Description:    'Array insertion — known bug: SyntaxError on line 7'
  },
  {
    TestCase:       'array_deletion',
    Code:           'from array import *\narray1 = array("i", [10,20,30,40,50])\narray1.remove(40)\nfor x in array1:\n    print(x)',
    ExpectedOutput: 'SyntaxError',
    Description:    'Array deletion — known bug: SyntaxError on line 7'
  },
  {
    TestCase:       'array_search',
    Code:           'from array import *\narray1 = array("i", [10,20,30,40,50])\nprint(array1.index(40))',
    ExpectedOutput: 'SyntaxError',
    Description:    'Array search — known bug: SyntaxError on line 7'
  },
  {
    TestCase:       'array_update',
    Code:           'from array import *\narray1 = array("i", [10,20,30,40,50])\narray1[2] = 80\nfor x in array1:\n    print(x)',
    ExpectedOutput: 'SyntaxError',
    Description:    'Array update — known bug: SyntaxError on line 7'
  },

  // ── Arrays Using List ─────────────────────────────────────────────────────
  {
    TestCase:       'list_wrong_syntax',
    Code:           'grocery = ["apples", "bananas", "cucumbers"]\nsysout.ptinln()',
    ExpectedOutput: 'NameError',
    Description:    'Wrong syntax — sysout not defined'
  },

  // ── Basic Operations ──────────────────────────────────────────────────────
  {
    TestCase:       'basicops_wrong_syntax',
    Code:           'list_name.insert(index, element)\ngrocery.insert(2, "carrots")',
    ExpectedOutput: 'NameError',
    Description:    'Wrong syntax — list_name not defined'
  },

  // ── Applications of Array ─────────────────────────────────────────────────
  {
    TestCase:       'applications_wrong_syntax',
    Code:           'gfdgvfd86',
    ExpectedOutput: 'NameError',
    Description:    'Wrong syntax — irrelevant data'
  },

  // ── Practice Questions ────────────────────────────────────────────────────
  {
    TestCase:       'q1_wrong_syntax',
    Code:           'def Search(list_input, value):\n    if value in list_input:\n        print("Element Found")\n    else:\n        print("Not Found")',
    ExpectedOutput: 'SyntaxError',
    Description:    'Q1 wrong syntax — uppercase Search'
  },
  {
    TestCase:       'q1_wrong_submit',
    Code:           'def Search(list_input, value):\n    if value in list_input:\n        print("Element Found")\n    else:\n        print("Not Found")',
    ExpectedOutput: 'Error occurred during submission',
    Description:    'Q1 wrong submit — case sensitive error'
  },
  {
    TestCase:       'q2_wrong_syntax',
    Code:           'def findMaxConsecutiveOnes(nums):',
    ExpectedOutput: 'SyntaxError',
    Description:    'Q2 incomplete code'
  },
  {
    TestCase:       'q2_wrong_submit',
    Code:           'def Search(list_input, value):\n    if value in list_input:\n        print("Element Found")',
    ExpectedOutput: 'Error occurred during submission',
    Description:    'Q2 wrong submit'
  },
  {
    TestCase:       'q3_wrong_syntax',
    Code:           'def Search(list_input, value):\n    if value in list_input:\n        print("Element Found")',
    ExpectedOutput: 'SyntaxError',
    Description:    'Q3 wrong syntax'
  },
  {
    TestCase:       'q3_wrong_submit',
    Code:           'def Search(list_input, value):\n    if value in list_input:\n        print("Element Found")',
    ExpectedOutput: 'Error occurred during submission',
    Description:    'Q3 wrong submit'
  },
  {
    TestCase:       'q4_wrong_syntax',
    Code:           'def sortedSquares(nums):',
    ExpectedOutput: 'SyntaxError',
    Description:    'Q4 incomplete code'
  },
  {
    TestCase:       'q4_wrong_submit',
    Code:           'def sortedSquares(nums):',
    ExpectedOutput: 'No tests were collected',
    Description:    'Q4 wrong submit'
  },
];

const workbook  = XLSX.utils.book_new();
const worksheet = XLSX.utils.json_to_sheet(pythonData);

worksheet['!cols'] = [
  { wch: 30 },  // TestCase
  { wch: 60 },  // Code
  { wch: 40 },  // ExpectedOutput
  { wch: 45 },  // Description
];

XLSX.utils.book_append_sheet(workbook, worksheet, 'PythonData');
XLSX.writeFile(workbook, path.join(__dirname, 'pythonData.xlsx'));

console.log('✅ pythonData.xlsx created in testdata/ folder');
console.log('📊 Test cases added:');
pythonData.forEach(row => console.log(`   - ${row.TestCase}`));