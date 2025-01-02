export const Truncate = (text: string, index: number) => {
    const words = text.split(" ");
    if (words.length > index) {
      return words.slice(0, index).join(" ") + " ...";
    }
    return text;
  };