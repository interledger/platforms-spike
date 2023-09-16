export default function SideNav({ linksArray }) {
  const links = [];
  for (let i = 0; i < linksArray.length; i++) {
    links.push(
      <li>
        <a href={linksArray[i].slug}>{linksArray[i].title}</a>
      </li>
    );
  }
  return (
    <nav className="side-nav">
      <ul>{links}</ul>
    </nav>
  );
}
