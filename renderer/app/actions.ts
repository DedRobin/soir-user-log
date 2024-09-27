'use server';
import * as XLSX from 'xlsx';
import * as fs from 'fs';
import { Readable } from 'stream';

XLSX.set_fs(fs);
XLSX.stream.set_readable(Readable);

export async function readSheet() {
  const path = process.cwd() + '\\';
  try {
    const wb = XLSX.readFile(path + '.log\\test.xlsx');
    console.log(wb.Sheets['MyData'])
    const rows = [{ name: 'Foo', birthday: 'bar' }];
    const ws = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, 'MyData');
    XLSX.writeFile(wb, path + '.log\\test.xlsx');
    console.log('TRY');
  } catch (error) {
    console.error(error);
    const wb = XLSX.utils.book_new();
    const rows = [
      { name: 'George Washington', birthday: '1732-02-22' },
      { name: 'John Adams', birthday: '1735-10-19' },
    ];
    const ws = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, 'Dates');
    XLSX.writeFile(wb, path + '.log\\Presidents.xlsx');

    console.log('CATCH');
  }
}
