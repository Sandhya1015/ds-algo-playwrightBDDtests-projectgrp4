// testdata/createLoginExcel.js
// Run ONCE: node testdata/createLoginExcel.js

const XLSX = require('xlsx');
const path = require('path');

const loginData = [
  { TestCase: 'valid_credentials',          Username: 'bunny@189.com',           Password: 'Password@777',  Description: 'Valid registered user' },
  { TestCase: 'unregistered_valid',          Username: 'notregistered@test.com',  Password: 'Password@777',  Description: 'Unregistered username' },
  { TestCase: 'valid_user_numeric_pass',     Username: 'bunny@189.com',           Password: '12345678',      Description: 'All numeric password' },
  { TestCase: 'valid_user_short_pass',       Username: 'bunny@189.com',           Password: 'Ab@12',         Description: '5 char password' },
  { TestCase: 'valid_user_unregistered_pass',Username: 'bunny@189.com',           Password: 'Unregist@123',  Description: 'Unregistered password' },
  { TestCase: 'unregistered_both',           Username: 'notregistered@test.com',  Password: 'Unregist@123',  Description: 'Both unregistered' },
  { TestCase: 'invalid_user_valid_pass',     Username: 'invalid@@user',           Password: 'Password@777',  Description: 'Invalid username format' },
];

const workbook  = XLSX.utils.book_new();
const worksheet = XLSX.utils.json_to_sheet(loginData);
worksheet['!cols'] = [{ wch: 32 }, { wch: 26 }, { wch: 20 }, { wch: 45 }];

XLSX.utils.book_append_sheet(workbook, worksheet, 'LoginData');
XLSX.writeFile(workbook, path.join(__dirname, 'loginData.xlsx'));

console.log('✅ loginData.xlsx created in testdata/ folder');
console.log('📊 Test cases added:');
loginData.forEach(row => console.log(`   - ${row.TestCase}`));