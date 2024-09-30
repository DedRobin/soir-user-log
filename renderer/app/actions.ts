'use server';
import * as XLSX from 'xlsx';
import * as fs from 'fs';
import { Readable } from 'stream';
import { getFormattedDate } from '@/date';

XLSX.set_fs(fs);
XLSX.stream.set_readable(Readable);

export async function writeDataToXLSX(data: string[]) {
  const date = getFormattedDate();
  const row = [date, ...data];

  const filename = 'test';
  const path = `${process.cwd()}\\.log\\${filename}.xlsx`;

  try {
    const wb = XLSX.readFile(path);
    const ws = wb.Sheets['Data'];
    XLSX.utils.sheet_add_aoa(ws, [row], { origin: -1 });
    XLSX.writeFile(wb, path);

    console.log('TRY');
  } catch (error) {
    console.error(error);
    const wb = XLSX.utils.book_new();
    const headers = ['Дата', 'Ф.И.О.', 'Номер автомобиля'];
    const ws = XLSX.utils.aoa_to_sheet([headers, row]);
    XLSX.utils.book_append_sheet(wb, ws, 'Data');
    XLSX.writeFile(wb, path);

    console.log('CATCH');
  }
}
