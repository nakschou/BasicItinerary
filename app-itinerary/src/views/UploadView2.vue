<template>
  <div>
    <div class="button-container">
      <input type="file" @change="handleFileUpload" class="upload-button">
      <button class="toggle-button" :class="{'active': showTotal}" @click="toggleTotal">Toggle Total</button>
      <button class="export-button" @click="exportData">Export Data</button>
    </div>
    <div class="filter-container">
      <label for="filter-input">Filter by Number of People:</label>
      <input type="number" id="filter-input" v-model.number="filterValue">
    </div>
    <table v-if="filteredData">
      <thead>
        <tr>
          <th v-for="cell in filteredData[0]">{{ cell }}</th>
          <th v-if="showTotal">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in filteredData.slice(1)" :key="rowIndex" :class="rowIndex % 2 === 0 ? 'even-row' : 'odd-row'">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          <td v-if="showTotal">{{ multiply(row[2], row[3]) }}</td>
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
      showTotal: false,
      filterValue: null,
    };
  },
  computed: {
    filteredData() {
      //console.log(this.filterValue)
      if (!this.data || this.filterValue == null || this.filterValue === '') {
        return this.data;
      }
      const filteredRows = this.data.slice(1).filter(row => {
        //note: hardcoded the number of people to be in the 4th column. can be changed in event of itinerary change.
        const numPeople = Number(row[3]);
        return !isNaN(numPeople) && numPeople == this.filterValue;
      });
      return [this.data[0], ...filteredRows];
    },
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
    multiply(a, b) {
      const result = Number(a) * Number(b);
      return isNaN(result) ? 0 : result;
    },
    toggleTotal() {
      this.showTotal = !this.showTotal;
    },
    exportData() {
      if (!this.filteredData) {
        return;
      }
      const worksheet = XLSX.utils.aoa_to_sheet(this.filteredData.map((row, index) => {
        if (this.showTotal) {
          const total = this.multiply(row[2], row[3]);
          if (index === 0) {
            return [...row, 'Total'];
          } else {
            return [...row, total];
          }
        } else {
          return row;
        }
      }));
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
      const date = new Date().toISOString().slice(0, 10);
      const filename = `data-${date}.xlsx`;
      XLSX.writeFile(workbook, filename);
    },
  },
};
</script>


<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #1f46e5;
  font-weight: bold;
  color: #ffffff;
}

.even-row {
  background-color: #f2f2f2;
  color: #000;
}

.odd-row {
  background-color: #fff;
  color: #000;
}

.button-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.upload-button {
  font-size: 16px;
  padding: 8px 16px;
  background-color: #1f46e5;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggle-button {
  font-size: 16px;
  padding: 8px 16px;
  background-color: #fff;
  color: #1f46e5;
  border: 1px solid #1f46e5;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.toggle-button:hover {
  background-color: #1f46e5;
  color: #fff;
}

.export-button {
  font-size: 16px;
  padding: 8px 16px;
  background-color: #fff;
  color: #1f46e5;
  border: 1px solid #1f46e5;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.export-button:hover {
  background-color: #1f46e5;
  color: #fff;
}

.filter-input {
  margin-right: 16px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
