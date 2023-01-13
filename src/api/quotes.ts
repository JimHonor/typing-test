const API_URL = "https://type.fit/api/quotes";

type Quote = {
  text: string;
  author: string;
};

export const fetchQuotes = async (): Promise<Quote[]> => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};
