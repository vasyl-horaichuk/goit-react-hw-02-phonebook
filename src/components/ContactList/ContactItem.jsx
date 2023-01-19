export const ContactItem = ({ contact: { name, number } }) => {
  return (
    <>
      <p>
        {name}:{number}
      </p>
      <button type="button">Delete</button>
    </>
  );
};
