import { Link, Navigate } from "react-router-dom";

const Buttons = ({ type, name, text, onclick, style }) => {
  return (
    <>
      <button type={type} className={style} name={name} onClick={onclick}>
        {text}
      </button>
    </>
  );
};

const CustomLink = ({ linkTo, text, style }) => {
  console.log(linkTo);
  return (
    <>
      <Link className={style} to={linkTo}>
        {text}
      </Link>
    </>
  );
};

const Anchor = ({ link, text, style }) => {
  return (
    <>
      <a href={`${link}`} className={style}>
        {text}
      </a>
    </>
  );
};

export { Buttons, CustomLink, Anchor };
