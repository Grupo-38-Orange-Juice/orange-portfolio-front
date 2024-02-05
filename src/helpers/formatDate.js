const formatDate = (date) => {
  const newDate = new Date(date);
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const year = newDate.getFullYear().toString().slice(2);
  return `${month}/${year}`;
};

export default formatDate;
