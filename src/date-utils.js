function getCurrentDate() {
    return new Date().toISOString();
  }
  
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }
  
  module.exports = { getCurrentDate, formatDate };
  