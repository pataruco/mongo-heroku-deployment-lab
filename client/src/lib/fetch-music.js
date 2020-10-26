export const getAllMusic = async () => {
  const response = await fetch('http://localhost:5000/music');
  return await response.json();
};
