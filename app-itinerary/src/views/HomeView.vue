<template>
  <div class="container">
    <h1>{{ pageTitle }}</h1>
    <p>{{ pageContent }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Instructions/Features:',
      pageContent: 'Upload a .xlsx file with the following columns: \n\
      NAME, PRODUCT, COST, COUNT. \n\
      The "Toggle Total" button allows you to show the total prices of each item. \n\
      You may also filter the table by the number of people in each group. \n\
      Finally, use the "Export Data" to export back to .xlsx.',
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}
p {
  font-size: 1.5rem;
  line-height: 1.5;
  color: #e0e0e0;
}
</style>
