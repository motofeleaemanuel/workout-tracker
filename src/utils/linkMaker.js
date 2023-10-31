export const linkMaker = (link) => {
  const newLink = link.replace(/ /g, "");
  return newLink.charAt(0).toLowerCase() + newLink.slice(1);
};
