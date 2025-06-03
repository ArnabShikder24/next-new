export default function UserLayout({ children, makeIceCream, makeRecipes }) {
  return (
    <div>
      {children}

      <div className="grid grid-cols-2 gap-10 px-10">
        {makeIceCream}
        {makeRecipes}
      </div>
    </div>
  );
}
