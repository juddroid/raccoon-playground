const getData = async () => {
  try {
    const res = await fetch('http://localhost:3001');
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

getData();
