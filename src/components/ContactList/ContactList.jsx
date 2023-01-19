import { ContactItem } from './ContactItem';

export const ContactList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <ContactItem contact={item} />
        </li>
      ))}
    </ul>
  );
};
