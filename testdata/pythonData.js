// testdata/pythonData.js
// Excel reader for Python editor test data
// Reads from testdata/pythonData.xlsx

const path = require('path');
const XLSX = require('xlsx');

const EXCEL_FILE = path.join(__dirname, 'pythonData.xlsx');

/**
 * Reads Python code and expected output from Excel by row key
 * @param {string} rowKey - matches "TestCase" column in Excel
 * @returns {{ code: string, expectedOutput: string }}
 */
function getPythonData(rowKey) {
  try {
    const workbook  = XLSX.readFile(EXCEL_FILE);
    const sheet     = workbook.Sheets['PythonData'];
    const rows      = XLSX.utils.sheet_to_json(sheet);
    const row       = rows.find(r => r.TestCase === rowKey);

    if (!row) {
      throw new Error(
        `No data found for key: "${rowKey}"\n` +
        `Available keys: ${rows.map(r => r.TestCase).join(', ')}`
      );
    }

    return {
      code:           String(row.Code           || ''),
      expectedOutput: String(row.ExpectedOutput || ''),
      description:    String(row.Description    || ''),
    };
  } catch (err) {
    throw new Error(`Excel read error: ${err.message}`);
  }
}

module.exports = { getPythonData };