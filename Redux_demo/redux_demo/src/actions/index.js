export const increment = (multi) => {
  return(
   {
    type: "increment",
    payload:
        multi
   } 
  );
};

export const decrement = () => 
{
    return(
        {
            type: "decrement",
        }
    );
};

