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
      const sheetData = XLSX.utils.sheet_to_json(worksheet);

        // Map the header row to column names
        this.headers = Object.keys(sheetData[0]);

        // Map each row of data to an object
        this.tableData = sheetData.map(row => Object.values(row));
        console.log(this.headers)
        console.log(this.tableData[0])
      };
      reader.readAsBinaryString(file);
    },
  },
};
</script>
