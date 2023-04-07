<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    <v-data-table :headers="headers" :items="tableData"></v-data-table>
  </div>
</template>

<script>
import * as XLSX from 'xlsx/dist/xlsx.full.min.js';

export default {
  data() {
    return {
      headers: [],
      tableData: [],
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
      const data = reader.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Map the header row to column names
        console.log(sheetData[0])
        this.headers = sheetData[0].map((header) => {
          return {
            text: header,
            value: header,
          };
        });

        // Remove the header row from the data
        sheetData.shift();

        // Map each row of data to an object
        this.tableData = sheetData.map((row) => {
          const obj = {};
          this.headers.forEach((header) => {
            obj[header.value] = row[header.text];
          });
          return obj;
        });
      };
      reader.readAsBinaryString(file);
    },
  },
};
</script>
