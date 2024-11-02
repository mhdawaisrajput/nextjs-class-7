"use client";

interface IProps {
  // text?: string >>> optional
  text: string;
}

// const Button = (props: IProps) => {
//   // console.log(props)
//   console.log(props.text);
//   return (
//     <button className="text-white bg-blue-500 px-4 py-2 mx-3">
//       {props.text}
//     </button>
//   );
// };

const Button = (props: IProps) => {
  const HandleClick = () => {
    alert("Button Clicked");
  };
  return (
    <button
      onClick={HandleClick}
      className="text-white bg-blue-500 px-4 py-2 mx-3"
    >
      {props.text}
    </button>
  );
};

export default Button;