
// testdata/loginData.js
// Excel READER — reads from loginData.xlsx

const path = require('path');
const XLSX = require('xlsx');

const EXCEL_FILE = path.join(__dirname, 'loginData.xlsx');

function getLoginData(rowKey) {
  try {
    const workbook = XLSX.readFile(EXCEL_FILE);
    const sheet    = workbook.Sheets['LoginData'];
    const rows     = XLSX.utils.sheet_to_json(sheet);
    const row      = rows.find(r => r.TestCase === rowKey);

    if (!row) {
      throw new Error(
        `No test data found for key: "${rowKey}"\n` +
        `Available keys: ${rows.map(r => r.TestCase).join(', ')}`
      );
    }

    return {
      username: String(row.Username || ''),
      password: String(row.Password || ''),
    };
  } catch (err) {
    throw new Error(`Excel read error: ${err.message}`);
  }
}

module.exports = { getLoginData };