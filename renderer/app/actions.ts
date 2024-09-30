'use server';
import * as XLSX from 'xlsx';
import * as fs from 'fs';
import { Readable } from 'stream';
import { appendRowToBook, createBook as createNewBook } from '@/utils/xlsx';
import { getFormattedDate } from '@/utils/date';

XLSX.set_fs(fs);
XLSX.stream.set_readable(Readable);

export async function writeDataToXLSX(data: string[]) {
  const date = getFormattedDate();
  const row = [date, ...data];

  const filename = 'test';
  const path = `${process.cwd()}\\.log\\${filename}.xlsx`;

  try {
    appendRowToBook(row, path);
  } catch {
    createNewBook(row, path);
  }
}
