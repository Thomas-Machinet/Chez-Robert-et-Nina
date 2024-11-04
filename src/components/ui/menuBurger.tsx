interface MenuBurgerProps {
  isOpen: boolean;

  setIsOpen: (isOpen: boolean) => void;
}

const MenuBurger: React.FC<MenuBurgerProps> = ({ isOpen, setIsOpen }) => {
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <button
      onClick={handleClick}
      className="group fixed right-5 top-5 z-40 flex size-7 flex-col items-center justify-between md:hidden "
      aria-label="Toggle menu"
    >
      <span
        className={`block h-0.5 w-full  bg-white transition duration-300 ${
          isOpen ? "translate-y-3 rotate-45" : "rotate-0"
        }`}
      ></span>
      <span
        className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block h-0.5 w-full  bg-white transition duration-300 ${
          isOpen ? "-translate-y-3 -rotate-45" : "rotate-0"
        }`}
      ></span>
    </button>
  );
};

export default MenuBurger;
