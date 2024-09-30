import { fieldNames } from '@/components/VisitorForm';
import * as XLSX from 'xlsx';

export function appendRowToBook(row: string[], path: string) {
  const wb = XLSX.readFile(path);
  const ws = wb.Sheets['Data'];
  XLSX.utils.sheet_add_aoa(ws, [row], { origin: -1 });
  XLSX.writeFile(wb, path);
}

export function createBook(row: string[], path: string) {
  const wb = XLSX.utils.book_new();
  const headers = ['Дата', ...Object.values(fieldNames)];
  const ws = XLSX.utils.aoa_to_sheet([headers, row]);
  XLSX.utils.book_append_sheet(wb, ws, 'Data');
  XLSX.writeFile(wb, path);
}
