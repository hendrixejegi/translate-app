async function getTranslation(
  text = "Hello,%20how%20are%20you?",
  from = "en",
  to = "fr",
) {
  const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch translation (status ${res.status})`);
    }

    const result = await res.json();
    return result.responseData;
  } catch (error) {
    console.error("Error in getTranslation:", error);
    throw error;
  }
}

export default getTranslation;
