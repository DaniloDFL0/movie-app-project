const Button = ({ genreName, handleClick }) => {
  return (
    <>
        <button onClick={handleClick} className="text-white w-32 h-12 hover:bg-slate-700 duration-100 ease-in-out bg-slate-800">{genreName}</button>
    </>
  )
}

export default Button