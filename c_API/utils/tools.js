import Link from "next/dist/client/link";

export const clsx = (conditionals, others) => {
  return [
    others,
    Object.keys(conditionals)
      .filter((key) => conditionals[key])
      .join(" "),
  ].join(" ");
};

export const Linker = ({ to: url, className, children }) => {
  if (url.includes("http", "https")) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  } else {
    return <Link href={url} className={className}>{children}</Link>;
  }
};

export const codeMapping = (key, data, itemAll = false) => {
  if (!key) return;
	if (!data) return;
  let result;
  data.map((item) => {
    if (key === item.code) {
      if (itemAll) {
        return (result = item);
      } else {
        return (result = item.name);
      }
    }
    return false;
  });
  return result || key;
};

export const nameMapping = (key, data, itemAll = false) => {
  if (!key) return;
	if (!data) return;
  let result;
  data.map((item) => {
    if (key === item.name) {
      if (itemAll) {
        return (result = item);
      } else {
        return (result = item.code);
      }
    }
    return false;
  });
  return result || key;
};