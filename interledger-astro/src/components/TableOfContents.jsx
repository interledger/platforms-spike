import styles from "./TableOfContents.module.css";

export default function TableOfContents({ linksArray }) {
  const links = [];
  for (let i = 0; i < linksArray.length; i++) {
    links.push(
      <li>
        <a href={linksArray[i].slug}>{linksArray[i].title}</a>
      </li>
    );
  }
  return (
    <aside className={styles.toc}>
      <h4>On this page</h4>
      <ul>{links}</ul>
    </aside>
  );
}
