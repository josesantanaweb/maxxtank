const Sidebar = () => {
  const articles = [
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed"
  ];

  return (
    <div className="p-4">
      <h4 className="text-2xl font-bold mb-2">Más artículos</h4>
      <div className="border-b-2 border-gray-300 border-dashed mb-4"></div>
      <ul className="space-y-4">
        {articles.map((article, index) => (
          <li key={index}>
            <a href="#" className="no-underline hover:underline">
              {article}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
