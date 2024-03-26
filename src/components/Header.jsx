const pages = [
  { name: "HOME", path: "/" },
  { name: "EVENTS", path: "/events" },
  { name: "PODCASTS", path: "/podcasts" },
  { name: "INTERNATIONAL PRESENCE", path: "/international" },
  { name: "PARTNERS", path: "/partners" },
];

export default () => {
  return (
    <header class="flex flex-row justify-between p-5 items-center">
      <span class="text-7xl font-bold">IACES</span>
      <nav class="flex justify-center items-center">
        <ul class="flex flex-row justify-around gap-5 font-medium">
          {pages.map((page) => (
            <li key={page.path} class="gap-2">
              <a href={page.path}>{page.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a href="?" class="bg-black text-white p-2 font-medium">
        Contact us
      </a>
    </header>
  );
};
