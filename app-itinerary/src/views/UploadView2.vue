<template>
    <div>
      <input type="file" @change="handleFileUpload">
      <table v-if="data">
        <thead>
          <tr>
            <th v-for="cell in data[0]">{{ cell }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in data" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
import * as XLSX from 'xlsx/dist/xlsx.full.min.js';
  
  export default {
    data() {
      return {
        data: null,
      };
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          const workbook = XLSX.read(reader.result, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          this.data = data;
        };
        reader.readAsBinaryString(file);
      },
    },
  };
  </script>
  