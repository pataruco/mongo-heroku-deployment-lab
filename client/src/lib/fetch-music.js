export const getAllMusic = async () => {
  const response = await fetch('/music');
  const data = await response.text();
  console.log({ response, data });
};
