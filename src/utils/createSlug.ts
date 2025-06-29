export default function (title: string) {
  return (
    title
      // remove leading & trailing whitespace
      .trim()
      // remove special characters
      .replace(/[^A-Za-z0-9 ]/g, "")
      // replace spaces
      .replace(/\s+/g, "-")
      // remove leading & trailing separators
      .replace(/^-+|-+$/g, "")
      // output lowercase
      .toLowerCase()
  );
}
