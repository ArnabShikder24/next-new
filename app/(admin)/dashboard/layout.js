export default function AdminLayout({ children, favorites, icecream, myRecipes }) {
  return (
    <div>
      {children}

      <div className="grid grid-cols-2 gap-10 px-10">
        {favorites}
        {icecream}
        {myRecipes}
      </div>
    </div>
  );
}
