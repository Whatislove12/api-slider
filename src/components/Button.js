
export const Button = ({ icon, onClick }) => {
  
    let classes = 'text-4xl w-10 h-10 cursor-pointer opacity-80 hover:opacity-100 ';
    return (
    <button onClick={onClick} className={classes}>{icon}</button>
  );
};
